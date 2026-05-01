import React, { useState, useEffect } from 'react'
import { Info, CreditCard, ChevronDown, ChevronUp } from 'lucide-react'
import './CardSection.css'

const CardSection = () => {
    const [cardTab, setCardTab] = useState('limit'); // 'limit' or 'linked'
    // State for collapsing the entire card section
    const [isExpanded, setIsExpanded] = useState(true);

    useEffect(() => {
        // Initially collapse on mobile, expand on desktop
        if (window.innerWidth < 768) {
            setIsExpanded(false);
        }
    }, []);

    const toggleExpand = () => setIsExpanded(!isExpanded);


    const cardData = {
        number: '**** **** **** 4289',
        holder: 'Lucifer Morningstar',
        expires: '12/28',
        limits: {
            online: { current: '1,200', max: '5,000' },
            atm: { current: '400', max: '1,000' }
        },
        linkedAccount: {
            name: "Lucifer's Savings",
            number: '123456789001'
        }
    };

    return (
        <div className="card-section-container">
            <div className="card-section-header" onClick={toggleExpand}>
                <div className="header-left">
                    <h2 className="card-section-title">My Card</h2>
                    {/* Show simple info if collapsed, maybe? or just title */}
                </div>
                <div className="header-right">
                    <Info size={16} className="card-info-icon" />
                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
            </div>

            {/* Collapsible Content */}
            <div className={`card-collapsible-wrapper ${isExpanded ? 'expanded' : 'collapsed'}`}>


                {/* Card Visualization */}
                <div className="card-visual-container">
                    {/* Background Glow */}
                    <div className="card-visual-glow"></div>

                    <div className="card-visual-content">
                        <div className="card-chip-row">
                            <div className="card-chip"></div>
                            <CreditCard className="card-brand-icon" />
                        </div>

                        <div className="card-number-area">
                            <p className="card-label">Card Number</p>
                            <p className="card-number-value">{cardData.number}</p>
                        </div>

                        <div className="card-details-row">
                            <div>
                                <p className="card-label">Card Holder</p>
                                <p className="card-detail-value">{cardData.holder}</p>
                            </div>
                            <div className="card-expires-section">
                                <p className="card-label">Expires</p>
                                <p className="card-detail-value">{cardData.expires}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card Controls */}
                <div className="card-controls-container">
                    <button
                        className={`card-control-btn ${cardTab === 'limit' ? 'card-control-btn-active' : 'card-control-btn-inactive'}`}
                        onClick={() => setCardTab('limit')}
                    >
                        Spending Limit
                    </button>
                    <button
                        className={`card-control-btn ${cardTab === 'linked' ? 'card-control-btn-active' : 'card-control-btn-inactive'}`}
                        onClick={() => setCardTab('linked')}
                    >
                        Linked Account
                    </button>
                </div>

                {/* Card Content Area */}
                <div className="card-content-area">
                    {cardTab === 'limit' ? (
                        <>
                            <div>
                                <div className="limit-row">
                                    <span className="limit-label">Online Purchase</span>
                                    <span className="limit-value">${cardData.limits.online.current} / ${cardData.limits.online.max}</span>
                                </div>
                                <div className="progress-bar-bg">
                                    <div className="progress-bar-fill fill-online" style={{ width: '24%' }}></div>
                                </div>
                            </div>

                            <div>
                                <div className="limit-row">
                                    <span className="limit-label">ATM Withdrawal</span>
                                    <span className="limit-value">${cardData.limits.atm.current} / ${cardData.limits.atm.max}</span>
                                </div>
                                <div className="progress-bar-bg">
                                    <div className="progress-bar-fill fill-atm" style={{ width: '40%' }}></div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="linked-account-anim">
                            <div className="linked-account-box">
                                <p className="linked-label">Linked Prime Account</p>

                                <div className="linked-row">
                                    <span className="linked-text-sm">Account Name</span>
                                    <span className="linked-name">{cardData.linkedAccount.name}</span>
                                </div>

                                <div className="linked-row-last">
                                    <span className="linked-text-sm">Account Number</span>
                                    <span className="linked-number">{cardData.linkedAccount.number}</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CardSection
