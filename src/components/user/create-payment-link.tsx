import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { SheetClose, SheetDescription, SheetHeader, SheetTitle } from '../ui/sheet'
import { Button } from '../ui/button'
import { generatePaymentLink } from '@/(db)/lib/payments'
import Copie from '../for-all/copie'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
const CreatePaymentLink = () => {
  const [loading, setLoading] = useState(false)
  const [product, setProduct] = useState('')
  const [amount, setAmount] = useState(0)
  const [paymentLink, setPaymentLink] = useState(null)
  const [currency, setCurrency] = useState('USD')
  const handelSubmit = async () => {
    try {
      setLoading(true)
      const data = {
        amount,
        productId: product,
        currency
      }
      //@ts-ignore
      const res = await generatePaymentLink(data)
      //@ts-ignore
      setPaymentLink(res)
    } catch (error) {
      console.log(error)
    }
    finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="flex gap-2 flex-col justify-start items-start">
        <SheetHeader
        >
          <SheetTitle>
            Create Payment link
          </SheetTitle>
          <SheetDescription>
            Please fill in the form below to create a payent link
          </SheetDescription>
        </SheetHeader>
      </div>
      <div className="flex gap-3 flex-col w-full mt-4 justify-start items-start">
        <Label>
          Product
        </Label>
        <Input
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          className="w-full"
          placeholder='Enter product name...'
        />
      </div>
      <div className="flex gap-3 flex-col w-full mt-4 justify-start items-start">
        <Label>
          Amount
        </Label>
        <Input
          value={amount}
          //@ts-ignore
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          className="w-full"
          placeholder='Enter amount...'
        />
      </div>

      <Select
        defaultValue={currency}
        onValueChange={(e) => setCurrency(e)}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select a currency" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem
              value='USD'
            >
              USD
            </SelectItem>
            <SelectItem
              value='IQD'
            >
              IQD
            </SelectItem>
            <SelectItem
              value='EUR'
            >
              EUR
            </SelectItem>
            <SelectItem
              value='AED'
            >
              AED
            </SelectItem>

          </SelectGroup>
        </SelectContent>
      </Select>
      <Button
        isloading={loading}
        disabled={loading}
        className='w-fit mt-4'
        onClick={handelSubmit}>
        Create Payet Link
      </Button>
      {
        paymentLink && (
          <div className="flex w-full justify-start items-center gap-2">
            <Input
              placeholder='Copie your payment link'
              value={paymentLink}
            />
            <Copie
              text={'https://www.ipsepay.com/payment-link/' + paymentLink}
            />
          </div>
        )
      }
      <SheetClose />
    </>
  )
}

export default CreatePaymentLink