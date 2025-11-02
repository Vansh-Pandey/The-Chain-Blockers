import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header'
import Home from './pages/Home'
import TenantDashboard from './pages/TenantDashboard'
import LandlordDashboard from './pages/LandlordDashboard'
import CreateLease from './pages/CreateLease'
import LeaseDetails from './pages/LeaseDetails'

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tenant" element={<TenantDashboard />} />
            <Route path="/landlord" element={<LandlordDashboard />} />
            <Route path="/create-lease" element={<CreateLease />} />
            <Route path="/lease/:id" element={<LeaseDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
