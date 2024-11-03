import BtnsControl from '@/components/btns-control'
import { dragedItemsPage2 } from '@/types'
import React from 'react'
import { question } from '@/mock/page2';

type props = {
    items: dragedItemsPage2[]
    isSuccess: boolean | null,
    setIsSuccess: (value: React.SetStateAction<boolean | null>) => void,
    setItems: (value: React.SetStateAction<dragedItemsPage2[]>) => void
}

const FormControl = ({ items, isSuccess, setItems, setIsSuccess }: props) => {
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const userAnswer = items.map(item => item.id);

        if (userAnswer.toString() === question.answers.toString()) {
            setIsSuccess(true)
        } else {
            setIsSuccess(false)
        }
    };
    const handleReset = () => {
        setItems(question.options)
        setIsSuccess(null)
    }

    return (
        <form onSubmit={handleSubmit} onReset={handleReset} className='py-10 space-y-5'>
            {
                isSuccess === true &&
                <p className='text-center font-bold text-custom-green text-2xl'>اجابه صحيحه</p>
            }
            {
                isSuccess === false &&
                <p className='text-center font-bold text-red-500 italic text-2xl'>اجابه خاطئه</p>
            }
            <BtnsControl />
        </form>
    )
}

export default FormControl
