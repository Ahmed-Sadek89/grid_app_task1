import { questions } from "@/mock/page1";
import * as Yup from 'yup';

export interface FormValues {
    [key: string]: string;
}


export const initialValues: FormValues = questions.reduce((acc, _, index) => {
    acc[`question-${index}`] = '';
    return acc;
}, {} as FormValues);

export const validationSchema = Yup.object().shape(
    questions.reduce((acc, _, index) => {
        acc[`question-${index}`] = Yup.string().required('برجاء الاجابة على هذا السؤال');
        return acc;
    }, {} as Record<string, any>)
);
