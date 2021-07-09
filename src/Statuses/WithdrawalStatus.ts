export enum WithdrawalStatus {
    Initiated = 'INITIATED',
    Failed = 'FAILED',
    InProgress = 'IN_PROGRESS',
    Cancelled = 'CANCELLED',
    Pending = 'PENDING',
    Declined = 'DECLINED',
    Processing = 'PROCESSING',
    Confirmed = 'CONFIRMED'
}

export const WithdrawalStatusValues = Object.values(WithdrawalStatus)