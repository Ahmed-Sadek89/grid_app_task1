import { CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { Field } from 'formik';


type props = {
    options: {
        id: string;
        text: string;
    }[],
    index: number,
    questionAnswer: string,
    isSubmitting: boolean
}
const FormContentOptions = ({ options, index, questionAnswer, isSubmitting }: props) => {
    return (
        <>
            {options.map((o, v) => (
                <div key={v} className="flex items-center gap-x-3">
                    <Field type="radio" value={o.id} name={`question-${index}`} id={o.text} className="w-5 h-5 appearance-none bg-white checked:bg-custom-green checked:border-transparent border border-custom-blue rounded-full cursor-pointer transition-colors duration-300 ease-in-out" />
                    <label htmlFor={o.text} className="cursor-pointer text-xl transition delay-300 hover:text-custom-blue">{o.text}</label>
                    {
                        isSubmitting &&
                        o.id === questionAnswer && <CheckCircleIcon aria-hidden="true" className="h-5 w-5 text-green-600" />
                    }
                    {
                        isSubmitting &&
                        o.id !== questionAnswer && <ExclamationTriangleIcon aria-hidden="true" className="h-5 w-5 text-red-600" />
                    }
                </div>
            ))}
        </>
    )
}

export default FormContentOptions
