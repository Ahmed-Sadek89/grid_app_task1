import { Metadata } from 'next';
import React from 'react'
import Form from './_components/Form';

export const metadata: Metadata = {
    title: "GRID APPS | Task1| Page 1",
    description: "GRID APPS Task1 using next14, tailwindCSS, Drag&Drop(@hello-pangea/dnd)",
};


const page = () => {
    return (
        <>
            <h1 className='text-center text-custom-sky-blue1 font-bold text-2xl mb-5'>
                Group Radio Single Choice
            </h1>
            <Form />
        </>
    )
}

export default page
