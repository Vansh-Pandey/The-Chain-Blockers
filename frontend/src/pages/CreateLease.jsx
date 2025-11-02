import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CreateLease() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    propertyAddress: '',
    tenantAddress: '',
    landlordAddress: '',
    depositAmount: '',
    monthlyRent: '',
    startDate: '',
    endDate: '',
    description: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Creating lease:', formData)
    alert('Lease created successfully!')
    navigate('/tenant')
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="page-header">Create New Lease</h1>
            <p className="page-subtitle">Set up a new rental agreement on the blockchain</p>
          </div>

          <form onSubmit={handleSubmit} className="card space-y-6">
            <div>
              <label className="label">Property Address</label>
              <input
                type="text"
                name="propertyAddress"
                value={formData.propertyAddress}
                onChange={handleChange}
                className="input-field"
                placeholder="123 Main Street, Apt 4B"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="label">Tenant Stellar Address</label>
                <input
                  type="text"
                  name="tenantAddress"
                  value={formData.tenantAddress}
                  onChange={handleChange}
                  className="input-field font-mono text-sm"
                  placeholder="GXXXXXXX..."
                  required
                />
              </div>

              <div>
                <label className="label">Landlord Stellar Address</label>
                <input
                  type="text"
                  name="landlordAddress"
                  value={formData.landlordAddress}
                  onChange={handleChange}
                  className="input-field font-mono text-sm"
                  placeholder="GXXXXXXX..."
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="label">Security Deposit (XLM)</label>
                <input
                  type="number"
                  name="depositAmount"
                  value={formData.depositAmount}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="1000"
                  min="0"
                  step="0.01"
                  required
                />
              </div>

              <div>
                <label className="label">Monthly Rent (XLM)</label>
                <input
                  type="number"
                  name="monthlyRent"
                  value={formData.monthlyRent}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="500"
                  min="0"
                  step="0.01"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="label">Lease Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  className="input-field"
                  required
                />
              </div>

              <div>
                <label className="label">Lease End Date</label>
                <input
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  className="input-field"
                  required
                />
              </div>
            </div>

            <div>
              <label className="label">Additional Terms (Optional)</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="input-field"
                rows="4"
                placeholder="Any special conditions or notes about this lease..."
              ></textarea>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Important Information
              </h3>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>The tenant will need to deposit the security amount to activate the lease</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Both parties must confirm move-in with evidence photos</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Funds are held securely in a smart contract until lease end</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Disputes can be raised and resolved through arbitration</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button type="submit" className="btn btn-primary flex-1">
                Create Lease
              </button>
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="btn btn-outline"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateLease
