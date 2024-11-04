"use client"
import BtnsControl from '@/components/btns-control'
import { useEffect, useState } from 'react';

const FormControl = ({ isSubmitting, result }: { isSubmitting: boolean, result: string }) => {
    const [savedResult, setSavedResult] = useState<string | null>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedResult = localStorage.getItem("page1_result");
            setSavedResult(storedResult ? JSON.parse(storedResult) : "");
        }
    }, []);
    return (
        <div className='w-full items-center justify-center flex flex-col gap-y-3'>
            {
                (isSubmitting || savedResult) &&
                <div className='space-y-3 text-center'>
                    <p className='text-2xl font-bold'>النتيجه النهائيه :</p>
                    <span>{result || savedResult}</span>

                </div>
            }
            <BtnsControl isSubmitting={isSubmitting} />
        </div>
    )
}

export default FormControl
