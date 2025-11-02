import { Link } from 'react-router-dom'

function Home() {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: 'Secure Escrow',
      description: 'Deposits locked in smart contracts and released only when conditions are met'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Fair Disputes',
      description: 'Transparent arbitration process with evidence-based resolution'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Fast & Simple',
      description: 'Automated processes mean faster refunds and less paperwork'
    }
  ]

  const steps = [
    {
      number: '1',
      title: 'Create Lease',
      description: 'Tenant and landlord agree on terms and create a lease on the platform'
    },
    {
      number: '2',
      title: 'Deposit Funds',
      description: 'Tenant deposits security amount into the smart contract escrow'
    },
    {
      number: '3',
      title: 'Move In',
      description: 'Both parties upload move-in photos as evidence of property condition'
    },
    {
      number: '4',
      title: 'Lease Period',
      description: 'Rental period proceeds as normal with all records on blockchain'
    },
    {
      number: '5',
      title: 'Move Out & Release',
      description: 'After inspection, deposit is released automatically or via arbitration if disputed'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              On-Chain Rental & Security Deposit Vault
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
              A transparent and fair platform for managing security deposits between tenants and landlords
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/tenant" className="btn btn-primary text-lg">
                I'm a Tenant
              </Link>
              <Link to="/landlord" className="btn btn-secondary text-lg">
                I'm a Landlord
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {features.map((feature, index) => (
              <div key={index} className="card text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900 rounded-full mx-auto mb-4 flex items-center justify-center text-blue-600 dark:text-blue-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="card">
            <h2 className="section-title text-center">How It Works</h2>
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white text-lg mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 card bg-blue-50 dark:bg-blue-900 border-blue-200 dark:border-blue-800 text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to get started?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-xl mx-auto">
              Join thousands of tenants and landlords using blockchain technology for secure and transparent rental agreements
            </p>
            <Link to="/create-lease" className="btn btn-primary">
              Create Your First Lease
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
