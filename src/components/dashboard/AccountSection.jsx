
import React, { useState } from 'react'
import { PiggyBank, Edit2, ChevronDown, ChevronUp } from 'lucide-react'
import './AccountSection.css'

const AccountSection = () => {
    const [activeTab, setActiveTab] = useState('general');

    // Mock Data - easy to replace with DB fetch later
    const accountData = {
        general: [
            {
                id: 'g1',
                title: 'LKR | Premium Saver Account',
                type: 'LKR Savings / Premium Saver',
                primary: true,
                accountNumber: '02100000002',
                currentBalance: '12,900,057.25',
                totalHold: '150.00',
                available: '12,850,057.25',
                currency: 'LKR'
            },
            {
                id: 'g2',
                title: 'LKR | Max Saver',
                type: 'LKR Savings / Max Saver',
                primary: false,
                accountNumber: '123456789003',
                currentBalance: '5,200,000.00',
                totalHold: '0.00',
                available: '5,200,000.00',
                currency: 'LKR'
            },
            {
                id: 'g3',
                title: 'LKR | Max Saver',
                type: 'LKR Savings / Max Saver',
                primary: false,
                accountNumber: '123456789004',
                currentBalance: '200,000.00',
                totalHold: '0.00',
                available: '200,000.00',
                currency: 'LKR'
            },
        ],
        term: [
            {
                id: 't1',
                title: 'LKR | 12M Monthly',
                type: 'LKR Term Deposit / 12 Months',
                primary: false,
                maturity: 'Maturity: Dec 2026',
                accountNumber: '123456789002',
                currentBalance: '1,000,000.00',
                totalHold: '0.00',
                available: '1,000,000.00',
                currency: 'LKR'
            }
        ]
    };

    const [expandedAccount, setExpandedAccount] = useState(null);

    const toggleExpand = (accountId) => {
        setExpandedAccount(expandedAccount === accountId ? null : accountId);
    };

    const currentAccounts = activeTab === 'general' ? accountData.general : accountData.term;

    return (
        <div className="account-section-container">
            {/* Tabs */}
            <div className="account-tabs">
                <button
                    className={`account-tab-btn ${activeTab === 'general' ? 'account-tab-btn-active' : 'account-tab-btn-inactive'}`}
                    onClick={() => setActiveTab('general')}
                >
                    General Accounts
                </button>
                <button
                    className={`account-tab-btn ${activeTab === 'term' ? 'account-tab-btn-active' : 'account-tab-btn-inactive'}`}
                    onClick={() => setActiveTab('term')}
                >
                    Term Deposits
                </button>
            </div>

            {/* Account Info Cards */}
            {currentAccounts.map((account) => (
                <div key={account.id} className="account-card">
                    <div className="account-card-header">
                        <div className="account-type-badge">
                            <PiggyBank size={18} className="piggy-icon" />
                            {account.type}
                        </div>
                        <Edit2 size={16} className="account-edit-icon" />
                    </div>

                    <div className="account-card-body">
                        <div className="account-title-area">
                            <h2 className="account-title">{account.title}</h2>
                            <p className="account-subtitle">{account.primary ? 'Primary Account' : account.maturity}</p>
                        </div>

                        <div className="account-details-grid">
                            <div className="account-number-box">
                                <p className="detail-label">ACCOUNT NUMBER</p>
                                <p className="account-detail-value mono">{account.accountNumber}</p>
                            </div>
                            <div className="account-balance-box">
                                <div className="balance-info">
                                    <p className="detail-label">AVAILABLE BALANCE</p>
                                    <h3 className="available-balance-amount">
                                        {account.available} <span className="currency-label">{account.currency}</span>
                                    </h3>
                                </div>
                                <button className="statement-btn-premium">
                                    STATEMENT
                                </button>
                            </div>
                        </div>

                        <div className="account-footer-toggle">
                            <button
                                className="toggle-details-btn"
                                onClick={() => toggleExpand(account.id)}
                            >
                                <span>{expandedAccount === account.id ? 'Hide Details' : 'View More Details'}</span>
                                {expandedAccount === account.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                            </button>
                        </div>

                        {expandedAccount === account.id && (
                            <div className="expanded-details-panel">
                                <div className="detail-row">
                                    <span className="expanded-label">Current Balance</span>
                                    <span className="expanded-value">{account.currentBalance} {account.currency}</span>
                                </div>
                                <div className="detail-row">
                                    <span className="expanded-label">Total Hold</span>
                                    <span className="expanded-value text-red">{account.totalHold} {account.currency}</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            ))}

            {/* Foreign Currency Card (Collapsed/Secondary) */}

        </div>
    )
}

export default AccountSection
