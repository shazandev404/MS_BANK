import React, { useState, useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import AccountSection from '../components/dashboard/AccountSection'
import CardSection from '../components/dashboard/CardSection'
import MobileNavGrid from '../components/dashboard/MobileNavGrid'
import './MyAccount.css'

const MyAccount = () => {
    // State for mobile view navigation ('dashboard' or 'accounts')
    const [mobileView, setMobileView] = useState('dashboard');
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1025);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1025);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const openAccounts = () => {
        setMobileView('accounts');
    }

    const openCards = () => {
        setMobileView('cards');
    }

    const backToDashboard = () => {
        setMobileView('dashboard');
    }

    return (
        <div className="my-account-container">
            {/* Header */}
            {/* Header */}
            <div className="flex items-center gap-2 mb-6">
                {isMobile && mobileView === 'accounts' && (
                    <button onClick={backToDashboard} className="text-gray-400 hover:text-white">
                        <ArrowLeft size={24} />
                    </button>
                )}
                {isMobile && mobileView === 'cards' && (
                    <button onClick={backToDashboard} className="text-gray-400 hover:text-white">
                        <ArrowLeft size={24} />
                    </button>
                )}
                <h1 className="my-account-title mb-0">
                    {isMobile && mobileView === 'dashboard' ? `Welcome Back` : (mobileView === 'cards' ? 'My Cards' : 'My Accounts')}
                    {isMobile && mobileView === 'dashboard' && <span className="mobile-subtitle">Lucifer Morningstar</span>}
                </h1>
            </div>

            {/* Mobile Navigation Grid - Only on Mobile Dashboard */}
            {isMobile && mobileView === 'dashboard' && (
                <MobileNavGrid onToggleAccounts={openAccounts} onToggleCards={openCards} isAccountsVisible={false} />
            )}

            <div className="dashboard-grid">
                {/* Left Column - Accounts */}
                {/* Desktop: Always Show. Mobile: Show only if view is 'accounts' */}
                {(!isMobile || mobileView === 'accounts') && (
                    <div className="account-section-wrapper animate-slide-down">
                        <AccountSection />
                    </div>
                )}

                {/* Right Column - Card Details */}
                {/* Desktop: Always Show. Mobile: Show only if view is 'cards' */}
                {(!isMobile || mobileView === 'cards') && (
                    <CardSection />
                )}
            </div>
        </div>
    )
}

export default MyAccount
