import { Metadata } from 'next';
import React from 'react'
import MyForm from './_components/Form';
import PageTitle from '@/components/page-title';

export const metadata: Metadata = {
    title: "GRID APPS | Task1| Page 1",
    description: "GRID APPS Task1 using next14, tailwindCSS, Drag&Drop(@hello-pangea/dnd)",
};


const page = () => {
    return (
        <>
            <PageTitle title='Group Radio Single Choice' />
            <MyForm />
        </>
    )
}

export default page
