import PageTitle from '@/components/page-title';
import { Metadata } from 'next';
import MyForm from './_components/MyForm';

export const metadata: Metadata = {
    title: "GRID APPS | Task1| Page 2",
    description: "GRID APPS Task1 using next14, tailwindCSS, Drag&Drop(@hello-pangea/dnd)",
};

const page = () => {
    return (
        <>
            <PageTitle title='Ordering' />
            <MyForm />
        </>
    )
}

export default page
