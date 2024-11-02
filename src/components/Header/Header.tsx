import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <header>
            <Image src={'/logo.png'} alt='logo' width={250} height={250} className='object-contain w-auto h-auto' />
        </header>
    )
}

export default Header
