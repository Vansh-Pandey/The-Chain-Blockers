#![no_std]
use soroban_sdk::{contract, contractimpl, contracttype, Address, Env, String, Vec};

#[contracttype]
#[derive(Clone)]
pub enum LeaseState {
    Created,
    DepositPaid,
    Active,
    InDispute,
    Closed,
}

#[contracttype]
#[derive(Clone)]
pub struct LeaseInfo {
    pub tenant: Address,
    pub landlord: Address,
    pub deposit_amount: i128,
    pub monthly_rent: i128,
    pub start_date: u64,
    pub end_date: u64,
    pub state: LeaseState,
    pub property_address: String,
}

#[contracttype]
#[derive(Clone)]
pub enum DataKey {
    LeaseInfo,
    DepositBalance,
    Evidence(Address),
}

#[contract]
pub struct LeaseVault;

#[contractimpl]
impl LeaseVault {
    pub fn initialize(
        env: Env,
        tenant: Address,
        landlord: Address,
        deposit_amount: i128,
        monthly_rent: i128,
        start_date: u64,
        end_date: u64,
        property_address: String,
    ) {
        let lease_info = LeaseInfo {
            tenant,
            landlord,
            deposit_amount,
            monthly_rent,
            start_date,
            end_date,
            state: LeaseState::Created,
            property_address,
        };
        env.storage().instance().set(&DataKey::LeaseInfo, &lease_info);
        env.storage().instance().set(&DataKey::DepositBalance, &0i128);
    }

    pub fn deposit(env: Env, from: Address, amount: i128) {
        from.require_auth();
        
        let mut lease_info: LeaseInfo = env
            .storage()
            .instance()
            .get(&DataKey::LeaseInfo)
            .unwrap();
        
        if amount < lease_info.deposit_amount {
            panic!("Insufficient deposit amount");
        }
        
        env.storage().instance().set(&DataKey::DepositBalance, &amount);
        lease_info.state = LeaseState::DepositPaid;
        env.storage().instance().set(&DataKey::LeaseInfo, &lease_info);
    }

    pub fn confirm_move_in(env: Env, landlord: Address) {
        landlord.require_auth();
        
        let mut lease_info: LeaseInfo = env
            .storage()
            .instance()
            .get(&DataKey::LeaseInfo)
            .unwrap();
        
        lease_info.state = LeaseState::Active;
        env.storage().instance().set(&DataKey::LeaseInfo, &lease_info);
    }

    pub fn release_deposit(env: Env, to: Address) {
        let lease_info: LeaseInfo = env
            .storage()
            .instance()
            .get(&DataKey::LeaseInfo)
            .unwrap();
        
        let balance: i128 = env
            .storage()
            .instance()
            .get(&DataKey::DepositBalance)
            .unwrap();
        
        env.storage().instance().set(&DataKey::DepositBalance, &0i128);
        
        let mut updated_lease = lease_info;
        updated_lease.state = LeaseState::Closed;
        env.storage().instance().set(&DataKey::LeaseInfo, &updated_lease);
    }

    pub fn get_lease_info(env: Env) -> LeaseInfo {
        env.storage()
            .instance()
            .get(&DataKey::LeaseInfo)
            .unwrap()
    }

    pub fn get_balance(env: Env) -> i128 {
        env.storage()
            .instance()
            .get(&DataKey::DepositBalance)
            .unwrap_or(0)
    }
}
