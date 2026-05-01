import React from 'react'
import { Home, Wallet, History, Clock, CheckCircle, AlertCircle } from 'lucide-react'
import './FacilitiesSection.css'

const FacilitiesSection = () => {
    const facilitiesData = [
        {
            id: 'f1',
            title: 'Home Loan ',
            subtitle: 'Account ending in •••• 8832',
            icon: <Home size={24} className="facility-icon" />,
            status: 'Active',
            statusColor: 'active',
            remainingBalance: '250,000.00',
            currency: 'LKR ',
            progress: 65, // 65% remaining
            remainingText: '65% of principal remaining',
            currentDue: '1,200.00',
            dueStatus: 'On Track',
            dueStatusColor: 'success',
            details: [
                { label: 'ORIGINAL AMOUNT', value: 'LKR 380,000.00' },
                { label: 'MATURITY DATE', value: 'Aug 15, 2042' },
                { label: 'LAST PAYMENT DATE', value: 'Dec 15, 2025' },
                { label: 'NEXT PAYMENT DATE', value: 'Jan 15, 2026' },
                { label: 'TOTAL PAID', value: 'LKR 130,000.00' },
                { label: 'REMAINING TERM', value: '226 Months' },
                { label: 'LAST PAYMENT', value: 'LKR 1,200.00', },
                { label: 'NEXT PAYMENT', value: 'LKR 1,200.00', },
            ]
        },
        {
            id: 'f2',
            title: 'Personal Loan - Education',
            subtitle: 'Account ending in •••• 4452',
            icon: <Wallet size={24} className="facility-icon" />,
            status: 'Active',
            statusColor: 'active',
            remainingBalance: '12,450.00',
            currency: 'LKR',
            progress: 40,
            remainingText: '40% of principal remaining',
            currentDue: '450.00',
            dueStatus: 'Due in 3 days',
            dueStatusColor: 'warning',
            details: [
                { label: 'ORIGINAL AMOUNT', value: 'LKR 20,000.00' },
                { label: 'MATURITY DATE', value: 'Dec 10, 2025' },
                { label: 'LAST PAYMENT DATE', value: 'Dec 15, 2025' },
                { label: 'NEXT PAYMENT DATE', value: 'Jan 15, 2026' },
                { label: 'TOTAL PAID', value: 'LKR 7,550.00' },
                { label: 'REMAINING TERM', value: '26 Months' },
                { label: 'LAST PAYMENT', value: 'LKR 450.00', },
                { label: 'NEXT PAYMENT', value: 'LKR 450.00', },
            ]
        }
    ];

    return (
        <div className="facilities-section-container">
            {/* Header is likely handled by parent or hidden, but for now we render cards */}
            {facilitiesData.map((item) => (
                <div key={item.id} className="facility-card">
                    {/* Header: Icon, Title, Badge */}
                    <div className="facility-header">
                        <div className="facility-title-group">
                            <div className="facility-icon-wrapper">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="facility-title">{item.title}</h3>
                                <p className="facility-subtitle">{item.subtitle}</p>
                            </div>
                        </div>
                        <div className={`facility-status-badge ${item.statusColor}`}>
                            <div className="status-dot"></div>
                            {item.status}
                        </div>
                    </div>

                    {/* Main Balance Row */}
                    <div className="facility-balance-section">
                        <div className="balance-left">
                            <p className="facility-label">Remaining Balance</p>
                            <h2 className="facility-amount">{item.currency}{item.remainingBalance}</h2>
                            {/* Progress Bar */}
                            <div className="facility-progress-container">
                                <div
                                    className="facility-progress-bar"
                                    style={{ width: `${item.progress}%` }}
                                ></div>
                            </div>
                            <p className="remaining-text">{item.remainingText}</p>
                        </div>

                        <div className="balance-right">
                            <p className="facility-label text-right">Current Due Amount</p>
                            <h2 className="facility-amount text-right">{item.currency}{item.currentDue}</h2>
                            <div className={`due-status ${item.dueStatusColor}`}>
                                {item.dueStatusColor === 'success' ? <CheckCircle size={14} /> : <Clock size={14} />}
                                <span>{item.dueStatus}</span>
                            </div>
                        </div>
                    </div>

                    {/* Details Grid */}
                    <div className="facility-details-grid">
                        {item.details.map((detail, index) => (
                            <div key={index} className="facility-detail-item">
                                <p className="detail-label">{detail.label}</p>
                                <p className="facility-detail-value">
                                    {detail.value}
                                    {detail.sub && <span className="detail-sub">{detail.sub}</span>}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Footer Actions */}
                    <div className="facility-footer">
                        <button className="view-transactions-btn">
                            <History size={16} />
                            View Transactions
                        </button>
                        <button className="make-payment-btn">
                            Make a Payment
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default FacilitiesSection
