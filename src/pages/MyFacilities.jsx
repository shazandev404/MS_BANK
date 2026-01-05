import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import FacilitiesSection from '../components/dashboard/FacilitiesSection'
import './MyAccount.css' // Re-use MyAccount styles for container/title

const MyFacilities = () => {
    const navigate = useNavigate();
    return (
        <div className="my-account-container">
            <div className="flex items-center gap-2 mb-4">
                <button onClick={() => navigate('/')} className="lg:hidden text-gray-400 hover:text-white">
                    <ArrowLeft size={24} />
                </button>
                <h1 className="my-account-title mb-0">My Facilities</h1>
            </div>

            <div className="dashboard-grid" style={{ gridTemplateColumns: '1fr' }}>
                <FacilitiesSection />
            </div>
        </div>
    )
}

export default MyFacilities
