import React, { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, Users, RefreshCw, Landmark, Wallet, CalendarClock, ArrowUpRight, ArrowDownLeft, Download, Share2, Filter, ArrowLeft } from 'lucide-react'
import './Transfer.css'

const Transfer = () => {
    const [activeTab, setActiveTab] = useState('past');
    const [showFilters, setShowFilters] = useState(false);
    const [filters, setFilters] = useState({
        fromDate: '',
        toDate: '',
        maxTransactions: '',
        minAmount: '',
        maxAmount: '',
        type: 'all'
    });
    const navigate = useNavigate();

    const handleActionClick = (actionId) => {
        if (actionId === 1) {
            navigate('/beneficiary-management');
        } else if (actionId === 2) {
            navigate('/own-account-transfer');
        } else if (actionId === 3) {
            navigate('/internal-transfer');
        } else if (actionId === 4) {
            navigate('/other-bank-transfer');
        }
    };

    const handleFilterChange = (field, value) => {
        setFilters(prev => ({ ...prev, [field]: value }));
    };

    const actions = [
        { id: 1, label: 'Beneficiary Management', icon: Users, color: 'blue' },
        { id: 2, label: 'Own Account Transfer', icon: RefreshCw, color: 'blue' },
        { id: 3, label: 'Internal Transfer', icon: Landmark, color: 'blue' },
        { id: 4, label: 'Other Bank Transfer', icon: Wallet, color: 'blue' },
        { id: 5, label: 'Scheduled Transfer', icon: CalendarClock, color: 'blue' },
    ];

    const pastTransactions = [
        {
            id: 'TRX-882910',
            type: 'Own Account Transfer',
            date: 'Oct 24, 2023 • 10:42 AM',
            dateValue: new Date('2023-10-24'),
            from: { name: 'Primary Checking', acc: '123456789001' },
            to: { name: 'Savings Account', acc: '123456789002' },
            amount: '1,250.00',
            amountValue: 1250.00,
            status: 'COMPLETED',
            icon: RefreshCw,
            category: 'Transfer'
        },
        {
            id: 'TRX-993821',
            type: 'Other Bank Transfer',
            date: 'Oct 22, 2023 • 02:15 PM',
            dateValue: new Date('2023-10-22'),
            from: { name: 'Primary Checking', acc: '123456789001' },
            to: { name: 'sudhu Putha', acc: '123456789002' },
            bank: 'Citibank',
            acc: '987456123',
            ref: 'Rent Payment',
            amount: '850.00',
            amountValue: 850.00,
            status: 'COMPLETED',
            icon: Wallet,
            category: 'Transfer'
        },
        {
            id: 'TRX-339201',
            type: 'Internal Transfer',
            date: 'Oct 20, 2023 • 11:15 AM',
            dateValue: new Date('2023-10-20'),
            from: { name: 'Primary Checking', acc: '123456789001' },
            to: { name: 'Ahmed Malik', acc: '881122339900' },
            ref: 'Invoice #445',
            amount: '2,000.00',
            amountValue: 2000.00,
            status: 'PENDING',
            icon: Landmark,
            category: 'Transfer'
        },
        {
            id: 'TRX-882911',
            type: 'Own Account Transfer',
            date: 'Oct 19, 2023 • 03:22 PM',
            dateValue: new Date('2023-10-19'),
            from: { name: 'Savings Account', acc: '123456789002' },
            to: { name: 'Primary Checking', acc: '123456789001' },
            amount: '500.00',
            amountValue: 500.00,
            status: 'COMPLETED',
            icon: RefreshCw,
            category: 'Transfer'
        },
        {
            id: 'TRX-445632',
            type: 'Other Bank Transfer',
            date: 'Oct 18, 2023 • 11:30 AM',
            dateValue: new Date('2023-10-18'),
            from: { name: 'Primary Checking', acc: '123456789001' },
            to: { name: 'John Doe', acc: '556677889900' },
            bank: 'Commercial Bank',
            acc: '556677889900',
            ref: 'Payment',
            amount: '3,500.00',
            amountValue: 3500.00,
            status: 'COMPLETED',
            icon: Wallet,
            category: 'Transfer'
        },

        {
            id: 'TRX-339202',
            type: 'Internal Transfer',
            date: 'Oct 16, 2023 • 02:45 PM',
            dateValue: new Date('2023-10-16'),
            from: { name: 'Primary Checking', acc: '123456789001' },
            to: { name: 'Sarah Williams', acc: '998877665544' },
            ref: 'Service Payment',
            amount: '1,200.00',
            amountValue: 1200.00,
            status: 'COMPLETED',
            icon: Landmark,
            category: 'Transfer'
        }
    ];

    const upcomingTransactions = [
        {
            id: 'SCH-551023',
            type: 'Scheduled Transfer',
            date: 'Nov 01, 2023 • 09:00 AM',
            dateValue: new Date('2023-11-01'),
            from: { name: 'Primary Checking', acc: '123456789001' },
            to: { name: 'Landlord Inc.', acc: '776655443322' },
            ref: 'Rent - November',
            amount: '1,500.00',
            amountValue: 1500.00,
            status: 'SCHEDULED',
            icon: CalendarClock,
            category: 'Scheduled',
            isScheduled: true
        }
    ];

    const allTransactions = activeTab === 'past' ? pastTransactions : upcomingTransactions;

    const filteredTransactions = useMemo(() => {
        let result = [...allTransactions];

        // Filter by date range
        if (filters.fromDate) {
            const fromDate = new Date(filters.fromDate);
            result = result.filter(trx => trx.dateValue >= fromDate);
        }
        if (filters.toDate) {
            const toDate = new Date(filters.toDate);
            result = result.filter(trx => trx.dateValue <= toDate);
        }

        // Filter by amount range
        if (filters.minAmount) {
            const minAmount = parseFloat(filters.minAmount);
            result = result.filter(trx => trx.amountValue >= minAmount);
        }
        if (filters.maxAmount) {
            const maxAmount = parseFloat(filters.maxAmount);
            result = result.filter(trx => trx.amountValue <= maxAmount);
        }

        // Filter by type
        if (filters.type !== 'all') {
            result = result.filter(trx => trx.type === filters.type);
        }

        // Limit number of transactions
        if (filters.maxTransactions) {
            const limit = parseInt(filters.maxTransactions);
            result = result.slice(0, limit);
        }

        return result;
    }, [filters, allTransactions]);

    return (
        <div className="transfer-container">
            {/* Top Section: Fixed (Non-scrollable relative to list) */}
            <div className="transfer-header-section">
                <div className="title-area">
                    <div className="flex items-center gap-2">
                        <button onClick={() => navigate('/')} className="lg:hidden text-gray-400 hover:text-white">
                            <ArrowLeft size={24} />
                        </button>
                        <h1 className="page-title">My Transactions</h1>
                    </div>
                    <p className="page-subtitle">Manage your payments and track your spending history.</p>
                </div>

                <div className="search-bar-container">
                    <Search className="search-icon" size={20} />
                    <input
                        type="text"
                        placeholder="Search by keyword, date, or amount..."
                        className="search-input"
                    />
                </div>

                <div className="actions-grid">
                    {actions.map((action) => (
                        <div
                            key={action.id}
                            className="action-card"
                            onClick={() => handleActionClick(action.id)}
                        >
                            <div className="action-icon-wrapper">
                                <action.icon size={24} />
                            </div>
                            <span className="action-label">{action.label}</span>
                        </div>
                    ))}
                </div>

                <div className="tabs-filter-row">
                    <div className="tabs-container">
                        <button
                            className={`tab-btn ${activeTab === 'past' ? 'tab-btn-active' : ''}`}
                            onClick={() => setActiveTab('past')}
                        >
                            Past Payments
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'upcoming' ? 'tab-btn-active' : ''}`}
                            onClick={() => setActiveTab('upcoming')}
                        >
                            Upcoming Payments
                        </button>
                    </div>

                    <button
                        className="filter-toggle-btn"
                        onClick={() => setShowFilters(!showFilters)}
                    >
                        <Filter size={18} />
                        <span>{showFilters ? 'Hide Filters' : 'Show Filters'}</span>
                    </button>
                </div>

                {/* Advanced Filter Panel */}
                {showFilters && (
                    <div className="filter-panel">
                        <div className="filter-header">
                            <Filter size={18} />
                            <span>Filters</span>
                        </div>
                        <div className="filter-grid">
                            <div className="filter-field">
                                <label>From Date</label>
                                <input
                                    type="date"
                                    value={filters.fromDate}
                                    onChange={(e) => handleFilterChange('fromDate', e.target.value)}
                                    className="filter-input"
                                />
                            </div>
                            <div className="filter-field">
                                <label>To Date</label>
                                <input
                                    type="date"
                                    value={filters.toDate}
                                    onChange={(e) => handleFilterChange('toDate', e.target.value)}
                                    className="filter-input"
                                />
                            </div>
                            <div className="filter-field">
                                <label>Min Amount (LKR)</label>
                                <input
                                    type="number"
                                    placeholder="0.00"
                                    value={filters.minAmount}
                                    onChange={(e) => handleFilterChange('minAmount', e.target.value)}
                                    className="filter-input"
                                />
                            </div>
                            <div className="filter-field">
                                <label>Max Amount (LKR)</label>
                                <input
                                    type="number"
                                    placeholder="10000.00"
                                    value={filters.maxAmount}
                                    onChange={(e) => handleFilterChange('maxAmount', e.target.value)}
                                    className="filter-input"
                                />
                            </div>
                            <div className="filter-field">
                                <label>Max Transactions</label>
                                <input
                                    type="number"
                                    placeholder="All"
                                    value={filters.maxTransactions}
                                    onChange={(e) => handleFilterChange('maxTransactions', e.target.value)}
                                    className="filter-input"
                                />
                            </div>
                            <div className="filter-field">
                                <label>Transaction Type</label>
                                <select
                                    value={filters.type}
                                    onChange={(e) => handleFilterChange('type', e.target.value)}
                                    className="filter-select"
                                >
                                    <option value="all">All Types</option>
                                    <option value="Own Account Transfer">Own Account</option>
                                    <option value="Internal Transfer">Internal Transfer</option>
                                    <option value="Other Bank Transfer">Other Bank</option>
                                    <option value="Utility Payment">Utility Payment</option>
                                    <option value="Scheduled Transfer">Scheduled</option>
                                </select>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Scrollable List Section */}
            <div className="transactions-list-container">
                {filteredTransactions.map((trx) => (
                    <div
                        key={trx.id}
                        className={`transaction-item ${trx.type === 'Internal Transfer' ? 'clickable-trx' : ''}`}
                        onClick={(e) => {
                            if (trx.type === 'Internal Transfer') {
                                e.stopPropagation();
                                navigate('/internal-transfer');
                            }
                        }}
                    >
                        <div className="trx-left">
                            <div className="trx-icon-box">
                                <trx.icon size={24} />
                            </div>
                            <div className="trx-details">
                                <h3 className="trx-type">{trx.type}</h3>
                                <p className="trx-date">{trx.date}</p>
                                <p className="trx-ref">Ref: {trx.id}</p>
                                {trx.bank && <p className="trx-bank-label">{trx.bank}</p>}
                            </div>
                        </div>

                        <div className="trx-middle">
                            {trx.from && (
                                <div className="trx-from-to-group">
                                    <div className="trx-arrow-row">
                                        <ArrowUpRight size={14} className="text-gray-400" />
                                        <div className="trx-info-col">
                                            <span className="trx-info-val-white">{trx.from.name}</span>
                                            <span className="trx-info-sub">{trx.from.acc}</span>
                                        </div>
                                    </div>
                                    <div className="trx-arrow-row">
                                        <ArrowDownLeft size={14} className="text-gray-400" />
                                        <div className="trx-info-col">
                                            <span className="trx-info-val-white">{trx.to.name}</span>
                                            <span className="trx-info-sub">
                                                {trx.bank ? `${trx.bank} • ` : ''}{trx.to.acc}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {trx.beneficiary && (
                                <div>
                                    <span className="trx-info-label">Beneficiary</span>
                                    <p className="trx-info-val-white">{trx.beneficiary}</p>
                                    <p className="trx-info-sub">{trx.bank} • {trx.acc}</p>
                                </div>
                            )}
                            {trx.biller && (
                                <div>
                                    <span className="trx-info-label">Biller</span>
                                    <p className="trx-info-val-white">{trx.biller}</p>
                                    <p className="trx-info-sub">Account: {trx.account}</p>
                                </div>
                            )}
                        </div>

                        <div className="trx-right">
                            <div className="trx-amount-box">
                                <span className="trx-amount">LKR {trx.amount}</span>
                                <span className={`trx-status status-${trx.status.toLowerCase()}`}>
                                    {trx.status}
                                </span>
                            </div>
                            <div className="trx-actions">
                                <button className="icon-btn" onClick={(e) => e.stopPropagation()}><Download size={18} /></button>
                                <button className="icon-btn" onClick={(e) => e.stopPropagation()}><Share2 size={18} /></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Transfer
