import React from 'react'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import MyAccount from './pages/MyAccount'
import MyFacilities from './pages/MyFacilities'
import Transfer from './pages/Transfer'
import BeneficiaryManagement from './pages/BeneficiaryManagement'
import OwnAccountTransfer from './pages/OwnAccountTransfer'
import InternalTransfer from './pages/InternalTransfer'
import OtherBankTransfer from './pages/OtherBankTransfer'
import BillPayments from './pages/BillPayments'
import OtherServices from './pages/OtherServices'


function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<MyAccount />} />
                    {/* Placeholder routes for others */}
                    <Route path="facilities" element={<MyFacilities />} />
                    <Route path="transfer" element={<Transfer />} />
                    <Route path="beneficiary-management" element={<BeneficiaryManagement />} />
                    <Route path="own-account-transfer" element={<OwnAccountTransfer />} />
                    <Route path="internal-transfer" element={<InternalTransfer />} />
                    <Route path="other-bank-transfer" element={<OtherBankTransfer />} />
                    <Route path="bill-payments" element={<BillPayments />} />
                    <Route path="services" element={<OtherServices />} />
                    {/* Catch all */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Route>
            </Routes>
        </HashRouter>
    )
}

export default App
