import BtnsControl from '@/components/btns-control'
import React from 'react'

const FormControl = ({ isSubmitting, result }: { isSubmitting: boolean, result: string }) => {
    return (
        <div className='w-full items-center justify-center flex flex-col gap-y-3'>
            {
                isSubmitting &&
                <div className='space-y-3 text-center'>
                    <p className='text-2xl font-bold'>النتيجه النهائيه :</p>
                    <span>{result}</span>

                </div>
            }
            <BtnsControl isSubmitting={isSubmitting} />
        </div>
    )
}

export default FormControl
