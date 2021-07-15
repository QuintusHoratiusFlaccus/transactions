/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetDeposits
// ====================================================

export interface GetDeposits_Deposits {
  __typename: "Deposit";
  status: DepositStatus;
  id: string;
  playerId: string;
  currency: string;
}

export interface GetDeposits {
  Deposits: GetDeposits_Deposits[];
}

export interface GetDepositsVariables {
  status?: string[] | null;
  id?: string | null;
  playerId?: string | null;
  currency?: string[] | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUserIdByName
// ====================================================

export interface GetUserIdByName_UserIdByName {
  __typename: "User";
  id: string;
}

export interface GetUserIdByName {
  UserIdByName: GetUserIdByName_UserIdByName | null;
}

export interface GetUserIdByNameVariables {
  name: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Withdrawals
// ====================================================

export interface Withdrawals_Withdrawals {
  __typename: "Withdrawal";
  status: WithdrawalStatus;
  id: string;
  playerId: string;
  currency: string;
  isLocked: boolean;
}

export interface Withdrawals {
  Withdrawals: Withdrawals_Withdrawals[];
}

export interface WithdrawalsVariables {
  status?: string[] | null;
  id?: string | null;
  playerId?: string | null;
  currency?: string[] | null;
  isLocked?: boolean | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum DepositStatus {
  CANCELLED = "CANCELLED",
  CONFIRMED = "CONFIRMED",
  DECLINED = "DECLINED",
  FAILED = "FAILED",
  INITIATED = "INITIATED",
  PROCESSING = "PROCESSING",
}

export enum WithdrawalStatus {
  CANCELLED = "CANCELLED",
  CONFIRMED = "CONFIRMED",
  DECLINED = "DECLINED",
  FAILED = "FAILED",
  INITIATED = "INITIATED",
  IN_PROGRESS = "IN_PROGRESS",
  PENDING = "PENDING",
  PROCESSING = "PROCESSING",
}

//==============================================================
// END Enums and Input Objects
//==============================================================
