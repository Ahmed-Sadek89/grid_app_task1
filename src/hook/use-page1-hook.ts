import { answers, questions } from '@/mock/page1';
import { FormValues } from '@/utils/question1_schema_values';
import { useState } from 'react'

const usePage1Hook = () => {
    const [result, setResult] = useState("")
    const handleSubmit = (values: FormValues) => {
        const userAnswers = Object.values(values);
        const correctAnswersCount = userAnswers.filter((answer, index) => answer === answers[index]).length;

        setResult(`${correctAnswersCount}/${questions.length}`);
        localStorage.setItem("page1_result", JSON.stringify(`${correctAnswersCount}/${questions.length}`))
    };
    return { result, handleSubmit }
}

export default usePage1Hook
