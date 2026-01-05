import React, { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, Filter, Download, Share2, Zap, Smartphone, Wifi, Tv, Droplet, Star, Clock, Calendar, ShieldCheck, Building2, Plus, ArrowLeft } from 'lucide-react'
import './BillPayments.css'

const BillPayments = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('history');
    const [showFilters, setShowFilters] = useState(false);
    const [filters, setFilters] = useState({
        fromDate: '',
        toDate: '',
        minAmount: '',
        maxAmount: '',
        billerType: 'all'
    });

    const handleFilterChange = (field, value) => {
        setFilters(prev => ({ ...prev, [field]: value }));
    };

    // Mock Data for Favorites
    const favorites = [
        { id: 1, name: 'My Mobile', icon: Smartphone, provider: 'Dialog' },
        { id: 2, name: 'Home Internet', icon: Wifi, provider: 'SLT Fibre' },
        { id: 3, name: 'Electricity', icon: Zap, provider: 'CEB' },
        { id: 4, name: 'Water Board', icon: Droplet, provider: 'NWSDB' },
        { id: 5, name: 'Cable TV', icon: Tv, provider: 'Peo TV' },
    ];

    // Mock Data for Past Payments
    const historyPayments = [
        {
            id: 'BP-1001',
            biller: 'Dialog Axiata',
            category: 'Telecommunications',
            account: '0777123456',
            date: 'Dec 28, 2023 • 10:30 AM',
            dateValue: new Date('2023-12-28'),
            amount: '1,500.00',
            amountValue: 1500.00,
            status: 'COMPLETED',
            icon: Smartphone,
            isFavorite: true,
            isOnTime: false
        },
        // ... (other history items)
        {
            id: 'BP-1002',
            biller: 'Ceylon Electricity Board',
            category: 'Utilities',
            account: '1234567890',
            date: 'Dec 25, 2023 • 09:15 AM',
            dateValue: new Date('2023-12-25'),
            amount: '4,250.00',
            amountValue: 4250.00,
            status: 'COMPLETED',
            icon: Zap,
            isFavorite: false,
            isOnTime: true
        },
        {
            id: 'BP-1005',
            biller: 'Peo TV',
            category: 'Entertainment',
            account: '0112345678',
            date: 'Dec 10, 2023 • 06:00 PM',
            dateValue: new Date('2023-12-10'),
            amount: '1,200.00',
            amountValue: 1200.00,
            status: 'COMPLETED',
            icon: Tv,
            isFavorite: true,
            isOnTime: true
        }
    ];

    const scheduledPayments = [
        {
            id: 'SCH-2001',
            biller: 'Dialog Axiata',
            category: 'Telecommunications',
            account: '0777123456',
            date: 'Feb 01, 2024 • 08:00 AM',
            dateValue: new Date('2024-02-01'),
            amount: '1,500.00',
            amountValue: 1500.00,
            status: 'SCHEDULED',
            icon: Smartphone,
            isFavorite: true,
            isOnTime: true
        },
        {
            id: 'SCH-2002',
            biller: 'Ceylon Electricity Board',
            category: 'Utilities',
            account: '1234567890',
            date: 'Feb 05, 2024 • 09:00 AM',
            dateValue: new Date('2024-02-05'),
            amount: '3,000.00',
            amountValue: 3000.00,
            status: 'SCHEDULED',
            icon: Zap,
            isFavorite: true,
            isOnTime: true
        }
    ];

    const currentData = activeTab === 'history' ? historyPayments : scheduledPayments;

    const filteredPayments = useMemo(() => {
        let result = [...currentData];

        // Filter by date
        if (filters.fromDate) {
            const fromDate = new Date(filters.fromDate);
            result = result.filter(item => item.dateValue >= fromDate);
        }
        if (filters.toDate) {
            const toDate = new Date(filters.toDate);
            result = result.filter(item => item.dateValue <= toDate);
        }

        // Filter by amount
        if (filters.minAmount) {
            const min = parseFloat(filters.minAmount);
            result = result.filter(item => item.amountValue >= min);
        }
        if (filters.maxAmount) {
            const max = parseFloat(filters.maxAmount);
            result = result.filter(item => item.amountValue <= max);
        }

        // Filter by type/category
        if (filters.billerType !== 'all') {
            result = result.filter(item => item.category === filters.billerType);
        }

        return result;
    }, [filters, currentData]);

    const [showCategories, setShowCategories] = useState(false);
    const [showFavorites, setShowFavorites] = useState(false);

    const toggleCategories = () => {
        setShowCategories(!showCategories);
        setShowFavorites(false);
    };

    const toggleFavorites = () => {
        setShowFavorites(!showFavorites);
        setShowCategories(false);
    };

    const paymentCategories = [
        { id: 'cat-1', name: 'Mobile', icon: Smartphone },
        { id: 'cat-2', name: 'Telephone', icon: Smartphone },
        { id: 'cat-3', name: 'Utility', icon: Zap },
        { id: 'cat-4', name: 'Insurance', icon: ShieldCheck },
        { id: 'cat-5', name: 'Government', icon: Building2 },
        { id: 'cat-6', name: 'Internet', icon: Wifi },
        { id: 'cat-7', name: 'Television', icon: Tv },
    ];

    return (
        <div className="bill-pay-container">
            {/* Top Section */}
            <div className="bill-pay-header-section">
                <div className="title-area">
                    <div className="flex items-center gap-2">
                        <button onClick={() => navigate('/')} className="lg:hidden text-gray-400 hover:text-white">
                            <ArrowLeft size={24} />
                        </button>
                        <h1 className="page-title">Bill Payments</h1>
                    </div>
                    <p className="page-subtitle">Pay your utility bills, mobile reloads, and more.</p>
                </div>

                {/* Payment Actions Row */}
                <div className="flex flex-col gap-6">
                    <div className="payment-actions">
                        <button
                            className={`make-payment-btn ${showCategories ? 'bg-orange-600' : ''}`}
                            onClick={toggleCategories}
                        >
                            <Zap size={20} />
                            Make New Payment
                        </button>
                        <button
                            className={`make-payment-btn ${showFavorites ? 'border-orange-500 text-white' : ''}`}
                            style={{
                                backgroundColor: 'var(--color-panel-dark)',
                                border: `1px solid ${showFavorites ? 'var(--color-accent)' : 'var(--color-primary-dark)'}`
                            }}
                            onClick={toggleFavorites}
                        >
                            <Star size={20} />
                            My Favorites
                        </button>
                    </div>

                    {/* Expandable Categories Grid */}
                    {showCategories && (
                        <div className="categories-grid-container fade-in">
                            <h3 className="section-label">Select Category</h3>
                            <div className="categories-grid">
                                {paymentCategories.map(cat => (
                                    <div key={cat.id} className="category-card">
                                        <div className="cat-icon-box">
                                            <cat.icon size={24} />
                                        </div>
                                        <span className="cat-name">{cat.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Expandable Favorites Section */}
                    {showFavorites && (
                        <div className="favorites-expand-container fade-in">
                            <h3 className="section-label">Manage Favorites</h3>
                            <div className="favorites-row">
                                <div className="add-fav-card">
                                    <div className="add-fav-icon">
                                        <Plus size={24} />
                                    </div>
                                    <span className="fav-name">Add New</span>
                                </div>
                                {favorites.map(fav => (
                                    <div key={fav.id} className="favorite-card">
                                        <div className="fav-icon-box">
                                            <fav.icon size={24} />
                                        </div>
                                        <span className="fav-name">{fav.name}</span>
                                        <span className="text-xs text-gray-500">{fav.provider}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Search & Filter */}
                <div className="search-bar-container mt-4">
                    <Search className="search-icon" size={20} />
                    <input
                        type="text"
                        placeholder="Search for biller, account number..."
                        className="search-input"
                    />
                </div>

                <div className="tabs-filter-row">
                    <div className="tabs-container">
                        <button
                            className={`tab-btn ${activeTab === 'history' ? 'tab-btn-active' : ''}`}
                            onClick={() => setActiveTab('history')}
                        >
                            Payment History
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'scheduled' ? 'tab-btn-active' : ''}`}
                            onClick={() => setActiveTab('scheduled')}
                        >
                            Scheduled
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

                {/* Filter Panel */}
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
                                <label>Biller Type</label>
                                <select
                                    value={filters.billerType}
                                    onChange={(e) => handleFilterChange('billerType', e.target.value)}
                                    className="filter-select"
                                >
                                    <option value="all">All Types</option>
                                    <option value="Telecommunications">Telecommunications</option>
                                    <option value="Utilities">Utilities</option>
                                    <option value="Internet">Internet</option>
                                    <option value="Entertainment">Entertainment</option>
                                </select>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* List Section */}
            <div className="transactions-list-container">
                {filteredPayments.map((item) => (
                    <div key={item.id} className="transaction-item">
                        <div className="trx-left">
                            <div className="trx-icon-box">
                                <item.icon size={24} />
                            </div>
                            <div className="trx-details">
                                <h3 className="trx-type">{item.biller}</h3>
                                <p className="trx-date">{item.date}</p>
                                <p className="trx-ref">Ref: {item.id}</p>
                            </div>
                        </div>

                        <div className="trx-middle">
                            <div>
                                <span className="trx-info-label">Account Number</span>
                                <p className="trx-info-val-white">{item.account}</p>
                                <p className="trx-info-sub">{item.category}</p>
                            </div>
                            <div className="flex gap-2 mt-2">
                                {item.isFavorite && (
                                    <span className="text-xs flex items-center gap-1 text-yellow-500 bg-yellow-500/10 px-2 py-1 rounded-full">
                                        <Star size={10} fill="currentColor" /> Favorite
                                    </span>
                                )}
                                {item.isOnTime && (
                                    <span className="text-xs flex items-center gap-1 text-blue-400 bg-blue-400/10 px-2 py-1 rounded-full">
                                        <Clock size={10} /> On Time
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="trx-right">
                            <div className="trx-amount-box">
                                <span className="trx-amount">LKR {item.amount}</span>
                                <span className={`trx-status status-${item.status.toLowerCase()}`}>
                                    {item.status}
                                </span>
                            </div>
                            <div className="trx-actions">
                                <button className="icon-btn"><Download size={18} /></button>
                                <button className="icon-btn"><Share2 size={18} /></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BillPayments
