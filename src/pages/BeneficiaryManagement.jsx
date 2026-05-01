import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Edit2, Trash2, ArrowLeft } from 'lucide-react'
import './BeneficiaryManagement.css'

const BeneficiaryManagement = () => {
    const [activeTab, setActiveTab] = useState('internal');
    const navigate = useNavigate();

    const internalBeneficiaries = [
        { id: 1, name: 'Jane Smith', nickname: 'Jane', account: '123456789001', initials: 'JS', color: '#3b82f6' },
        { id: 2, name: 'Michael K.', nickname: 'Mike', account: '123456789002', initials: 'MK', color: '#8b5cf6' },
        { id: 3, name: 'David Rose', nickname: 'Dave', account: '123456789003', initials: 'DR', color: '#10b981' },
        { id: 4, name: 'Family Savings', nickname: 'Family', account: '123456789004', initials: 'FS', color: '#06b6d4' },
    ];

    const otherBankBeneficiaries = [
        { id: 1, name: 'Alice Springs Ltd', nickname: 'Alice Co', account: '987654321001', initials: 'AS', color: '#8b5cf6', bank: 'Commercial Bank' },
        { id: 2, name: 'Tech Solutions Inc', nickname: 'Tech Sol', account: '987654321002', initials: 'TS', color: '#f59e0b', bank: 'Sampath Bank' },
        { id: 3, name: 'Global Traders', nickname: 'Global', account: '987654321003', initials: 'GT', color: '#ef4444', bank: 'HNB' },
    ];

    const currentBeneficiaries = activeTab === 'internal' ? internalBeneficiaries : otherBankBeneficiaries;

    return (
        <div className="beneficiary-container">
            <div className="beneficiary-header">
                <div className="beneficiary-title-section">
                    <button className="back-btn" onClick={() => navigate(-1)}>
                        <ArrowLeft size={20} />
                    </button>
                    <div>
                        <h1 className="beneficiary-title">Beneficiary Management</h1>
                        <p className="beneficiary-subtitle">
                            Manage your saved accounts {activeTab === 'internal' ? 'within the bank' : 'from other banks'}.
                        </p>
                    </div>
                </div>
                <button className="add-new-btn">+ Add New</button>
            </div>

            <div className="beneficiary-tabs">
                <button
                    className={`beneficiary-tab ${activeTab === 'internal' ? 'beneficiary-tab-active' : ''}`}
                    onClick={() => setActiveTab('internal')}
                >
                    Internal Transfer
                </button>
                <button
                    className={`beneficiary-tab ${activeTab === 'other' ? 'beneficiary-tab-active' : ''}`}
                    onClick={() => setActiveTab('other')}
                >
                    Other Bank Transfer
                </button>
            </div>

            <div className="beneficiary-grid">
                {currentBeneficiaries.map((beneficiary) => (
                    <div key={beneficiary.id} className="beneficiary-card">
                        <div className="beneficiary-card-header">
                            <div className="beneficiary-info">
                                <div className="nickname-row">
                                    <span className="beneficiary-nickname">{beneficiary.nickname}</span>
                                    <button className="nickname-edit-btn">
                                        <Edit2 size={14} />
                                    </button>
                                </div>
                                <h3 className="beneficiary-name">{beneficiary.name}</h3>
                                <p className="beneficiary-account">{beneficiary.account}</p>
                                {beneficiary.bank && (
                                    <p className="beneficiary-bank">{beneficiary.bank}</p>
                                )}
                            </div>
                        </div>
                        <div className="beneficiary-actions">
                            <button className="transfer-btn">Transfer</button>
                            <button className="icon-action-btn">
                                <Edit2 size={18} />
                            </button>
                            <button className="icon-action-btn">
                                <Trash2 size={18} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BeneficiaryManagement
