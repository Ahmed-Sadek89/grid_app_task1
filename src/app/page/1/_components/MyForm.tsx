"use client"
import { Formik, Form } from 'formik';
import { initialValues, validationSchema } from '@/utils/question1_schema_values';
import FormContent from './FormContent';
import FormControl from './FormControl';
import usePage1Hook from '@/hook/use-page1-hook';

const MyForm = () => {
    const {result, handleSubmit} = usePage1Hook()
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form className="text-custom-black1 space-y-4">
                    <FormContent isSubmitting={isSubmitting} />
                    <FormControl isSubmitting={isSubmitting} result={result} />
                </Form>
            )}
        </Formik>
    );
};

export default MyForm;