import { GraphQLResolveInfo } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Deposit = {
  __typename?: 'Deposit';
  id: Scalars['ID'];
  playerId: Scalars['ID'];
  status: DepositStatus;
  currency: Scalars['String'];
};

export type DepositFilters = {
  id?: Maybe<Scalars['ID']>;
  playerId?: Maybe<Scalars['ID']>;
  status?: Maybe<Array<DepositStatus>>;
  currency?: Maybe<Array<Scalars['String']>>;
};

export enum DepositStatus {
  Initiated = 'INITIATED',
  Failed = 'FAILED',
  Confirmed = 'CONFIRMED',
  Processing = 'PROCESSING',
  Cancelled = 'CANCELLED',
  Declined = 'DECLINED'
}

export type Query = {
  __typename?: 'Query';
  UserIdByName?: Maybe<User>;
  Withdrawals: Array<Withdrawal>;
  Deposits: Array<Deposit>;
};


export type QueryUserIdByNameArgs = {
  name: Scalars['String'];
};


export type QueryWithdrawalsArgs = {
  filter?: Maybe<WithdrawalFilters>;
};


export type QueryDepositsArgs = {
  filter?: Maybe<DepositFilters>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  username: Scalars['String'];
};

export type Withdrawal = {
  __typename?: 'Withdrawal';
  id: Scalars['ID'];
  playerId: Scalars['ID'];
  status: WithdrawalStatus;
  currency: Scalars['String'];
  isLocked: Scalars['Boolean'];
};

export type WithdrawalFilters = {
  id?: Maybe<Scalars['ID']>;
  playerId?: Maybe<Scalars['ID']>;
  status?: Maybe<Array<WithdrawalStatus>>;
  currency?: Maybe<Array<Scalars['String']>>;
  isLocked?: Maybe<Scalars['Boolean']>;
};

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

export type GetDepositsQueryVariables = Exact<{
  filter?: Maybe<DepositFilters>;
}>;


export type GetDepositsQuery = (
  { __typename?: 'Query' }
  & { Deposits: Array<(
    { __typename?: 'Deposit' }
    & Pick<Deposit, 'status' | 'id' | 'playerId' | 'currency'>
  )> }
);

export type GetUserIdByNameQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type GetUserIdByNameQuery = (
  { __typename?: 'Query' }
  & { UserIdByName?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
  )> }
);

export type GetWithdrawalsQueryVariables = Exact<{
  filter?: Maybe<WithdrawalFilters>;
}>;


export type GetWithdrawalsQuery = (
  { __typename?: 'Query' }
  & { Withdrawals: Array<(
    { __typename?: 'Withdrawal' }
    & Pick<Withdrawal, 'status' | 'id' | 'playerId' | 'currency' | 'isLocked'>
  )> }
);



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Deposit: ResolverTypeWrapper<Deposit>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  DepositFilters: DepositFilters;
  DepositStatus: DepositStatus;
  Query: ResolverTypeWrapper<{}>;
  User: ResolverTypeWrapper<User>;
  Withdrawal: ResolverTypeWrapper<Withdrawal>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  WithdrawalFilters: WithdrawalFilters;
  WithdrawalStatus: WithdrawalStatus;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Deposit: Deposit;
  ID: Scalars['ID'];
  String: Scalars['String'];
  DepositFilters: DepositFilters;
  Query: {};
  User: User;
  Withdrawal: Withdrawal;
  Boolean: Scalars['Boolean'];
  WithdrawalFilters: WithdrawalFilters;
};

export type DepositResolvers<ContextType = any, ParentType extends ResolversParentTypes['Deposit'] = ResolversParentTypes['Deposit']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  playerId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['DepositStatus'], ParentType, ContextType>;
  currency?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  UserIdByName?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserIdByNameArgs, 'name'>>;
  Withdrawals?: Resolver<Array<ResolversTypes['Withdrawal']>, ParentType, ContextType, RequireFields<QueryWithdrawalsArgs, never>>;
  Deposits?: Resolver<Array<ResolversTypes['Deposit']>, ParentType, ContextType, RequireFields<QueryDepositsArgs, never>>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WithdrawalResolvers<ContextType = any, ParentType extends ResolversParentTypes['Withdrawal'] = ResolversParentTypes['Withdrawal']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  playerId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['WithdrawalStatus'], ParentType, ContextType>;
  currency?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isLocked?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Deposit?: DepositResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  Withdrawal?: WithdrawalResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;


export const GetDepositsDocument = gql`
    query GetDeposits($filter: DepositFilters) {
  Deposits(filter: $filter) {
    status
    id
    playerId
    currency
  }
}
    `;

/**
 * __useGetDepositsQuery__
 *
 * To run a query within a React component, call `useGetDepositsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDepositsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDepositsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetDepositsQuery(baseOptions?: Apollo.QueryHookOptions<GetDepositsQuery, GetDepositsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDepositsQuery, GetDepositsQueryVariables>(GetDepositsDocument, options);
      }
export function useGetDepositsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDepositsQuery, GetDepositsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDepositsQuery, GetDepositsQueryVariables>(GetDepositsDocument, options);
        }
export type GetDepositsQueryHookResult = ReturnType<typeof useGetDepositsQuery>;
export type GetDepositsLazyQueryHookResult = ReturnType<typeof useGetDepositsLazyQuery>;
export type GetDepositsQueryResult = Apollo.QueryResult<GetDepositsQuery, GetDepositsQueryVariables>;
export const GetUserIdByNameDocument = gql`
    query GetUserIdByName($name: String!) {
  UserIdByName(name: $name) {
    id
  }
}
    `;

/**
 * __useGetUserIdByNameQuery__
 *
 * To run a query within a React component, call `useGetUserIdByNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserIdByNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserIdByNameQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGetUserIdByNameQuery(baseOptions: Apollo.QueryHookOptions<GetUserIdByNameQuery, GetUserIdByNameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserIdByNameQuery, GetUserIdByNameQueryVariables>(GetUserIdByNameDocument, options);
      }
export function useGetUserIdByNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserIdByNameQuery, GetUserIdByNameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserIdByNameQuery, GetUserIdByNameQueryVariables>(GetUserIdByNameDocument, options);
        }
export type GetUserIdByNameQueryHookResult = ReturnType<typeof useGetUserIdByNameQuery>;
export type GetUserIdByNameLazyQueryHookResult = ReturnType<typeof useGetUserIdByNameLazyQuery>;
export type GetUserIdByNameQueryResult = Apollo.QueryResult<GetUserIdByNameQuery, GetUserIdByNameQueryVariables>;
export const GetWithdrawalsDocument = gql`
    query GetWithdrawals($filter: WithdrawalFilters) {
  Withdrawals(filter: $filter) {
    status
    id
    playerId
    currency
    isLocked
  }
}
    `;

/**
 * __useGetWithdrawalsQuery__
 *
 * To run a query within a React component, call `useGetWithdrawalsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWithdrawalsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWithdrawalsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetWithdrawalsQuery(baseOptions?: Apollo.QueryHookOptions<GetWithdrawalsQuery, GetWithdrawalsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetWithdrawalsQuery, GetWithdrawalsQueryVariables>(GetWithdrawalsDocument, options);
      }
export function useGetWithdrawalsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetWithdrawalsQuery, GetWithdrawalsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetWithdrawalsQuery, GetWithdrawalsQueryVariables>(GetWithdrawalsDocument, options);
        }
export type GetWithdrawalsQueryHookResult = ReturnType<typeof useGetWithdrawalsQuery>;
export type GetWithdrawalsLazyQueryHookResult = ReturnType<typeof useGetWithdrawalsLazyQuery>;
export type GetWithdrawalsQueryResult = Apollo.QueryResult<GetWithdrawalsQuery, GetWithdrawalsQueryVariables>;