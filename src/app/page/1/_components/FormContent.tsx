import { questions } from '@/mock/page1'
import { CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { ErrorMessage, Field } from 'formik';


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
                        {question.options.map((o, v) => (
                            <div key={v} className="flex items-center gap-x-3">
                                <Field type="radio" value={o.id} name={`question-${index}`} id={o.text} className="w-5 h-5 appearance-none bg-white checked:bg-custom-green checked:border-transparent border border-custom-blue rounded-full cursor-pointer transition-colors duration-300 ease-in-out" />
                                <label htmlFor={o.text} className="cursor-pointer text-xl transition delay-300 hover:text-custom-blue">{o.text}</label>
                                {
                                    isSubmitting &&
                                    o.id === question.answer && <CheckCircleIcon aria-hidden="true" className="h-5 w-5 text-green-600" />
                                }
                                {
                                    isSubmitting &&
                                    o.id !== question.answer && <ExclamationTriangleIcon aria-hidden="true" className="h-5 w-5 text-red-600" />
                                }
                            </div>
                        ))}
                    </div>
                    <ErrorMessage name={`question-${index}`} component="div" className="text-red-500 text-sm italic font-bold" />
                </div>
            ))}
        </>
    )
}

export default FormContent
