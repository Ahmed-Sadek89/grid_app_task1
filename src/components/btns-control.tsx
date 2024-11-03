import { ArrowPathIcon, CheckBadgeIcon } from '@heroicons/react/20/solid'
import React from 'react'

const BtnsControl = ({ isSubmitting }: { isSubmitting?: boolean }) => {
    return (
        <div className='w-full flex items-center justify-center gap-3 flex-wrap sm:flex-nowrap'>
            <button
                type="submit"
                disabled={isSubmitting}
                className={`rounded-lg py-3 flex items-center justify-center gap-x-2 text-white bg-custom-green w-full ${isSubmitting ? "cursor-not-allowed" : "cursor-pointer"}`}
            >
                <CheckBadgeIcon aria-hidden="true" className="h-5 w-5" />
                <span>فحص الإجابات</span>
            </button>
            <button type="reset" className="rounded-lg py-3 flex items-center justify-center gap-x-2 text-white bg-custom-black2 w-full">
                <ArrowPathIcon aria-hidden="true" className="h-5 w-5" />
                <span>إعادة المحاولة</span>
            </button>
        </div>
    )
}

export default BtnsControl
