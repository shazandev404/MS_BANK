import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Save, ArrowRight as ArrowNext } from 'lucide-react'
import './OwnAccountTransfer.css'

const OwnAccountTransfer = () => {
    const navigate = useNavigate();
    const [fromAccount, setFromAccount] = useState('');
    const [toAccount, setToAccount] = useState('');
    const [amount, setAmount] = useState('');
    const [reference, setReference] = useState('');
    const [showFromDropdown, setShowFromDropdown] = useState(false);
    const [showToDropdown, setShowToDropdown] = useState(false);

    // Mock account data with full account numbers
    const accounts = [
        { id: '1', name: 'Checking Account', number: '010041472401', balance: 5240.00 },
        { id: '2', name: 'Savings Account', number: '010041472402', balance: 12500.00 },
        { id: '3', name: 'Business Account', number: '010041472403', balance: 8750.50 },
        { id: '4', name: 'Investment Account', number: '010041472404', balance: 25000.00 },
    ];

    // Filter "to" accounts to exclude selected "from" account
    const availableToAccounts = accounts.filter(acc => acc.id !== fromAccount);

    const selectedFromAccount = accounts.find(acc => acc.id === fromAccount);
    const selectedToAccount = accounts.find(acc => acc.id === toAccount);

    const handleSelectFromAccount = (accId) => {
        setFromAccount(accId);
        setShowFromDropdown(false);
    };

    const handleSelectToAccount = (accId) => {
        setToAccount(accId);
        setShowToDropdown(false);
    };

    return (
        <div className="own-transfer-container">
            <div className="own-transfer-header">
                <h1 className="own-transfer-title">Own Account Transfer</h1>
                <p className="own-transfer-subtitle">Move money instantly between your linked accounts.</p>
            </div>

            <div className="own-transfer-form">
                {/* Transfer From */}
                <div className="account-section">
                    <label>TRANSFER FROM</label>
                    {!selectedFromAccount ? (
                        <div className="custom-dropdown">
                            <button
                                className="dropdown-trigger"
                                onClick={() => setShowFromDropdown(!showFromDropdown)}
                            >
                                Select account
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

                {/* Arrow Divider */}
                <div className="arrow-divider">
                    <div className="arrow-line"></div>
                    <div className="arrow-down">
                        <ArrowRight size={20} className="arrow-icon-rotated" />
                    </div>
                    <div className="arrow-line"></div>
                </div>

                {/* Transfer To */}
                <div className="account-section">
                    <label>TRANSFER TO</label>
                    {!selectedToAccount ? (
                        <div className="custom-dropdown">
                            <button
                                className="dropdown-trigger"
                                onClick={() => setShowToDropdown(!showToDropdown)}
                                disabled={!fromAccount}
                            >
                                Select account
                            </button>
                            {showToDropdown && (
                                <div className="dropdown-menu">
                                    {availableToAccounts.map(acc => (
                                        <div
                                            key={acc.id}
                                            className="dropdown-account-card"
                                            onClick={() => handleSelectToAccount(acc.id)}
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
                                <span className="account-title">LKR | {selectedToAccount.name}</span>
                                <button
                                    className="change-account-btn"
                                    onClick={() => {
                                        setToAccount('');
                                        setShowToDropdown(true);
                                    }}
                                >
                                    Change ▼
                                </button>
                            </div>
                            <div className="account-card-body">
                                <p className="account-label">Account</p>
                                <p className="account-number-large">{selectedToAccount.number}</p>
                                <div className="balance-row">
                                    <div className="balance-item">
                                        <p className="balance-amount">LKR {selectedToAccount.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
                                        <p className="balance-label">Current Balance</p>
                                    </div>
                                    <div className="balance-divider"></div>
                                    <div className="balance-item">
                                        <p className="balance-amount">LKR {selectedToAccount.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
                                        <p className="balance-label">Available Balance</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="transfer-row">
                    {/* Amount */}
                    <div className="transfer-field">
                        <label className="field-label">AMOUNT</label>
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
                    </div>

                    {/* Reference */}
                    <div className="transfer-field">
                        <label className="field-label">REFERENCE (OPTIONAL)</label>
                        <div className="input-wrapper">
                            <input
                                type="text"
                                placeholder="e.g. Monthly Savings"
                                value={reference}
                                onChange={(e) => setReference(e.target.value)}
                                maxLength={35}
                                className="reference-input"
                            />
                        </div>
                        <p className="char-count">{reference.length}/35 characters</p>
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

export default OwnAccountTransfer
