import React from 'react'
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <div className="flex h-full">
                <Sidebar />
                <div className="flex-1 p-4 pt-10 md:px-10 h-full">
                <Outlet />
                </div>
            </div>


        </>
    )
}

export default Layout
