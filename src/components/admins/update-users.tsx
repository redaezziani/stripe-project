'use client'

import React, { useState } from 'react';
import {  DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from '../ui/use-toast';
import { useRouter } from 'next/navigation';

interface UpdateUserProps {
    id: string;
    email: string;
    name: string;
    role: string;
}

const UpdateUserDialog: React.FC<UpdateUserProps> = ({ id, email, name, role }) => {
    const [newName, setNewName] = useState(name);
    const [newEmail, setNewEmail] = useState(email);
    const [selectedRole, setSelectedRole] = useState(role);
    const [loading, setLoading] = useState(false);
    const { toast } = useToast();
    const router = useRouter();

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewName(e.target.value);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewEmail(e.target.value);
    };

    const handleSubmit = async () => {
        try {
            setLoading(true);
            const res = await fetch(`/api/admin/castomers`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                 data: {
                    email: newEmail,
                    name: newName,
                    role: selectedRole,
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
                    <DialogTitle>Update User</DialogTitle>
                    <DialogDescription>Please fill in the form below to update a user</DialogDescription>
                </DialogHeader>
                <div className="flex gap-3 flex-col w-full mt-4 justify-start items-start">
                    <Label>Email</Label>
                    <Input
                        onChange={handleEmailChange}
                        value={newEmail}
                        className="w-full"
                        placeholder='Email New Address...'
                    />
                </div>
                <div className="flex gap-3 flex-col w-full mt-4 justify-start items-start">
                    <Label>Name</Label>
                    <Input
                        onChange={handleNameChange}
                        value={newName}
                        className="w-full"
                        placeholder='Full New Name...'
                    />
                </div>
                <Select
                    defaultValue={role}
                    onValueChange={(e) => setSelectedRole(e)}
                >
                    <SelectTrigger>
                        <SelectValue placeholder="Select a new role" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value='admin'>admin</SelectItem>
                            <SelectItem value='user'>user</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <DialogFooter>
                    <Button
                        isloading={loading}
                        disabled={loading}
                        className='w-fit mt-4'
                        onClick={handleSubmit}>
                        Update User
                    </Button>
                </DialogFooter>
            </DialogContent>
            </>
    );
};

export default UpdateUserDialog;
