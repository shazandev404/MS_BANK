
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { LayoutDashboard, CreditCard, ArrowRightLeft, ScrollText, MoreHorizontal, User } from 'lucide-react'
import './Sidebar.css'

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const location = useLocation();

    const navItems = [
        { name: 'My Account', path: '/', icon: LayoutDashboard },
        { name: 'Transfer', path: '/transfer', icon: ArrowRightLeft },
        { name: 'My Facilities', path: '/facilities', icon: CreditCard },
        { name: 'Bill Payments', path: '/bill-payments', icon: ScrollText },
        { name: 'Other Services', path: '/services', icon: MoreHorizontal },
    ]

    return (
        <aside className={`sidebar ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
            <div className="sidebar-wrapper">
                {/* Profile Section */}
                <div className="sidebar-profile">
                    <div className="sidebar-avatar-container">
                        {/* Placeholder for Profile Picture */}
                        <div className="sidebar-avatar-placeholder">
                            <User size={40} className="sidebar-avatar-icon" />
                        </div>
                    </div>
                    <h2 className="sidebar-name">Hello, Lucifer</h2>
                    <p className="sidebar-profile-link">View Profile</p>
                </div>

                {/* Navigation Links */}
                <nav className="sidebar-nav">
                    <ul className="sidebar-nav-list">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    to={item.path}
                                    onClick={toggleSidebar ? toggleSidebar : undefined} // Close sidebar on mobile select
                                    className={`sidebar-nav-item ${location.pathname === item.path
                                        ? 'sidebar-nav-item-active'
                                        : 'sidebar-nav-item-inactive'
                                        }`}
                                >
                                    <item.icon className="sidebar-icon" />
                                    <span className="sidebar-item-text">{item.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Footer/Logout could go here */}
                <div className="sidebar-footer">
                    <button className="logout-button">
                        Log Out
                    </button>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar
