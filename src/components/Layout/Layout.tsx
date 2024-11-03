import React from 'react'
import Header from '../Header/Header'
import Pagination from '../Pagination/Pagination'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            <main className="min-h-screen flex items-center justify-center">
                <div className="container py-4 my-5 bg-white rounded-lg max-h-screen overflow-y-auto w-[600px] shadow-2xl">
                    {children}
                </div>
            </main>
            <Pagination />
        </>
    )
}

export default Layout
