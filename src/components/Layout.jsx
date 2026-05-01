
import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import './Layout.css'

const Layout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    return (
        <div className="layout-container">
            {/* Sidebar - Hidden on Mobile via CSS */}
            <div className="sidebar-container">
                <Sidebar isOpen={true} />
            </div>

            {/* Overlay for mobile sidebar */}
            {isSidebarOpen && (
                <div
                    className="sidebar-overlay"
                    onClick={() => setIsSidebarOpen(false)}
                ></div>
            )}

            {/* Main Content Area */}
            <div className="main-content-area">
                <Header toggleSidebar={toggleSidebar} />

                <main className="main-content">
                    <div className="content-wrapper">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Layout
