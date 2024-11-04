import BtnsControl from '@/components/btns-control'
import { ItemPage3 } from '@/types'
import React, { useState } from 'react'
import { animalsAnswers, birdsAnswers } from '@/mock/page3';

type Props = {
    data: {
        items: ItemPage3[],
        animals: ItemPage3[],
        birds: ItemPage3[]
    },
    resetResult: () => void,
}

const FormControl = ({ data, resetResult }: Props) => {
    const [result, setResult] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (data.items.length !== 0) {
            setResult("برجاء اكمال اجابتك");
            return;
        }

        const createdAnimalAnswer = data.animals.map(item => item.id).sort().toString();
        const createdBirdAnswer = data.birds.map(item => item.id).sort().toString();

        if (
            createdAnimalAnswer === animalsAnswers.sort().toString() &&
            createdBirdAnswer === birdsAnswers.sort().toString()
        ) {
            setResult("correct");
        } else {
            setResult("بعض الكلمات غير مناسبه للحيوانات او للطيور");
        }
    };

    const handleReset = () => {
        resetResult();
        setResult(null);
    }

    return (
        <form onSubmit={handleSubmit} onReset={handleReset} className='py-10 space-y-5'>
            {result && result !== "correct" && (
                <div className='flex flex-col items-center justify-center w-full'>
                    <p className='text-center font-bold text-red-500 italic text-2xl'>اجابه خاطئه</p>
                    <span className='text-center font-bold text-red-500 italic'>{result}</span>
                </div>
            )}
            {result === "correct" && (
                <p className='text-center font-bold text-custom-green text-2xl'>اجابه صحيحه</p>
            )}
            <BtnsControl />
        </form>
    );
}

export default FormControl;
