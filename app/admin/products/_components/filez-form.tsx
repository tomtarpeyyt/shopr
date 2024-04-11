'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { formatCurrency } from "@/lib/formatters";
import { useState } from "react";
import { addFilez, addProduct } from "../../_actions/products";
import { useFormState, useFormStatus } from "react-dom";

export default function FilezForm() {
    const [error, action] = useFormState(addFilez, {});

    return (
        <form action={action} className='space-y-8'>
            <div className='space-y-2'>
                <Label htmlFor='filePath'>Name</Label>
                <Input type='text' id='filePath' name='filePath' required />
            </div>
     
            <div className='space-y-2'>
                <Label htmlFor='fileBytes'>File</Label>
                <Input type='file' id='fileBytes' name='fileBytes' required />
            </div>
       
            <SubmitButton />
        </form>
    );
};

function SubmitButton() {
    const { pending } = useFormStatus();
    return <Button type='submit' disabled={ pending }>{ pending ? 'Saving...' : 'Save' }</Button>
}