export enum DepositStatus {
    Initiated = 'INITIATED',
    Failed = 'FAILED',
    Confirmed = 'CONFIRMED',
    Processing = 'PROCESSING',
    Cancelled = 'CANCELLED',
    Declined = 'DECLINED'
}

export const DepositArr = Object.keys(DepositStatus)