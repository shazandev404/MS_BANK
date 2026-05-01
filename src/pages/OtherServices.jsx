import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PiggyBank, Landmark, FileText, ArrowLeft } from 'lucide-react'
import './OtherServices.css'

const OtherServices = () => {
    const navigate = useNavigate();
    const services = [
        {
            id: 1,
            name: 'Open Savings Account',
            description: 'Start saving for your future with high interest rates.',
            icon: PiggyBank
        },
        {
            id: 2,
            name: 'Open FD Account',
            description: 'Secure your money with fixed deposits and guaranteed returns.',
            icon: Landmark
        },
        {
            id: 3,
            name: 'Request Check Book',
            description: 'Order a new check book for your current account.',
            icon: FileText
        }
    ];

    return (
        <div className="services-container">
            <div className="services-header-section">
                <div className="title-area">
                    <div className="flex items-center gap-2">
                        <button onClick={() => navigate('/')} className="lg:hidden text-gray-400 hover:text-white">
                            <ArrowLeft size={24} />
                        </button>
                        <h1 className="page-title">Other Services</h1>
                    </div>
                    <p className="page-subtitle">Access additional banking services at your convenience.</p>
                </div>

                <div className="services-grid">
                    {services.map((service) => (
                        <div key={service.id} className="service-card">
                            <div className="service-icon-box">
                                <service.icon size={32} />
                            </div>
                            <div>
                                <h3 className="service-name">{service.name}</h3>
                                <p className="service-description mt-2">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OtherServices
