
import React from 'react'
import { Phone, Bell, Mail, CheckSquare, Menu } from 'lucide-react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = ({ toggleSidebar }) => {
    return (
        <header className="header-container">
            {/* Mobile Menu Button - REMOVED for new design */}


            {/* Brand / Logo Area */}
            <div className="mobile-brand">
                <Link to="/" className="brand-link">MS Bank</Link>
            </div>

            {/* Spacer for Desktop to align utilities to right */}
            <div className="desktop-spacer"></div>

            {/* Utility Actions */}
            <div className="utility-actions">
                <button className="utility-btn">
                    <Phone size={20} />
                    <span className="utility-text">Call Us</span>
                </button>



                <button className="utility-btn">
                    <Mail size={20} />
                    <span className="utility-text">Email Us</span>
                </button>

                <button className="utility-btn">
                    <CheckSquare size={20} />
                    <span className="utility-text">Todo</span>
                </button>

                <button className="notification-btn">
                    <Bell size={20} />
                    <span className="notification-badge"></span>
                </button>
            </div>
        </header>
    )
}

export default Header
