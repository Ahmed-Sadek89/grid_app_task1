"use client"
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

const Pagination = () => {
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = 3

    const handlePrevious = () => {
        if (currentPage > 1) setCurrentPage(prevPage => prevPage - 1)
    }

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(prevPage => prevPage + 1)
    }

    useEffect(() => {
        router.push(`/page/${currentPage}`)
    }, [router, currentPage])

    return (
        <footer className='pt-5 pb-10 flex w-full items-center justify-center'>
            <nav className="flex items-center gap-x-2 rounded-md shadow-sm">
                <button
                    type='button'
                    onClick={handlePrevious}
                    disabled={currentPage === 1}
                    className={`relative flex justify-center items-center rounded-md w-[40px] h-[40px] text-custom-blue border border-custom-blue transition duration-300 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:text-white hover:border-transparent hover:bg-custom-blue'}`}
                >
                    <span className="sr-only">Previous</span>
                    <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                        type='button'
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`relative flex justify-center font-semibold items-center rounded-md w-[40px] h-[40px] border transition duration-300 ${currentPage === page
                            ? 'text-white bg-custom-blue border-transparent'
                            : 'text-custom-blue border-custom-blue hover:text-white hover:border-transparent hover:bg-custom-blue'
                            }`}
                    >
                        {page}
                    </button>
                ))}

                <button
                    type='button'
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    className={`relative flex justify-center items-center rounded-md w-[40px] h-[40px] text-custom-blue border border-custom-blue transition duration-300 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:text-white hover:border-transparent hover:bg-custom-blue'
                        }`}
                >
                    <span className="sr-only">Next</span>
                    <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />

                </button>
            </nav>
        </footer>
    )
}

export default Pagination
