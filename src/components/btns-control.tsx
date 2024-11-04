import { ArrowPathIcon, CheckBadgeIcon } from '@heroicons/react/20/solid'
import React from 'react'

const BtnsControl = ({ isSubmitting }: { isSubmitting?: boolean }) => {
    const className = `rounded-lg p-3 flex items-center justify-center gap-x-2 text-white w-auto ${isSubmitting ? "cursor-not-allowed" : "cursor-pointer"}`

    return (
        <div className='w-full flex items-center justify-center gap-3 flex-wrap sm:flex-nowrap'>
            <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-custom-green ${className}`}
            >
                <CheckBadgeIcon aria-hidden="true" className="h-5 w-5" />
                <span>فحص الإجابات</span>
            </button>
            <button
                type="reset"
                disabled={isSubmitting}
                className={`bg-custom-black2 ${className}`}
            >
                <ArrowPathIcon aria-hidden="true" className="h-5 w-5" />
                <span>إعادة المحاولة</span>
            </button>
        </div>
    )
}

export default BtnsControl
