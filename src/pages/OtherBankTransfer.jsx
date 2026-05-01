import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, User, Users, Landmark, Save, ArrowRight as ArrowNext, Wallet } from 'lucide-react'
import './OtherBankTransfer.css'

const OtherBankTransfer = () => {
    const navigate = useNavigate();
    const [fromAccount, setFromAccount] = useState('');
    const [recipientType, setRecipientType] = useState('favorite'); // 'favorite' or 'other'
    const [selectedBeneficiaryId, setSelectedBeneficiaryId] = useState('');
    const [manualAccountNumber, setManualAccountNumber] = useState('');
    const [manualBeneficiaryName, setManualBeneficiaryName] = useState('');
    const [manualBank, setManualBank] = useState('');
    const [amount, setAmount] = useState('');
    const [reference, setReference] = useState('');

    const [showFromDropdown, setShowFromDropdown] = useState(false);
    const [showBenDropdown, setShowBenDropdown] = useState(false);

    // Mock account data
    const accounts = [
        { id: '1', name: 'Everyday Savings', number: '010041472401', balance: 12450.25 },
        { id: '2', name: 'Fixed Deposit', number: '010041472402', balance: 50000.00 },
    ];

    // Mock other bank beneficiaries
    const beneficiaries = [
        { id: 'ob1', nickname: 'Alice Co', name: 'Alice Springs Ltd', account: '987654321001', initials: 'AS', bank: 'Commercial Bank' },
        { id: 'ob2', nickname: 'Tech Sol', name: 'Tech Solutions Inc', account: '987654321002', initials: 'TS', bank: 'Sampath Bank' },
        { id: 'ob3', nickname: 'Global', name: 'Global Traders', account: '987654321003', initials: 'GT', bank: 'HNB' },
    ];

    // Bank list as requested
    const banks = ['BOC', 'NTB', 'NDB', 'AMANA BANK', 'Commercial Bank', 'Sampath Bank', 'HNB', 'Seylan Bank'];

    const selectedFromAccount = accounts.find(acc => acc.id === fromAccount);

    const handleSelectFromAccount = (accId) => {
        setFromAccount(accId);
        setShowFromDropdown(false);
    };

    const handleSelectBeneficiary = (benId) => {
        setSelectedBeneficiaryId(benId);
        setShowBenDropdown(false);
    };

    const selectedBeneficiary = beneficiaries.find(ben => ben.id === selectedBeneficiaryId);

    return (
        <div className="other-transfer-container">
            <div className="other-transfer-header">
                <h1 className="other-transfer-title">Other Bank Transfer</h1>
                <p className="other-transfer-subtitle">Securely transfer funds to any other bank account in Sri Lanka.</p>
            </div>

            <div className="other-transfer-form">
                {/* From Account Section */}
                <div className="form-section">
                    <div className="section-label-row">
                        <Landmark size={18} className="section-icon" />
                        <label>From Account</label>
                    </div>

                    {!selectedFromAccount ? (
                        <div className="custom-dropdown">
                            <button
                                className="dropdown-trigger"
                                onClick={() => setShowFromDropdown(!showFromDropdown)}
                            >
                                Select from account
                            </button>
                            {showFromDropdown && (
                                <div className="dropdown-menu">
                                    {accounts.map(acc => (
                                        <div
                                            key={acc.id}
                                            className="dropdown-account-card"
                                            onClick={() => handleSelectFromAccount(acc.id)}
                                        >
                                            <div className="dropdown-card-header">
                                                <span className="dropdown-card-title">LKR | {acc.name}</span>
                                            </div>
                                            <div className="dropdown-card-body">
                                                <p className="dropdown-account-label">Account</p>
                                                <p className="dropdown-account-number">{acc.number}</p>
                                                <div className="dropdown-balance-row">
                                                    <div>
                                                        <p className="dropdown-balance-amount">LKR {acc.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
                                                        <p className="dropdown-balance-label">Current Balance</p>
                                                    </div>
                                                    <div>
                                                        <p className="dropdown-balance-amount">LKR {acc.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
                                                        <p className="dropdown-balance-label">Available Balance</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="account-card">
                            <div className="account-card-header">
                                <span className="account-title">LKR | {selectedFromAccount.name}</span>
                                <button
                                    className="change-account-btn"
                                    onClick={() => {
                                        setFromAccount('');
                                        setShowFromDropdown(true);
                                    }}
                                >
                                    Change ▼
                                </button>
                            </div>
                            <div className="account-card-body">
                                <p className="account-label">Account</p>
                                <p className="account-number-large">{selectedFromAccount.number}</p>
                                <div className="balance-row">
                                    <div className="balance-item">
                                        <p className="balance-amount">LKR {selectedFromAccount.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
                                        <p className="balance-label">Current Balance</p>
                                    </div>
                                    <div className="balance-divider"></div>
                                    <div className="balance-item">
                                        <p className="balance-amount">LKR {selectedFromAccount.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
                                        <p className="balance-label">Available Balance</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* To Recipient Section */}
                <div className="form-section">
                    <div className="section-label-row">
                        <Users size={18} className="section-icon" />
                        <label>To Recipient</label>
                    </div>

                    <div className="recipient-toggle">
                        <button
                            className={`toggle-btn ${recipientType === 'favorite' ? 'active' : ''}`}
                            onClick={() => setRecipientType('favorite')}
                        >
                            To Favorite
                        </button>
                        <button
                            className={`toggle-btn ${recipientType === 'other' ? 'active' : ''}`}
                            onClick={() => setRecipientType('other')}
                        >
                            To Other
                        </button>
                    </div>

                    {recipientType === 'favorite' ? (
                        !selectedBeneficiary ? (
                            <div className="custom-dropdown">
                                <button
                                    className="dropdown-trigger"
                                    onClick={() => setShowBenDropdown(!showBenDropdown)}
                                >
                                    Select favorite beneficiary
                                </button>
                                {showBenDropdown && (
                                    <div className="dropdown-menu">
                                        {beneficiaries.map(ben => (
                                            <div
                                                key={ben.id}
                                                className="dropdown-beneficiary-card"
                                                onClick={() => handleSelectBeneficiary(ben.id)}
                                            >
                                                <div className="dropdown-card-header">
                                                    <span className="dropdown-card-title">{ben.nickname}</span>
                                                </div>
                                                <div className="dropdown-card-body">
                                                    <p className="dropdown-account-label">Beneficiary Name</p>
                                                    <p className="dropdown-account-number">{ben.name}</p>
                                                    <div className="dropdown-balance-row">
                                                        <div>
                                                            <p className="dropdown-balance-amount">{ben.account}</p>
                                                            <p className="dropdown-balance-label">Account Number</p>
                                                        </div>
                                                        <div>
                                                            <p className="dropdown-balance-amount">{ben.bank}</p>
                                                            <p className="dropdown-balance-label">Bank</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="beneficiary-selected-card">
                                <div className="account-card-header">
                                    <span className="account-title">{selectedBeneficiary.nickname}</span>
                                    <button
                                        className="change-account-btn"
                                        onClick={() => {
                                            setSelectedBeneficiaryId('');
                                            setShowBenDropdown(true);
                                        }}
                                    >
                                        Change ▼
                                    </button>
                                </div>
                                <div className="account-card-body">
                                    <p className="account-label">Beneficiary Name</p>
                                    <p className="account-number-large">{selectedBeneficiary.name}</p>
                                    <div className="balance-row">
                                        <div className="balance-item">
                                            <p className="balance-amount">{selectedBeneficiary.account}</p>
                                            <p className="balance-label">Account Number</p>
                                        </div>
                                        <div className="balance-divider"></div>
                                        <div className="balance-item">
                                            <p className="balance-amount">{selectedBeneficiary.bank}</p>
                                            <p className="balance-label">Bank</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    ) : (
                        <div className="manual-entry-grid">
                            <div className="transfer-field full-width">
                                <label className="field-label">Bank Name</label>
                                <div className="input-wrapper">
                                    <select
                                        value={manualBank}
                                        onChange={(e) => setManualBank(e.target.value)}
                                        className="bank-select-input"
                                    >
                                        <option value="">Select a bank</option>
                                        {banks.map(bank => (
                                            <option key={bank} value={bank}>{bank}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="manual-entry-row">
                                <div className="transfer-field">
                                    <label className="field-label">Account Number</label>
                                    <div className="input-wrapper">
                                        <input
                                            type="text"
                                            placeholder="Enter account number"
                                            value={manualAccountNumber}
                                            onChange={(e) => setManualAccountNumber(e.target.value)}
                                            className="reference-input"
                                        />
                                    </div>
                                </div>
                                <div className="transfer-field">
                                    <label className="field-label">Beneficiary Name</label>
                                    <div className="input-wrapper">
                                        <input
                                            type="text"
                                            placeholder="Enter full name"
                                            value={manualBeneficiaryName}
                                            onChange={(e) => setManualBeneficiaryName(e.target.value)}
                                            className="reference-input"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="divider-line"></div>

                {/* Amount and Reference Section */}
                <div className="transfer-row">
                    <div className="transfer-field">
                        <div className="section-label-row small-margin">
                            <span style={{ color: '#3F72AF', fontSize: '1.2rem', fontWeight: '800' }}>LKR</span>
                            <label className="field-label" style={{ marginBottom: 0 }}>Amount</label>
                        </div>
                        <div className="amount-input-group">
                            <div className="input-wrapper">
                                <span className="currency-symbol">LKR</span>
                                <input
                                    type="number"
                                    placeholder="0.00"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    className="amount-input"
                                />
                            </div>
                            <div className="quick-amounts">
                                {[1000, 5000, 10000].map(val => (
                                    <button
                                        key={val}
                                        className="quick-amount-btn"
                                        onClick={() => setAmount(val.toString())}
                                    >
                                        LKR {val.toLocaleString()}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="transfer-field">
                        <div className="section-label-row small-margin">
                            <Save size={16} style={{ color: '#3F72AF' }} />
                            <label className="field-label" style={{ marginBottom: 0 }}>Reference</label>
                        </div>
                        <div className="input-wrapper">
                            <input
                                type="text"
                                placeholder="e.g. Rent, Gift, Invoice #123"
                                value={reference}
                                onChange={(e) => setReference(e.target.value)}
                                maxLength={35}
                                className="reference-input"
                            />
                        </div>
                    </div>
                </div>

                {/* Footer Buttons */}
                <div className="form-footer">
                    <button className="back-btn" onClick={() => navigate(-1)}>
                        <ArrowLeft size={18} />
                        <span>Back</span>
                    </button>

                    <button className="save-btn">
                        <Save size={18} />
                        <span>Save</span>
                    </button>

                    <button className="next-btn">
                        <span>Next</span>
                        <ArrowNext size={18} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default OtherBankTransfer
