# Rental Vault - Secure Deposit Platform

A decentralized platform for managing rental security deposits on the Stellar blockchain.

## Overview

Rental Vault provides a transparent and secure way for tenants and landlords to handle security deposits through blockchain technology. Deposits are held in smart contracts and released based on predefined conditions, eliminating disputes and ensuring fairness.

## Features

- Secure escrow of security deposits
- Transparent lease management
- Automated deposit releases
- Dispute resolution system
- Evidence-based claims
- Blockchain-verified transactions

## Tech Stack

### Frontend
- React 18
- Vite
- Tailwind CSS
- React Router
- Stellar SDK

### Backend
- Node.js
- Express
- Stellar SDK

### Blockchain
- Stellar Soroban
- Rust

## Prerequisites

- Node.js 18+
- Rust 1.70+
- Stellar CLI
- Freighter Wallet (browser extension)

## Installation

### 1. Clone Repository

```bash
git clone <repository-url>
cd rental-vault-prototype
```

### 2. Install Frontend Dependencies

```bash
cd frontend
npm install
```

### 3. Install Backend Dependencies

```bash
cd ../backend
npm install
```

### 4. Setup Environment

Create `backend/.env` file:

```
PORT=5000
NODE_ENV=development
STELLAR_NETWORK=testnet
STELLAR_HORIZON_URL=https://horizon-testnet.stellar.org
```

### 5. Build Smart Contract

```bash
cd ../contracts/lease-vault
stellar contract build
```

### 6. Deploy Contract (Testnet)

```bash
# Generate testnet account
stellar keys generate test-account --network testnet

# Fund account
stellar keys fund test-account --network testnet

# Deploy contract
stellar contract deploy \
  --wasm target/wasm32-unknown-unknown/release/lease_vault.wasm \
  --source test-account \
  --network testnet
```

## Running the Application

### Start Backend

```bash
cd backend
npm run dev
```

Server runs on http://localhost:5000

### Start Frontend

```bash
cd frontend
npm run dev
```

Application opens at http://localhost:3000

## Usage

### For Tenants

1. Connect your Freighter wallet
2. Navigate to "Create Lease"
3. Fill in lease details
4. Pay security deposit
5. Upload move-in evidence
6. Track lease status

### For Landlords

1. Connect your Freighter wallet
2. Review incoming lease requests
3. Confirm move-in
4. Upload property condition evidence
5. Release or dispute deposits at lease end

## Project Structure

```
rental-vault-prototype/
├── frontend/              # React application
│   ├── src/
│   │   ├── components/   # Reusable components
│   │   ├── pages/        # Page components
│   │   ├── App.jsx       # Main app component
│   │   └── main.jsx      # Entry point
│   └── package.json
│
├── backend/               # Express API
│   ├── server.js         # Main server file
│   └── package.json
│
└── contracts/             # Smart contracts
    └── lease-vault/      # Lease vault contract
        └── src/
            └── lib.rs    # Contract code
```

## Smart Contract Functions

### Initialize Lease
```rust
pub fn initialize(
    env: Env,
    tenant: Address,
    landlord: Address,
    deposit_amount: i128,
    monthly_rent: i128,
    start_date: u64,
    end_date: u64,
    property_address: String,
)
```

### Deposit Funds
```rust
pub fn deposit(env: Env, from: Address, amount: i128)
```

### Confirm Move-In
```rust
pub fn confirm_move_in(env: Env, landlord: Address)
```

### Release Deposit
```rust
pub fn release_deposit(env: Env, to: Address)
```

### Get Lease Info
```rust
pub fn get_lease_info(env: Env) -> LeaseInfo
```

## API Endpoints

### Leases

- `GET /api/leases` - Get all leases
- `GET /api/leases/:id` - Get lease by ID
- `POST /api/leases` - Create new lease
- `PUT /api/leases/:id` - Update lease
- `DELETE /api/leases/:id` - Delete lease

### Health Check

- `GET /health` - Server health status

## Development

### Frontend Development

```bash
cd frontend
npm run dev
```

### Backend Development

```bash
cd backend
npm run dev
```

### Build for Production

Frontend:
```bash
cd frontend
npm run build
```

Backend:
```bash
cd backend
npm start
```

## Testing

### Test Smart Contract

```bash
cd contracts/lease-vault
cargo test
```

## Deployment

### Frontend (Vercel)

```bash
cd frontend
vercel
```

### Backend (Railway)

```bash
cd backend
railway up
```

### Smart Contract (Mainnet)

```bash
stellar contract deploy \
  --wasm target/wasm32-unknown-unknown/release/lease_vault.wasm \
  --source your-account \
  --network mainnet
```

## Security

- Deposits locked in smart contracts
- Wallet private keys never exposed
- All transactions verified on blockchain
- Evidence stored securely

## License

MIT

## Support

For issues or questions, please open an issue on GitHub.
