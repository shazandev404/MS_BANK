import React from 'react'
import { Link } from 'react-router-dom'
import { CreditCard, ArrowRightLeft, ScrollText, MoreHorizontal, Wallet } from 'lucide-react'
import './MobileNavGrid.css'

const MobileNavGrid = ({ onToggleAccounts, onToggleCards }) => {
    return (
        <div className="mobile-nav-grid">
            {/* My Accounts - Opens Account View */}
            <div
                className="mobile-nav-card account-toggle-card"
                onClick={onToggleAccounts}
            >
                <Wallet className="mobile-nav-icon" />
                <span className="mobile-nav-title">My Accounts</span>
                <span className="mobile-nav-subtitle">Check balances & history</span>
            </div>

            {/* My Cards - Opens Card View */}
            <div
                className="mobile-nav-card link-card"
                onClick={onToggleCards}
            >
                <CreditCard className="mobile-nav-icon icon-purple" />
                <span className="mobile-nav-title">My Cards</span>
            </div>

            {/* Navigation Links */}
            <Link to="/transfer" className="mobile-nav-card link-card">
                <ArrowRightLeft className="mobile-nav-icon icon-blue" />
                <span className="mobile-nav-title">Transfers</span>
            </Link>

            <Link to="/facilities" className="mobile-nav-card link-card">
                <Wallet className="mobile-nav-icon icon-blue" />
                <span className="mobile-nav-title">My Facilities</span>
            </Link>

            <Link to="/bill-payments" className="mobile-nav-card link-card">
                <ScrollText className="mobile-nav-icon icon-green" />
                <span className="mobile-nav-title">Bill Payments</span>
            </Link>

            <Link to="/services" className="mobile-nav-card link-card">
                <MoreHorizontal className="mobile-nav-icon icon-gray" />
                <span className="mobile-nav-title">Other Services</span>
            </Link>
        </div>
    )
}

export default MobileNavGrid
