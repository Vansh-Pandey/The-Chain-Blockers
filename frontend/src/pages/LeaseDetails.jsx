import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function LeaseDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  
  const [lease] = useState({
    id: 1,
    property: '123 Main Street, Apt 4B',
    tenant: 'GABC...XYZ',
    landlord: 'GDEF...ABC',
    deposit: '1000',
    monthlyRent: '500',
    startDate: '2024-01-01',
    endDate: '2024-12-31',
    status: 'Active',
    depositPaid: true,
    moveInConfirmed: true,
    contractAddress: 'CXXX...XXX'
  })

  const [showDisputeForm, setShowDisputeForm] = useState(false)
  const [disputeReason, setDisputeReason] = useState('')

  const getStatusBadge = (status) => {
    const badges = {
      'Active': 'badge-success',
      'Pending Move-In': 'badge-warning',
      'In Dispute': 'badge-danger',
      'Closed': 'badge-info'
    }
    return badges[status] || 'badge-info'
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-6 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Dashboard
          </button>

          <div className="card mb-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {lease.property}
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">Lease ID: {lease.id}</p>
              </div>
              <span className={`badge text-sm ${getStatusBadge(lease.status)}`}>
                {lease.status}
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="section-title text-lg">Lease Information</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Tenant Address</div>
                    <div className="font-mono text-sm text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 px-3 py-2 rounded">{lease.tenant}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Landlord Address</div>
                    <div className="font-mono text-sm text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 px-3 py-2 rounded">{lease.landlord}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Contract Address</div>
                    <div className="font-mono text-sm text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 px-3 py-2 rounded">{lease.contractAddress}</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="section-title text-lg">Financial Details</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Security Deposit</div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{lease.deposit} XLM</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Monthly Rent</div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{lease.monthlyRent} XLM</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Lease Period</div>
                    <div className="text-gray-900 dark:text-white">{lease.startDate} to {lease.endDate}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-6">
            <h3 className="section-title text-lg">Lease Status</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                {lease.depositPaid ? (
                  <svg className="w-6 h-6 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
                <span className={`font-medium ${lease.depositPaid ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
                  Deposit Paid
                </span>
              </div>

              <div className="flex items-center">
                {lease.moveInConfirmed ? (
                  <svg className="w-6 h-6 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
                <span className={`font-medium ${lease.moveInConfirmed ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
                  Move-In Confirmed
                </span>
              </div>
            </div>
          </div>

          <div className="card mb-6">
            <h3 className="section-title text-lg">Actions</h3>
            <div className="flex flex-wrap gap-3">
              <button className="btn btn-outline">
                Upload Evidence
              </button>
              <button
                onClick={() => setShowDisputeForm(!showDisputeForm)}
                className="btn btn-secondary"
              >
                Raise Dispute
              </button>
              <button className="btn btn-primary">
                Release Deposit
              </button>
            </div>
          </div>

          {showDisputeForm && (
            <div className="card mb-6">
              <h3 className="section-title text-lg">Raise a Dispute</h3>
              <textarea
                value={disputeReason}
                onChange={(e) => setDisputeReason(e.target.value)}
                className="input-field mb-4"
                rows="4"
                placeholder="Describe the issue or reason for the dispute..."
              ></textarea>
              <div className="flex gap-3">
                <button className="btn btn-primary">
                  Submit Dispute
                </button>
                <button
                  onClick={() => setShowDisputeForm(false)}
                  className="btn btn-outline"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          <div className="card">
            <h3 className="section-title text-lg">Activity Timeline</h3>
            <div className="space-y-6">
              {[
                { title: 'Lease Created', date: 'January 1, 2024' },
                { title: 'Deposit Paid', date: 'January 2, 2024' },
                { title: 'Move-In Confirmed', date: 'January 5, 2024' }
              ].map((event, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-3 h-3 bg-blue-600 rounded-full mt-1.5 mr-4"></div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">{event.title}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{event.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeaseDetails
