import React from 'react'
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <div className=' flex flex-col-reverse md:flex-row  md:min-h-screen '>
                <div className=' lg:w-64'>
                    <Sidebar />
                </div>
                <div className="flex-1 p-4 pt-10 md:px-10">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Layout
