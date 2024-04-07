'use client'

import React, { useState } from 'react';
import {  DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from '../ui/use-toast';
import { useRouter } from 'next/navigation';
enum TransactionType {
      REFUND,
       PAID,
       FAILED,
       CANCELLED,
}
interface UpdateTransactionProps {
       id: string;
       email: string;
       name : string
       phone: string;
       amount: number;
       code: string;
       type: string;
}

const UpdateTransactionDialog: React.FC<UpdateTransactionProps> = ({ id, email, name, phone, amount, code, type }) => {
    const [newName, setNewName] = useState(name);
    const [newEmail, setNewEmail] = useState(email);
    const [selectedType, setSelectedType] = useState(type);
    const [newPhone, setNewPhone] = useState(phone);
    const [newAmount, setNewAmount] = useState(amount);
    const [newCode, setNewCode] = useState(code);
    const [loading, setLoading] = useState(false);
    const { toast } = useToast();
    const router = useRouter();

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewName(e.target.value);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewEmail(e.target.value);
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewPhone(e.target.value);
    };

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewAmount(Number(e.target.value));
    };

    const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewCode(e.target.value);
    };



    const handleSubmit = async () => {
        try {
            setLoading(true);
            const res = await fetch(`/api/admin/transactions`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                 data: {
                    email: newEmail,
                    name: newName,
                    phone: newPhone,
                    amount: newAmount,
                    code: newCode,
                    type: selectedType,
                    id
                 }
                })
            });
            const data = await res.json();
            if (data?.status !== 'success') {
                toast({
                    title: 'Error',
                    description: data.message,
                    variant: 'destructive'
                });
            } else {
                toast({
                    title: 'Success',
                    description: data.message,
                });
            }
            router.refresh();
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
       <>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Update Transaction
                    </DialogTitle>
                    <DialogDescription>
                        Update the transaction details below
                    </DialogDescription>
                </DialogHeader>
                <div className="flex gap-3 flex-col w-full mt-4 justify-start items-start">
                    <Label>
                        Name
                    </Label>
                    <Input
                        defaultValue={name}
                        onChange={handleNameChange}
                        value={newName}
                        className="w-full"
                        placeholder='Full Name...'
                    />
                </div>
                <div className="flex gap-3 flex-col w-full mt-4 justify-start items-start">
                    <Label>
                        Email
                    </Label>
                    <Input
                        defaultValue={email}
                        onChange={handleEmailChange}
                        value={newEmail}
                        className="w-full"
                        placeholder='Email Address...'
                    />
                </div>
                <div className="flex gap-3 flex-col w-full mt-4 justify-start items-start">
                    <Label>
                        Phone
                    </Label>
                    <Input
                        defaultValue={phone}
                        onChange={handlePhoneChange}
                        value={newPhone}
                        type='tel'
                        className="w-full"
                        placeholder='Phone Number...'
                    />
                </div>
                <div className="flex gap-3 flex-col w-full mt-4 justify-start items-start">
                    <Label>
                        Amount
                    </Label>
                    <Input
                        defaultValue={amount}
                        onChange={handleAmountChange}
                        value={newAmount}
                        className="w-full"
                        placeholder='Amount...'
                    />
                </div>
                <div className="flex gap-3 flex-col w-full mt-4 justify-start items-start">
                    <Label>
                        Code
                    </Label>
                    <Input
                        defaultValue={code}
                        onChange={handleCodeChange}
                        value={newCode}
                        className="w-full"
                        placeholder='Code...'
                    />
                </div>

              
                <Select
                    defaultValue={type.toString()}
                    onValueChange={(e) => setSelectedType(e)}
                >
                    <SelectTrigger>
                        <SelectValue placeholder="Select a new role" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value='REFUND'>Refund</SelectItem>
                            <SelectItem value='PAID'>Paid</SelectItem>
                            <SelectItem value='FAILED'>Failed</SelectItem>
                            <SelectItem value='CANCELLED'>Cancelled</SelectItem>                            
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <DialogFooter>
                    <Button
                        isloading={loading}
                        disabled={loading}
                        className='w-fit mt-4'
                        onClick={handleSubmit}>
                        Update Transaction
                    </Button>
                </DialogFooter>
            </DialogContent>
            </>
    );
};

export default UpdateTransactionDialog;
