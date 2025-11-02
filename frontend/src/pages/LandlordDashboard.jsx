import { useState } from 'react'
import { Link } from 'react-router-dom'

function LandlordDashboard() {
  const [leases, setLeases] = useState([
    {
      id: 1,
      property: '789 Elm Street, Suite 5',
      tenant: 'GXYZ...ABC',
      deposit: '2000',
      monthlyRent: '1000',
      startDate: '2024-02-01',
      endDate: '2025-01-31',
      status: 'Active'
    },
    {
      id: 2,
      property: '321 Pine Road, Apartment 7',
      tenant: 'GABC...DEF',
      deposit: '1200',
      monthlyRent: '600',
      startDate: '2024-01-15',
      endDate: '2024-07-15',
      status: 'Pending Move-In'
    }
  ])

  const getStatusBadge = (status) => {
    const badges = {
      'Active': 'badge-success',
      'Pending Move-In': 'badge-warning',
      'In Dispute': 'badge-danger',
      'Closed': 'badge-info'
    }
    return badges[status] || 'badge-info'
  }

  const stats = [
    {
      label: 'Total Properties',
      value: '2',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      label: 'Active Leases',
      value: '1',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      label: 'Monthly Income',
      value: '1,600 XLM',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      label: 'Deposits Held',
      value: '3,200 XLM',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <div>
              <h1 className="page-header">Property Management</h1>
              <p className="page-subtitle">Manage your rental properties</p>
            </div>
            <Link to="/create-lease" className="btn btn-primary">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add New Lease
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="flex items-center justify-between mb-3">
                  <span className="stat-label">{stat.label}</span>
                  <div className="text-blue-600 dark:text-blue-400">
                    {stat.icon}
                  </div>
                </div>
                <div className="stat-value">{stat.value}</div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            {leases.map((lease) => (
              <div key={lease.id} className="card card-hover">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      {lease.property}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Tenant: {lease.tenant}
                    </p>
                  </div>
                  <span className={`badge ${getStatusBadge(lease.status)}`}>
                    {lease.status}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                  <div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">Deposit</div>
                    <div className="font-semibold text-gray-900 dark:text-white">{lease.deposit} XLM</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">Monthly Rent</div>
                    <div className="font-semibold text-gray-900 dark:text-white">{lease.monthlyRent} XLM</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">Start Date</div>
                    <div className="font-semibold text-gray-900 dark:text-white">{lease.startDate}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">End Date</div>
                    <div className="font-semibold text-gray-900 dark:text-white">{lease.endDate}</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link to={`/lease/${lease.id}`} className="btn btn-outline btn-sm">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    View Details
                  </Link>
                  {lease.status === 'Pending Move-In' && (
                    <button className="btn btn-primary btn-sm">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Confirm Move-In
                    </button>
                  )}
                  {lease.status === 'Active' && (
                    <button className="btn btn-secondary btn-sm">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      Report Issue
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandlordDashboard
