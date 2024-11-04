import { questions } from '@/mock/page1'
import { ErrorMessage } from 'formik';
import FormContentOptions from './FormContentOptions';


const FormContent = ({ isSubmitting }: { isSubmitting: boolean }) => {
    return (
        <>
            {questions.map((question, index) => (
                <div
                    key={index}
                    className={`space-y-2 border-b-2 border-dashed ${index + 1 === questions.length ? "border-b-transparent" : "border-b-custom-sky-blue2"} pb-10`}
                >
                    <h6>السؤال {index + 1}:</h6>
                    <h2 className="font-bold text-xl">{question.question} :</h2>
                    <div
                        className="w-full border-dashed border-2 border-custom-blue p-5 space-y-3 bg-center bg-cover rounded-xl"
                        style={{ backgroundImage: "url('/question_bg.svg')" }}
                    >
                        <FormContentOptions options={question.options} index={index} isSubmitting={isSubmitting} questionAnswer={question.answer} />
                    </div>
                    <ErrorMessage name={`question-${index}`} component="div" className="text-red-500 text-sm italic font-bold" />
                </div>
            ))}
        </>
    )
}

export default FormContent
