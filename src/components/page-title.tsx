import React from 'react'

const PageTitle = ({ title }: { title: string }) => {
    return (
        <h1 className='text-center text-custom-sky-blue1 font-bold text-2xl mb-5'>
            {title}
        </h1>
    )
}

export default PageTitle
