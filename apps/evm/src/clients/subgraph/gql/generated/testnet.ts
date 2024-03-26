import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigDecimal: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Bytes: { input: any; output: any; }
  Int8: { input: any; output: any; }
};

/**
 * Account is an BNB address, with a list of all vToken markets the account has
 * participated in, along with liquidation information.
 *
 */
export type Account = {
  __typename?: 'Account';
  /** Count user has been liquidated */
  countLiquidated: Scalars['Int']['output'];
  /** Count user has liquidated others */
  countLiquidator: Scalars['Int']['output'];
  /** True if user has ever borrowed */
  hasBorrowed: Scalars['Boolean']['output'];
  /** User BNB address */
  id: Scalars['ID']['output'];
  /** Array of VTokens user is in */
  tokens: Array<AccountVToken>;
};


/**
 * Account is an BNB address, with a list of all vToken markets the account has
 * participated in, along with liquidation information.
 *
 */
export type AccountTokensArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccountVToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccountVToken_Filter>;
};

/**
 * AccountVToken is a single account within a single vToken market, with data such
 * as interest earned or paid
 *
 */
export type AccountVToken = {
  __typename?: 'AccountVToken';
  /** Relation to user */
  account: Account;
  /** Current borrow balance stored in contract (exclusive of interest since accrualBlockNumber) */
  accountBorrowBalanceMantissa: Scalars['BigInt']['output'];
  /** The value of the borrow index upon users last interaction */
  accountBorrowIndexMantissa: Scalars['BigInt']['output'];
  /** Amount of tokens supplied to the market */
  accountSupplyBalanceMantissa: Scalars['BigInt']['output'];
  /** Block number this asset was updated at in the contract */
  accrualBlockNumber: Scalars['BigInt']['output'];
  /** Bad debt data for the account in the market */
  badDebt: Array<AccountVTokenBadDebt>;
  /** True if user is entered, false if they are exited */
  enteredMarket: Scalars['Boolean']['output'];
  /** Concatenation of VToken address and user address */
  id: Scalars['ID']['output'];
  /** Relation to market */
  market: Market;
  /** Total amount of underlying redeemed */
  totalUnderlyingRedeemedMantissa: Scalars['BigInt']['output'];
  /** Total amount underlying repaid */
  totalUnderlyingRepaidMantissa: Scalars['BigInt']['output'];
  /** Transactions data */
  transactions: Array<AccountVTokenTransaction>;
};


/**
 * AccountVToken is a single account within a single vToken market, with data such
 * as interest earned or paid
 *
 */
export type AccountVTokenBadDebtArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccountVTokenBadDebt_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccountVTokenBadDebt_Filter>;
};


/**
 * AccountVToken is a single account within a single vToken market, with data such
 * as interest earned or paid
 *
 */
export type AccountVTokenTransactionsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccountVTokenTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccountVTokenTransaction_Filter>;
};

/**
 * Auxiliary entity for AccountVToken indicating when a certain amount of bad debt was healed
 *
 */
export type AccountVTokenBadDebt = {
  __typename?: 'AccountVTokenBadDebt';
  account: AccountVToken;
  amount: Scalars['BigInt']['output'];
  block: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  timestamp: Scalars['BigInt']['output'];
};

export type AccountVTokenBadDebt_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['String']['input']>;
  account_?: InputMaybe<AccountVToken_Filter>;
  account_contains?: InputMaybe<Scalars['String']['input']>;
  account_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_gt?: InputMaybe<Scalars['String']['input']>;
  account_gte?: InputMaybe<Scalars['String']['input']>;
  account_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_lt?: InputMaybe<Scalars['String']['input']>;
  account_lte?: InputMaybe<Scalars['String']['input']>;
  account_not?: InputMaybe<Scalars['String']['input']>;
  account_not_contains?: InputMaybe<Scalars['String']['input']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<AccountVTokenBadDebt_Filter>>>;
  block?: InputMaybe<Scalars['BigInt']['input']>;
  block_gt?: InputMaybe<Scalars['BigInt']['input']>;
  block_gte?: InputMaybe<Scalars['BigInt']['input']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  block_lt?: InputMaybe<Scalars['BigInt']['input']>;
  block_lte?: InputMaybe<Scalars['BigInt']['input']>;
  block_not?: InputMaybe<Scalars['BigInt']['input']>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<AccountVTokenBadDebt_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum AccountVTokenBadDebt_OrderBy {
  Account = 'account',
  AccountAccountBorrowBalanceMantissa = 'account__accountBorrowBalanceMantissa',
  AccountAccountBorrowIndexMantissa = 'account__accountBorrowIndexMantissa',
  AccountAccountSupplyBalanceMantissa = 'account__accountSupplyBalanceMantissa',
  AccountAccrualBlockNumber = 'account__accrualBlockNumber',
  AccountEnteredMarket = 'account__enteredMarket',
  AccountId = 'account__id',
  AccountTotalUnderlyingRedeemedMantissa = 'account__totalUnderlyingRedeemedMantissa',
  AccountTotalUnderlyingRepaidMantissa = 'account__totalUnderlyingRepaidMantissa',
  Amount = 'amount',
  Block = 'block',
  Id = 'id',
  Timestamp = 'timestamp'
}

/**
 * Auxiliary entity for AccountVToken
 *
 */
export type AccountVTokenTransaction = {
  __typename?: 'AccountVTokenTransaction';
  /** ID of the corresponding account and VToken */
  accountVToken: AccountVToken;
  /** Transaction block */
  block: Scalars['BigInt']['output'];
  /** Concatenation of the transaction hash and the log index */
  id: Scalars['ID']['output'];
  /** Index of the log in the block logs */
  logIndex: Scalars['BigInt']['output'];
  /** Transaction timestamp */
  timestamp: Scalars['BigInt']['output'];
  /** Transaction Hash */
  txHash: Scalars['Bytes']['output'];
};

export type AccountVTokenTransaction_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  accountVToken?: InputMaybe<Scalars['String']['input']>;
  accountVToken_?: InputMaybe<AccountVToken_Filter>;
  accountVToken_contains?: InputMaybe<Scalars['String']['input']>;
  accountVToken_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  accountVToken_ends_with?: InputMaybe<Scalars['String']['input']>;
  accountVToken_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  accountVToken_gt?: InputMaybe<Scalars['String']['input']>;
  accountVToken_gte?: InputMaybe<Scalars['String']['input']>;
  accountVToken_in?: InputMaybe<Array<Scalars['String']['input']>>;
  accountVToken_lt?: InputMaybe<Scalars['String']['input']>;
  accountVToken_lte?: InputMaybe<Scalars['String']['input']>;
  accountVToken_not?: InputMaybe<Scalars['String']['input']>;
  accountVToken_not_contains?: InputMaybe<Scalars['String']['input']>;
  accountVToken_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  accountVToken_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  accountVToken_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  accountVToken_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  accountVToken_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  accountVToken_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  accountVToken_starts_with?: InputMaybe<Scalars['String']['input']>;
  accountVToken_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  and?: InputMaybe<Array<InputMaybe<AccountVTokenTransaction_Filter>>>;
  block?: InputMaybe<Scalars['BigInt']['input']>;
  block_gt?: InputMaybe<Scalars['BigInt']['input']>;
  block_gte?: InputMaybe<Scalars['BigInt']['input']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  block_lt?: InputMaybe<Scalars['BigInt']['input']>;
  block_lte?: InputMaybe<Scalars['BigInt']['input']>;
  block_not?: InputMaybe<Scalars['BigInt']['input']>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<AccountVTokenTransaction_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  txHash?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  txHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum AccountVTokenTransaction_OrderBy {
  AccountVToken = 'accountVToken',
  AccountVTokenAccountBorrowBalanceMantissa = 'accountVToken__accountBorrowBalanceMantissa',
  AccountVTokenAccountBorrowIndexMantissa = 'accountVToken__accountBorrowIndexMantissa',
  AccountVTokenAccountSupplyBalanceMantissa = 'accountVToken__accountSupplyBalanceMantissa',
  AccountVTokenAccrualBlockNumber = 'accountVToken__accrualBlockNumber',
  AccountVTokenEnteredMarket = 'accountVToken__enteredMarket',
  AccountVTokenId = 'accountVToken__id',
  AccountVTokenTotalUnderlyingRedeemedMantissa = 'accountVToken__totalUnderlyingRedeemedMantissa',
  AccountVTokenTotalUnderlyingRepaidMantissa = 'accountVToken__totalUnderlyingRepaidMantissa',
  Block = 'block',
  Id = 'id',
  LogIndex = 'logIndex',
  Timestamp = 'timestamp',
  TxHash = 'txHash'
}

export type AccountVToken_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['String']['input']>;
  accountBorrowBalanceMantissa?: InputMaybe<Scalars['BigInt']['input']>;
  accountBorrowBalanceMantissa_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accountBorrowBalanceMantissa_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accountBorrowBalanceMantissa_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accountBorrowBalanceMantissa_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accountBorrowBalanceMantissa_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accountBorrowBalanceMantissa_not?: InputMaybe<Scalars['BigInt']['input']>;
  accountBorrowBalanceMantissa_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accountBorrowIndexMantissa?: InputMaybe<Scalars['BigInt']['input']>;
  accountBorrowIndexMantissa_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accountBorrowIndexMantissa_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accountBorrowIndexMantissa_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accountBorrowIndexMantissa_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accountBorrowIndexMantissa_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accountBorrowIndexMantissa_not?: InputMaybe<Scalars['BigInt']['input']>;
  accountBorrowIndexMantissa_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accountSupplyBalanceMantissa?: InputMaybe<Scalars['BigInt']['input']>;
  accountSupplyBalanceMantissa_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accountSupplyBalanceMantissa_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accountSupplyBalanceMantissa_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accountSupplyBalanceMantissa_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accountSupplyBalanceMantissa_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accountSupplyBalanceMantissa_not?: InputMaybe<Scalars['BigInt']['input']>;
  accountSupplyBalanceMantissa_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  account_?: InputMaybe<Account_Filter>;
  account_contains?: InputMaybe<Scalars['String']['input']>;
  account_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_gt?: InputMaybe<Scalars['String']['input']>;
  account_gte?: InputMaybe<Scalars['String']['input']>;
  account_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_lt?: InputMaybe<Scalars['String']['input']>;
  account_lte?: InputMaybe<Scalars['String']['input']>;
  account_not?: InputMaybe<Scalars['String']['input']>;
  account_not_contains?: InputMaybe<Scalars['String']['input']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  accrualBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  accrualBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accrualBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accrualBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accrualBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accrualBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accrualBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  accrualBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<AccountVToken_Filter>>>;
  badDebt_?: InputMaybe<AccountVTokenBadDebt_Filter>;
  enteredMarket?: InputMaybe<Scalars['Boolean']['input']>;
  enteredMarket_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  enteredMarket_not?: InputMaybe<Scalars['Boolean']['input']>;
  enteredMarket_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  market?: InputMaybe<Scalars['String']['input']>;
  market_?: InputMaybe<Market_Filter>;
  market_contains?: InputMaybe<Scalars['String']['input']>;
  market_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  market_ends_with?: InputMaybe<Scalars['String']['input']>;
  market_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_gt?: InputMaybe<Scalars['String']['input']>;
  market_gte?: InputMaybe<Scalars['String']['input']>;
  market_in?: InputMaybe<Array<Scalars['String']['input']>>;
  market_lt?: InputMaybe<Scalars['String']['input']>;
  market_lte?: InputMaybe<Scalars['String']['input']>;
  market_not?: InputMaybe<Scalars['String']['input']>;
  market_not_contains?: InputMaybe<Scalars['String']['input']>;
  market_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  market_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  market_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  market_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  market_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_starts_with?: InputMaybe<Scalars['String']['input']>;
  market_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<AccountVToken_Filter>>>;
  totalUnderlyingRedeemedMantissa?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnderlyingRedeemedMantissa_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnderlyingRedeemedMantissa_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnderlyingRedeemedMantissa_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalUnderlyingRedeemedMantissa_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnderlyingRedeemedMantissa_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnderlyingRedeemedMantissa_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnderlyingRedeemedMantissa_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalUnderlyingRepaidMantissa?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnderlyingRepaidMantissa_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnderlyingRepaidMantissa_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnderlyingRepaidMantissa_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalUnderlyingRepaidMantissa_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnderlyingRepaidMantissa_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnderlyingRepaidMantissa_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnderlyingRepaidMantissa_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactions_?: InputMaybe<AccountVTokenTransaction_Filter>;
};

export enum AccountVToken_OrderBy {
  Account = 'account',
  AccountBorrowBalanceMantissa = 'accountBorrowBalanceMantissa',
  AccountBorrowIndexMantissa = 'accountBorrowIndexMantissa',
  AccountSupplyBalanceMantissa = 'accountSupplyBalanceMantissa',
  AccountCountLiquidated = 'account__countLiquidated',
  AccountCountLiquidator = 'account__countLiquidator',
  AccountHasBorrowed = 'account__hasBorrowed',
  AccountId = 'account__id',
  AccrualBlockNumber = 'accrualBlockNumber',
  BadDebt = 'badDebt',
  EnteredMarket = 'enteredMarket',
  Id = 'id',
  Market = 'market',
  MarketAccessControlManagerAddress = 'market__accessControlManagerAddress',
  MarketAccrualBlockNumber = 'market__accrualBlockNumber',
  MarketBadDebtMantissa = 'market__badDebtMantissa',
  MarketBlockTimestamp = 'market__blockTimestamp',
  MarketBorrowCapMantissa = 'market__borrowCapMantissa',
  MarketBorrowIndexMantissa = 'market__borrowIndexMantissa',
  MarketBorrowRateMantissa = 'market__borrowRateMantissa',
  MarketBorrowerCount = 'market__borrowerCount',
  MarketCashMantissa = 'market__cashMantissa',
  MarketCollateralFactorMantissa = 'market__collateralFactorMantissa',
  MarketExchangeRateMantissa = 'market__exchangeRateMantissa',
  MarketId = 'market__id',
  MarketInterestRateModelAddress = 'market__interestRateModelAddress',
  MarketLiquidationThresholdMantissa = 'market__liquidationThresholdMantissa',
  MarketName = 'market__name',
  MarketReserveFactorMantissa = 'market__reserveFactorMantissa',
  MarketReservesMantissa = 'market__reservesMantissa',
  MarketSupplierCount = 'market__supplierCount',
  MarketSupplyCapMantissa = 'market__supplyCapMantissa',
  MarketSupplyRateMantissa = 'market__supplyRateMantissa',
  MarketSymbol = 'market__symbol',
  MarketTotalBorrowsMantissa = 'market__totalBorrowsMantissa',
  MarketTotalSupplyMantissa = 'market__totalSupplyMantissa',
  MarketUnderlyingAddress = 'market__underlyingAddress',
  MarketUnderlyingDecimals = 'market__underlyingDecimals',
  MarketUnderlyingName = 'market__underlyingName',
  MarketUnderlyingPriceCents = 'market__underlyingPriceCents',
  MarketUnderlyingSymbol = 'market__underlyingSymbol',
  MarketVTokenDecimals = 'market__vTokenDecimals',
  TotalUnderlyingRedeemedMantissa = 'totalUnderlyingRedeemedMantissa',
  TotalUnderlyingRepaidMantissa = 'totalUnderlyingRepaidMantissa',
  Transactions = 'transactions'
}

export type Account_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Account_Filter>>>;
  countLiquidated?: InputMaybe<Scalars['Int']['input']>;
  countLiquidated_gt?: InputMaybe<Scalars['Int']['input']>;
  countLiquidated_gte?: InputMaybe<Scalars['Int']['input']>;
  countLiquidated_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  countLiquidated_lt?: InputMaybe<Scalars['Int']['input']>;
  countLiquidated_lte?: InputMaybe<Scalars['Int']['input']>;
  countLiquidated_not?: InputMaybe<Scalars['Int']['input']>;
  countLiquidated_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  countLiquidator?: InputMaybe<Scalars['Int']['input']>;
  countLiquidator_gt?: InputMaybe<Scalars['Int']['input']>;
  countLiquidator_gte?: InputMaybe<Scalars['Int']['input']>;
  countLiquidator_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  countLiquidator_lt?: InputMaybe<Scalars['Int']['input']>;
  countLiquidator_lte?: InputMaybe<Scalars['Int']['input']>;
  countLiquidator_not?: InputMaybe<Scalars['Int']['input']>;
  countLiquidator_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  hasBorrowed?: InputMaybe<Scalars['Boolean']['input']>;
  hasBorrowed_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  hasBorrowed_not?: InputMaybe<Scalars['Boolean']['input']>;
  hasBorrowed_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Account_Filter>>>;
  tokens_?: InputMaybe<AccountVToken_Filter>;
};

export enum Account_OrderBy {
  CountLiquidated = 'countLiquidated',
  CountLiquidator = 'countLiquidator',
  HasBorrowed = 'hasBorrowed',
  Id = 'id',
  Tokens = 'tokens'
}

export enum Aggregation_Interval {
  Day = 'day',
  Hour = 'hour'
}

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export enum EventType {
  Borrow = 'BORROW',
  Liquidate = 'LIQUIDATE',
  Mint = 'MINT',
  Redeem = 'REDEEM',
  Repay = 'REPAY',
  Transfer = 'TRANSFER'
}

/**
 * Market stores all high level variables for a vToken market
 *
 */
export type Market = {
  __typename?: 'Market';
  /** Contract address for the Access Control Manager */
  accessControlManagerAddress?: Maybe<Scalars['Bytes']['output']>;
  /** Accounts who participate in this market */
  accounts: Array<AccountVToken>;
  /** Block the market is updated to */
  accrualBlockNumber: Scalars['Int']['output'];
  /** The amount of bad debt in the market */
  badDebtMantissa: Scalars['BigInt']['output'];
  /** Timestamp the market was most recently updated */
  blockTimestamp: Scalars['Int']['output'];
  /** Max token borrow amount allowed */
  borrowCapMantissa: Scalars['BigInt']['output'];
  /** The history of the markets borrow index return (Think S&P 500) */
  borrowIndexMantissa: Scalars['BigInt']['output'];
  /** Borrow rate per block */
  borrowRateMantissa: Scalars['BigInt']['output'];
  /** Number of accounts currently borrowing from this market */
  borrowerCount: Scalars['BigInt']['output'];
  /** The vToken contract balance of BEP20 or BNB */
  cashMantissa: Scalars['BigInt']['output'];
  /** Collateral factor determining how much one can borrow */
  collateralFactorMantissa: Scalars['BigInt']['output'];
  /** Exchange rate of tokens / vTokens */
  exchangeRateMantissa: Scalars['BigInt']['output'];
  /** VToken address */
  id: Scalars['ID']['output'];
  /** Address of the interest rate model */
  interestRateModelAddress: Scalars['Bytes']['output'];
  /** Multiplier representing the collateralization after which the borrow is eligible for liquidation */
  liquidationThresholdMantissa: Scalars['BigInt']['output'];
  /** Name of the vToken */
  name: Scalars['String']['output'];
  /** Pool the market belongs to */
  pool: Pool;
  /** The factor determining interest that goes to reserves */
  reserveFactorMantissa: Scalars['BigInt']['output'];
  /** Reserves stored in the contract */
  reservesMantissa: Scalars['BigInt']['output'];
  /** Number of accounts currently supplying to this market */
  supplierCount: Scalars['BigInt']['output'];
  /** Supply cap set for market */
  supplyCapMantissa: Scalars['BigInt']['output'];
  /** Supply rate per block */
  supplyRateMantissa: Scalars['BigInt']['output'];
  /** VToken symbol */
  symbol: Scalars['String']['output'];
  /** Total borrowed */
  totalBorrowsMantissa: Scalars['BigInt']['output'];
  /** Total supplied */
  totalSupplyMantissa: Scalars['BigInt']['output'];
  /** Underlying token address */
  underlyingAddress: Scalars['Bytes']['output'];
  /** Underlying token decimal length */
  underlyingDecimals: Scalars['Int']['output'];
  /** Underlying token name */
  underlyingName: Scalars['String']['output'];
  /** Underlying token price in USD cents */
  underlyingPriceCents: Scalars['BigInt']['output'];
  /** Underlying token symbol */
  underlyingSymbol: Scalars['String']['output'];
  /** vToken decimal length */
  vTokenDecimals: Scalars['Int']['output'];
};


/**
 * Market stores all high level variables for a vToken market
 *
 */
export type MarketAccountsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccountVToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccountVToken_Filter>;
};

/**
 * enum MarketPauseGuardianAction {
 *   Mint = "Mint",
 *   Borrow = "Borrow",
 * }
 *
 */
export type MarketAction = {
  __typename?: 'MarketAction';
  action: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  pauseState: Scalars['Boolean']['output'];
  vToken: Scalars['Bytes']['output'];
};

export type MarketAction_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  action?: InputMaybe<Scalars['String']['input']>;
  action_contains?: InputMaybe<Scalars['String']['input']>;
  action_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  action_ends_with?: InputMaybe<Scalars['String']['input']>;
  action_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  action_gt?: InputMaybe<Scalars['String']['input']>;
  action_gte?: InputMaybe<Scalars['String']['input']>;
  action_in?: InputMaybe<Array<Scalars['String']['input']>>;
  action_lt?: InputMaybe<Scalars['String']['input']>;
  action_lte?: InputMaybe<Scalars['String']['input']>;
  action_not?: InputMaybe<Scalars['String']['input']>;
  action_not_contains?: InputMaybe<Scalars['String']['input']>;
  action_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  action_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  action_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  action_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  action_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  action_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  action_starts_with?: InputMaybe<Scalars['String']['input']>;
  action_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  and?: InputMaybe<Array<InputMaybe<MarketAction_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<MarketAction_Filter>>>;
  pauseState?: InputMaybe<Scalars['Boolean']['input']>;
  pauseState_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  pauseState_not?: InputMaybe<Scalars['Boolean']['input']>;
  pauseState_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  vToken?: InputMaybe<Scalars['Bytes']['input']>;
  vToken_contains?: InputMaybe<Scalars['Bytes']['input']>;
  vToken_gt?: InputMaybe<Scalars['Bytes']['input']>;
  vToken_gte?: InputMaybe<Scalars['Bytes']['input']>;
  vToken_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  vToken_lt?: InputMaybe<Scalars['Bytes']['input']>;
  vToken_lte?: InputMaybe<Scalars['Bytes']['input']>;
  vToken_not?: InputMaybe<Scalars['Bytes']['input']>;
  vToken_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  vToken_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum MarketAction_OrderBy {
  Action = 'action',
  Id = 'id',
  PauseState = 'pauseState',
  VToken = 'vToken'
}

export type Market_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  accessControlManagerAddress?: InputMaybe<Scalars['Bytes']['input']>;
  accessControlManagerAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  accessControlManagerAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  accessControlManagerAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  accessControlManagerAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  accessControlManagerAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  accessControlManagerAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  accessControlManagerAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  accessControlManagerAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  accessControlManagerAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  accounts_?: InputMaybe<AccountVToken_Filter>;
  accrualBlockNumber?: InputMaybe<Scalars['Int']['input']>;
  accrualBlockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  accrualBlockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  accrualBlockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  accrualBlockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  accrualBlockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  accrualBlockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  accrualBlockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Market_Filter>>>;
  badDebtMantissa?: InputMaybe<Scalars['BigInt']['input']>;
  badDebtMantissa_gt?: InputMaybe<Scalars['BigInt']['input']>;
  badDebtMantissa_gte?: InputMaybe<Scalars['BigInt']['input']>;
  badDebtMantissa_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  badDebtMantissa_lt?: InputMaybe<Scalars['BigInt']['input']>;
  badDebtMantissa_lte?: InputMaybe<Scalars['BigInt']['input']>;
  badDebtMantissa_not?: InputMaybe<Scalars['BigInt']['input']>;
  badDebtMantissa_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['Int']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['Int']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  borrowCapMantissa?: InputMaybe<Scalars['BigInt']['input']>;
  borrowCapMantissa_gt?: InputMaybe<Scalars['BigInt']['input']>;
  borrowCapMantissa_gte?: InputMaybe<Scalars['BigInt']['input']>;
  borrowCapMantissa_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  borrowCapMantissa_lt?: InputMaybe<Scalars['BigInt']['input']>;
  borrowCapMantissa_lte?: InputMaybe<Scalars['BigInt']['input']>;
  borrowCapMantissa_not?: InputMaybe<Scalars['BigInt']['input']>;
  borrowCapMantissa_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  borrowIndexMantissa?: InputMaybe<Scalars['BigInt']['input']>;
  borrowIndexMantissa_gt?: InputMaybe<Scalars['BigInt']['input']>;
  borrowIndexMantissa_gte?: InputMaybe<Scalars['BigInt']['input']>;
  borrowIndexMantissa_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  borrowIndexMantissa_lt?: InputMaybe<Scalars['BigInt']['input']>;
  borrowIndexMantissa_lte?: InputMaybe<Scalars['BigInt']['input']>;
  borrowIndexMantissa_not?: InputMaybe<Scalars['BigInt']['input']>;
  borrowIndexMantissa_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  borrowRateMantissa?: InputMaybe<Scalars['BigInt']['input']>;
  borrowRateMantissa_gt?: InputMaybe<Scalars['BigInt']['input']>;
  borrowRateMantissa_gte?: InputMaybe<Scalars['BigInt']['input']>;
  borrowRateMantissa_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  borrowRateMantissa_lt?: InputMaybe<Scalars['BigInt']['input']>;
  borrowRateMantissa_lte?: InputMaybe<Scalars['BigInt']['input']>;
  borrowRateMantissa_not?: InputMaybe<Scalars['BigInt']['input']>;
  borrowRateMantissa_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  borrowerCount?: InputMaybe<Scalars['BigInt']['input']>;
  borrowerCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  borrowerCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  borrowerCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  borrowerCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  borrowerCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  borrowerCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  borrowerCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cashMantissa?: InputMaybe<Scalars['BigInt']['input']>;
  cashMantissa_gt?: InputMaybe<Scalars['BigInt']['input']>;
  cashMantissa_gte?: InputMaybe<Scalars['BigInt']['input']>;
  cashMantissa_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cashMantissa_lt?: InputMaybe<Scalars['BigInt']['input']>;
  cashMantissa_lte?: InputMaybe<Scalars['BigInt']['input']>;
  cashMantissa_not?: InputMaybe<Scalars['BigInt']['input']>;
  cashMantissa_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  collateralFactorMantissa?: InputMaybe<Scalars['BigInt']['input']>;
  collateralFactorMantissa_gt?: InputMaybe<Scalars['BigInt']['input']>;
  collateralFactorMantissa_gte?: InputMaybe<Scalars['BigInt']['input']>;
  collateralFactorMantissa_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  collateralFactorMantissa_lt?: InputMaybe<Scalars['BigInt']['input']>;
  collateralFactorMantissa_lte?: InputMaybe<Scalars['BigInt']['input']>;
  collateralFactorMantissa_not?: InputMaybe<Scalars['BigInt']['input']>;
  collateralFactorMantissa_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  exchangeRateMantissa?: InputMaybe<Scalars['BigInt']['input']>;
  exchangeRateMantissa_gt?: InputMaybe<Scalars['BigInt']['input']>;
  exchangeRateMantissa_gte?: InputMaybe<Scalars['BigInt']['input']>;
  exchangeRateMantissa_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  exchangeRateMantissa_lt?: InputMaybe<Scalars['BigInt']['input']>;
  exchangeRateMantissa_lte?: InputMaybe<Scalars['BigInt']['input']>;
  exchangeRateMantissa_not?: InputMaybe<Scalars['BigInt']['input']>;
  exchangeRateMantissa_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  interestRateModelAddress?: InputMaybe<Scalars['Bytes']['input']>;
  interestRateModelAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  interestRateModelAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  interestRateModelAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  interestRateModelAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  interestRateModelAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  interestRateModelAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  interestRateModelAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  interestRateModelAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  interestRateModelAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  liquidationThresholdMantissa?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationThresholdMantissa_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationThresholdMantissa_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationThresholdMantissa_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidationThresholdMantissa_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationThresholdMantissa_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationThresholdMantissa_not?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationThresholdMantissa_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<Market_Filter>>>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  reserveFactorMantissa?: InputMaybe<Scalars['BigInt']['input']>;
  reserveFactorMantissa_gt?: InputMaybe<Scalars['BigInt']['input']>;
  reserveFactorMantissa_gte?: InputMaybe<Scalars['BigInt']['input']>;
  reserveFactorMantissa_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reserveFactorMantissa_lt?: InputMaybe<Scalars['BigInt']['input']>;
  reserveFactorMantissa_lte?: InputMaybe<Scalars['BigInt']['input']>;
  reserveFactorMantissa_not?: InputMaybe<Scalars['BigInt']['input']>;
  reserveFactorMantissa_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reservesMantissa?: InputMaybe<Scalars['BigInt']['input']>;
  reservesMantissa_gt?: InputMaybe<Scalars['BigInt']['input']>;
  reservesMantissa_gte?: InputMaybe<Scalars['BigInt']['input']>;
  reservesMantissa_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reservesMantissa_lt?: InputMaybe<Scalars['BigInt']['input']>;
  reservesMantissa_lte?: InputMaybe<Scalars['BigInt']['input']>;
  reservesMantissa_not?: InputMaybe<Scalars['BigInt']['input']>;
  reservesMantissa_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  supplierCount?: InputMaybe<Scalars['BigInt']['input']>;
  supplierCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  supplierCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  supplierCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  supplierCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  supplierCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  supplierCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  supplierCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  supplyCapMantissa?: InputMaybe<Scalars['BigInt']['input']>;
  supplyCapMantissa_gt?: InputMaybe<Scalars['BigInt']['input']>;
  supplyCapMantissa_gte?: InputMaybe<Scalars['BigInt']['input']>;
  supplyCapMantissa_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  supplyCapMantissa_lt?: InputMaybe<Scalars['BigInt']['input']>;
  supplyCapMantissa_lte?: InputMaybe<Scalars['BigInt']['input']>;
  supplyCapMantissa_not?: InputMaybe<Scalars['BigInt']['input']>;
  supplyCapMantissa_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  supplyRateMantissa?: InputMaybe<Scalars['BigInt']['input']>;
  supplyRateMantissa_gt?: InputMaybe<Scalars['BigInt']['input']>;
  supplyRateMantissa_gte?: InputMaybe<Scalars['BigInt']['input']>;
  supplyRateMantissa_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  supplyRateMantissa_lt?: InputMaybe<Scalars['BigInt']['input']>;
  supplyRateMantissa_lte?: InputMaybe<Scalars['BigInt']['input']>;
  supplyRateMantissa_not?: InputMaybe<Scalars['BigInt']['input']>;
  supplyRateMantissa_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  symbol_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_gt?: InputMaybe<Scalars['String']['input']>;
  symbol_gte?: InputMaybe<Scalars['String']['input']>;
  symbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_lt?: InputMaybe<Scalars['String']['input']>;
  symbol_lte?: InputMaybe<Scalars['String']['input']>;
  symbol_not?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  totalBorrowsMantissa?: InputMaybe<Scalars['BigInt']['input']>;
  totalBorrowsMantissa_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalBorrowsMantissa_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalBorrowsMantissa_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalBorrowsMantissa_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalBorrowsMantissa_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalBorrowsMantissa_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalBorrowsMantissa_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalSupplyMantissa?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupplyMantissa_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupplyMantissa_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupplyMantissa_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalSupplyMantissa_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupplyMantissa_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupplyMantissa_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupplyMantissa_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  underlyingAddress?: InputMaybe<Scalars['Bytes']['input']>;
  underlyingAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  underlyingAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  underlyingAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  underlyingAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  underlyingAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  underlyingAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  underlyingAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  underlyingAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  underlyingAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  underlyingDecimals?: InputMaybe<Scalars['Int']['input']>;
  underlyingDecimals_gt?: InputMaybe<Scalars['Int']['input']>;
  underlyingDecimals_gte?: InputMaybe<Scalars['Int']['input']>;
  underlyingDecimals_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  underlyingDecimals_lt?: InputMaybe<Scalars['Int']['input']>;
  underlyingDecimals_lte?: InputMaybe<Scalars['Int']['input']>;
  underlyingDecimals_not?: InputMaybe<Scalars['Int']['input']>;
  underlyingDecimals_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  underlyingName?: InputMaybe<Scalars['String']['input']>;
  underlyingName_contains?: InputMaybe<Scalars['String']['input']>;
  underlyingName_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  underlyingName_ends_with?: InputMaybe<Scalars['String']['input']>;
  underlyingName_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  underlyingName_gt?: InputMaybe<Scalars['String']['input']>;
  underlyingName_gte?: InputMaybe<Scalars['String']['input']>;
  underlyingName_in?: InputMaybe<Array<Scalars['String']['input']>>;
  underlyingName_lt?: InputMaybe<Scalars['String']['input']>;
  underlyingName_lte?: InputMaybe<Scalars['String']['input']>;
  underlyingName_not?: InputMaybe<Scalars['String']['input']>;
  underlyingName_not_contains?: InputMaybe<Scalars['String']['input']>;
  underlyingName_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  underlyingName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  underlyingName_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  underlyingName_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  underlyingName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  underlyingName_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  underlyingName_starts_with?: InputMaybe<Scalars['String']['input']>;
  underlyingName_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  underlyingPriceCents?: InputMaybe<Scalars['BigInt']['input']>;
  underlyingPriceCents_gt?: InputMaybe<Scalars['BigInt']['input']>;
  underlyingPriceCents_gte?: InputMaybe<Scalars['BigInt']['input']>;
  underlyingPriceCents_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  underlyingPriceCents_lt?: InputMaybe<Scalars['BigInt']['input']>;
  underlyingPriceCents_lte?: InputMaybe<Scalars['BigInt']['input']>;
  underlyingPriceCents_not?: InputMaybe<Scalars['BigInt']['input']>;
  underlyingPriceCents_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  underlyingSymbol?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_contains?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_gt?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_gte?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  underlyingSymbol_lt?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_lte?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_not?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  underlyingSymbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vTokenDecimals?: InputMaybe<Scalars['Int']['input']>;
  vTokenDecimals_gt?: InputMaybe<Scalars['Int']['input']>;
  vTokenDecimals_gte?: InputMaybe<Scalars['Int']['input']>;
  vTokenDecimals_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  vTokenDecimals_lt?: InputMaybe<Scalars['Int']['input']>;
  vTokenDecimals_lte?: InputMaybe<Scalars['Int']['input']>;
  vTokenDecimals_not?: InputMaybe<Scalars['Int']['input']>;
  vTokenDecimals_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export enum Market_OrderBy {
  AccessControlManagerAddress = 'accessControlManagerAddress',
  Accounts = 'accounts',
  AccrualBlockNumber = 'accrualBlockNumber',
  BadDebtMantissa = 'badDebtMantissa',
  BlockTimestamp = 'blockTimestamp',
  BorrowCapMantissa = 'borrowCapMantissa',
  BorrowIndexMantissa = 'borrowIndexMantissa',
  BorrowRateMantissa = 'borrowRateMantissa',
  BorrowerCount = 'borrowerCount',
  CashMantissa = 'cashMantissa',
  CollateralFactorMantissa = 'collateralFactorMantissa',
  ExchangeRateMantissa = 'exchangeRateMantissa',
  Id = 'id',
  InterestRateModelAddress = 'interestRateModelAddress',
  LiquidationThresholdMantissa = 'liquidationThresholdMantissa',
  Name = 'name',
  Pool = 'pool',
  PoolBlockPosted = 'pool__blockPosted',
  PoolCategory = 'pool__category',
  PoolCloseFactorMantissa = 'pool__closeFactorMantissa',
  PoolCreator = 'pool__creator',
  PoolDescription = 'pool__description',
  PoolId = 'pool__id',
  PoolLiquidationIncentiveMantissa = 'pool__liquidationIncentiveMantissa',
  PoolLogoUrl = 'pool__logoUrl',
  PoolMinLiquidatableCollateralMantissa = 'pool__minLiquidatableCollateralMantissa',
  PoolName = 'pool__name',
  PoolPriceOracleAddress = 'pool__priceOracleAddress',
  PoolTimestampPosted = 'pool__timestampPosted',
  ReserveFactorMantissa = 'reserveFactorMantissa',
  ReservesMantissa = 'reservesMantissa',
  SupplierCount = 'supplierCount',
  SupplyCapMantissa = 'supplyCapMantissa',
  SupplyRateMantissa = 'supplyRateMantissa',
  Symbol = 'symbol',
  TotalBorrowsMantissa = 'totalBorrowsMantissa',
  TotalSupplyMantissa = 'totalSupplyMantissa',
  UnderlyingAddress = 'underlyingAddress',
  UnderlyingDecimals = 'underlyingDecimals',
  UnderlyingName = 'underlyingName',
  UnderlyingPriceCents = 'underlyingPriceCents',
  UnderlyingSymbol = 'underlyingSymbol',
  VTokenDecimals = 'vTokenDecimals'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

/**
 * The Pool entity
 *
 */
export type Pool = {
  __typename?: 'Pool';
  /** Block where the market was created */
  blockPosted: Scalars['BigInt']['output'];
  /** Category that the pool belongs too */
  category: Scalars['String']['output'];
  /** Factor used to determine repayAmount for liquidating */
  closeFactorMantissa: Scalars['BigInt']['output'];
  /** Creator of the pool */
  creator: Scalars['Bytes']['output'];
  /** Description of the pool */
  description: Scalars['String']['output'];
  /** Comptroller of the pool */
  id: Scalars['ID']['output'];
  /** The percent bonus liquidators get for liquidating */
  liquidationIncentiveMantissa: Scalars['BigInt']['output'];
  /** Url for pool logo */
  logoUrl: Scalars['String']['output'];
  /** Markets associated to this pool */
  markets: Array<Market>;
  /** Min Liquidable Amount allowed */
  minLiquidatableCollateralMantissa: Scalars['BigInt']['output'];
  /** Name of the pool */
  name: Scalars['String']['output'];
  /** Address of price oracle the comptroller uses */
  priceOracleAddress: Scalars['Bytes']['output'];
  /** Reward distributors distributing rewards for markets in this pool */
  rewardsDistributors: Array<RewardsDistributor>;
  /** Timestamp of market creation */
  timestampPosted: Scalars['BigInt']['output'];
};


/**
 * The Pool entity
 *
 */
export type PoolMarketsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Market_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Market_Filter>;
};


/**
 * The Pool entity
 *
 */
export type PoolRewardsDistributorsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RewardsDistributor_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RewardsDistributor_Filter>;
};

export type PoolAction = {
  __typename?: 'PoolAction';
  action: PoolActionType;
  id: Scalars['ID']['output'];
  pauseState: Scalars['Boolean']['output'];
  pool: Scalars['Bytes']['output'];
};

export enum PoolActionType {
  Seize = 'Seize',
  Transfer = 'Transfer'
}

export type PoolAction_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  action?: InputMaybe<PoolActionType>;
  action_in?: InputMaybe<Array<PoolActionType>>;
  action_not?: InputMaybe<PoolActionType>;
  action_not_in?: InputMaybe<Array<PoolActionType>>;
  and?: InputMaybe<Array<InputMaybe<PoolAction_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<PoolAction_Filter>>>;
  pauseState?: InputMaybe<Scalars['Boolean']['input']>;
  pauseState_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  pauseState_not?: InputMaybe<Scalars['Boolean']['input']>;
  pauseState_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  pool?: InputMaybe<Scalars['Bytes']['input']>;
  pool_contains?: InputMaybe<Scalars['Bytes']['input']>;
  pool_gt?: InputMaybe<Scalars['Bytes']['input']>;
  pool_gte?: InputMaybe<Scalars['Bytes']['input']>;
  pool_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  pool_lt?: InputMaybe<Scalars['Bytes']['input']>;
  pool_lte?: InputMaybe<Scalars['Bytes']['input']>;
  pool_not?: InputMaybe<Scalars['Bytes']['input']>;
  pool_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  pool_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum PoolAction_OrderBy {
  Action = 'action',
  Id = 'id',
  PauseState = 'pauseState',
  Pool = 'pool'
}

/**
 * The Pool Registry entity manages pools and markets
 *
 */
export type PoolRegistry = {
  __typename?: 'PoolRegistry';
  /** ID is set to 1 */
  id: Scalars['ID']['output'];
};

export type PoolRegistry_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PoolRegistry_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<PoolRegistry_Filter>>>;
};

export enum PoolRegistry_OrderBy {
  Id = 'id'
}

export type Pool_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Pool_Filter>>>;
  blockPosted?: InputMaybe<Scalars['BigInt']['input']>;
  blockPosted_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockPosted_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockPosted_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockPosted_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockPosted_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockPosted_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockPosted_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  category?: InputMaybe<Scalars['String']['input']>;
  category_contains?: InputMaybe<Scalars['String']['input']>;
  category_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  category_ends_with?: InputMaybe<Scalars['String']['input']>;
  category_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  category_gt?: InputMaybe<Scalars['String']['input']>;
  category_gte?: InputMaybe<Scalars['String']['input']>;
  category_in?: InputMaybe<Array<Scalars['String']['input']>>;
  category_lt?: InputMaybe<Scalars['String']['input']>;
  category_lte?: InputMaybe<Scalars['String']['input']>;
  category_not?: InputMaybe<Scalars['String']['input']>;
  category_not_contains?: InputMaybe<Scalars['String']['input']>;
  category_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  category_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  category_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  category_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  category_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  category_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  category_starts_with?: InputMaybe<Scalars['String']['input']>;
  category_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  closeFactorMantissa?: InputMaybe<Scalars['BigInt']['input']>;
  closeFactorMantissa_gt?: InputMaybe<Scalars['BigInt']['input']>;
  closeFactorMantissa_gte?: InputMaybe<Scalars['BigInt']['input']>;
  closeFactorMantissa_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  closeFactorMantissa_lt?: InputMaybe<Scalars['BigInt']['input']>;
  closeFactorMantissa_lte?: InputMaybe<Scalars['BigInt']['input']>;
  closeFactorMantissa_not?: InputMaybe<Scalars['BigInt']['input']>;
  closeFactorMantissa_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  creator?: InputMaybe<Scalars['Bytes']['input']>;
  creator_contains?: InputMaybe<Scalars['Bytes']['input']>;
  creator_gt?: InputMaybe<Scalars['Bytes']['input']>;
  creator_gte?: InputMaybe<Scalars['Bytes']['input']>;
  creator_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  creator_lt?: InputMaybe<Scalars['Bytes']['input']>;
  creator_lte?: InputMaybe<Scalars['Bytes']['input']>;
  creator_not?: InputMaybe<Scalars['Bytes']['input']>;
  creator_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  creator_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_gt?: InputMaybe<Scalars['String']['input']>;
  description_gte?: InputMaybe<Scalars['String']['input']>;
  description_in?: InputMaybe<Array<Scalars['String']['input']>>;
  description_lt?: InputMaybe<Scalars['String']['input']>;
  description_lte?: InputMaybe<Scalars['String']['input']>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  description_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  description_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  liquidationIncentiveMantissa?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationIncentiveMantissa_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationIncentiveMantissa_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationIncentiveMantissa_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidationIncentiveMantissa_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationIncentiveMantissa_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationIncentiveMantissa_not?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationIncentiveMantissa_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logoUrl?: InputMaybe<Scalars['String']['input']>;
  logoUrl_contains?: InputMaybe<Scalars['String']['input']>;
  logoUrl_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  logoUrl_ends_with?: InputMaybe<Scalars['String']['input']>;
  logoUrl_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  logoUrl_gt?: InputMaybe<Scalars['String']['input']>;
  logoUrl_gte?: InputMaybe<Scalars['String']['input']>;
  logoUrl_in?: InputMaybe<Array<Scalars['String']['input']>>;
  logoUrl_lt?: InputMaybe<Scalars['String']['input']>;
  logoUrl_lte?: InputMaybe<Scalars['String']['input']>;
  logoUrl_not?: InputMaybe<Scalars['String']['input']>;
  logoUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  logoUrl_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  logoUrl_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  logoUrl_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  logoUrl_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  logoUrl_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  logoUrl_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  logoUrl_starts_with?: InputMaybe<Scalars['String']['input']>;
  logoUrl_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  markets_?: InputMaybe<Market_Filter>;
  minLiquidatableCollateralMantissa?: InputMaybe<Scalars['BigInt']['input']>;
  minLiquidatableCollateralMantissa_gt?: InputMaybe<Scalars['BigInt']['input']>;
  minLiquidatableCollateralMantissa_gte?: InputMaybe<Scalars['BigInt']['input']>;
  minLiquidatableCollateralMantissa_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minLiquidatableCollateralMantissa_lt?: InputMaybe<Scalars['BigInt']['input']>;
  minLiquidatableCollateralMantissa_lte?: InputMaybe<Scalars['BigInt']['input']>;
  minLiquidatableCollateralMantissa_not?: InputMaybe<Scalars['BigInt']['input']>;
  minLiquidatableCollateralMantissa_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<Pool_Filter>>>;
  priceOracleAddress?: InputMaybe<Scalars['Bytes']['input']>;
  priceOracleAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  priceOracleAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  priceOracleAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  priceOracleAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  priceOracleAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  priceOracleAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  priceOracleAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  priceOracleAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  priceOracleAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  rewardsDistributors_?: InputMaybe<RewardsDistributor_Filter>;
  timestampPosted?: InputMaybe<Scalars['BigInt']['input']>;
  timestampPosted_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestampPosted_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestampPosted_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestampPosted_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestampPosted_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestampPosted_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestampPosted_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum Pool_OrderBy {
  BlockPosted = 'blockPosted',
  Category = 'category',
  CloseFactorMantissa = 'closeFactorMantissa',
  Creator = 'creator',
  Description = 'description',
  Id = 'id',
  LiquidationIncentiveMantissa = 'liquidationIncentiveMantissa',
  LogoUrl = 'logoUrl',
  Markets = 'markets',
  MinLiquidatableCollateralMantissa = 'minLiquidatableCollateralMantissa',
  Name = 'name',
  PriceOracleAddress = 'priceOracleAddress',
  RewardsDistributors = 'rewardsDistributors',
  TimestampPosted = 'timestampPosted'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  account?: Maybe<Account>;
  accountVToken?: Maybe<AccountVToken>;
  accountVTokenBadDebt?: Maybe<AccountVTokenBadDebt>;
  accountVTokenBadDebts: Array<AccountVTokenBadDebt>;
  accountVTokenTransaction?: Maybe<AccountVTokenTransaction>;
  accountVTokenTransactions: Array<AccountVTokenTransaction>;
  accountVTokens: Array<AccountVToken>;
  accounts: Array<Account>;
  market?: Maybe<Market>;
  marketAction?: Maybe<MarketAction>;
  marketActions: Array<MarketAction>;
  markets: Array<Market>;
  pool?: Maybe<Pool>;
  poolAction?: Maybe<PoolAction>;
  poolActions: Array<PoolAction>;
  poolRegistries: Array<PoolRegistry>;
  poolRegistry?: Maybe<PoolRegistry>;
  pools: Array<Pool>;
  rewardSpeed?: Maybe<RewardSpeed>;
  rewardSpeeds: Array<RewardSpeed>;
  rewardsDistributor?: Maybe<RewardsDistributor>;
  rewardsDistributors: Array<RewardsDistributor>;
  transaction?: Maybe<Transaction>;
  transactionParams?: Maybe<TransactionParams>;
  transactionParams_collection: Array<TransactionParams>;
  transactions: Array<Transaction>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryAccountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAccountVTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAccountVTokenBadDebtArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAccountVTokenBadDebtsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccountVTokenBadDebt_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AccountVTokenBadDebt_Filter>;
};


export type QueryAccountVTokenTransactionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAccountVTokenTransactionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccountVTokenTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AccountVTokenTransaction_Filter>;
};


export type QueryAccountVTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccountVToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AccountVToken_Filter>;
};


export type QueryAccountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Account_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Account_Filter>;
};


export type QueryMarketArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMarketActionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMarketActionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MarketAction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MarketAction_Filter>;
};


export type QueryMarketsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Market_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Market_Filter>;
};


export type QueryPoolArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPoolActionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPoolActionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolAction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolAction_Filter>;
};


export type QueryPoolRegistriesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolRegistry_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolRegistry_Filter>;
};


export type QueryPoolRegistryArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPoolsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pool_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Pool_Filter>;
};


export type QueryRewardSpeedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRewardSpeedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RewardSpeed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RewardSpeed_Filter>;
};


export type QueryRewardsDistributorArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRewardsDistributorsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RewardsDistributor_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RewardsDistributor_Filter>;
};


export type QueryTransactionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTransactionParamsArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTransactionParams_CollectionArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TransactionParams_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TransactionParams_Filter>;
};


export type QueryTransactionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Transaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Transaction_Filter>;
};

/**
 * A interface for rewards distributor that distribute rewards to isolated pools
 *
 */
export type RewardSpeed = {
  __typename?: 'RewardSpeed';
  /** Distribution rate for borrowers */
  borrowSpeedPerBlockMantissa?: Maybe<Scalars['BigInt']['output']>;
  /** ID created from the reward distributor and market this speed applies to */
  id: Scalars['ID']['output'];
  /** Address of the market this speed applies to */
  market: Market;
  /** Address of rewards distributor */
  rewardsDistributor: RewardsDistributor;
  /** Distribution rate for suppliers */
  supplySpeedPerBlockMantissa?: Maybe<Scalars['BigInt']['output']>;
};

export type RewardSpeed_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RewardSpeed_Filter>>>;
  borrowSpeedPerBlockMantissa?: InputMaybe<Scalars['BigInt']['input']>;
  borrowSpeedPerBlockMantissa_gt?: InputMaybe<Scalars['BigInt']['input']>;
  borrowSpeedPerBlockMantissa_gte?: InputMaybe<Scalars['BigInt']['input']>;
  borrowSpeedPerBlockMantissa_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  borrowSpeedPerBlockMantissa_lt?: InputMaybe<Scalars['BigInt']['input']>;
  borrowSpeedPerBlockMantissa_lte?: InputMaybe<Scalars['BigInt']['input']>;
  borrowSpeedPerBlockMantissa_not?: InputMaybe<Scalars['BigInt']['input']>;
  borrowSpeedPerBlockMantissa_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  market?: InputMaybe<Scalars['String']['input']>;
  market_?: InputMaybe<Market_Filter>;
  market_contains?: InputMaybe<Scalars['String']['input']>;
  market_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  market_ends_with?: InputMaybe<Scalars['String']['input']>;
  market_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_gt?: InputMaybe<Scalars['String']['input']>;
  market_gte?: InputMaybe<Scalars['String']['input']>;
  market_in?: InputMaybe<Array<Scalars['String']['input']>>;
  market_lt?: InputMaybe<Scalars['String']['input']>;
  market_lte?: InputMaybe<Scalars['String']['input']>;
  market_not?: InputMaybe<Scalars['String']['input']>;
  market_not_contains?: InputMaybe<Scalars['String']['input']>;
  market_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  market_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  market_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  market_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  market_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_starts_with?: InputMaybe<Scalars['String']['input']>;
  market_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<RewardSpeed_Filter>>>;
  rewardsDistributor?: InputMaybe<Scalars['String']['input']>;
  rewardsDistributor_?: InputMaybe<RewardsDistributor_Filter>;
  rewardsDistributor_contains?: InputMaybe<Scalars['String']['input']>;
  rewardsDistributor_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  rewardsDistributor_ends_with?: InputMaybe<Scalars['String']['input']>;
  rewardsDistributor_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  rewardsDistributor_gt?: InputMaybe<Scalars['String']['input']>;
  rewardsDistributor_gte?: InputMaybe<Scalars['String']['input']>;
  rewardsDistributor_in?: InputMaybe<Array<Scalars['String']['input']>>;
  rewardsDistributor_lt?: InputMaybe<Scalars['String']['input']>;
  rewardsDistributor_lte?: InputMaybe<Scalars['String']['input']>;
  rewardsDistributor_not?: InputMaybe<Scalars['String']['input']>;
  rewardsDistributor_not_contains?: InputMaybe<Scalars['String']['input']>;
  rewardsDistributor_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  rewardsDistributor_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  rewardsDistributor_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  rewardsDistributor_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  rewardsDistributor_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  rewardsDistributor_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  rewardsDistributor_starts_with?: InputMaybe<Scalars['String']['input']>;
  rewardsDistributor_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  supplySpeedPerBlockMantissa?: InputMaybe<Scalars['BigInt']['input']>;
  supplySpeedPerBlockMantissa_gt?: InputMaybe<Scalars['BigInt']['input']>;
  supplySpeedPerBlockMantissa_gte?: InputMaybe<Scalars['BigInt']['input']>;
  supplySpeedPerBlockMantissa_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  supplySpeedPerBlockMantissa_lt?: InputMaybe<Scalars['BigInt']['input']>;
  supplySpeedPerBlockMantissa_lte?: InputMaybe<Scalars['BigInt']['input']>;
  supplySpeedPerBlockMantissa_not?: InputMaybe<Scalars['BigInt']['input']>;
  supplySpeedPerBlockMantissa_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum RewardSpeed_OrderBy {
  BorrowSpeedPerBlockMantissa = 'borrowSpeedPerBlockMantissa',
  Id = 'id',
  Market = 'market',
  MarketAccessControlManagerAddress = 'market__accessControlManagerAddress',
  MarketAccrualBlockNumber = 'market__accrualBlockNumber',
  MarketBadDebtMantissa = 'market__badDebtMantissa',
  MarketBlockTimestamp = 'market__blockTimestamp',
  MarketBorrowCapMantissa = 'market__borrowCapMantissa',
  MarketBorrowIndexMantissa = 'market__borrowIndexMantissa',
  MarketBorrowRateMantissa = 'market__borrowRateMantissa',
  MarketBorrowerCount = 'market__borrowerCount',
  MarketCashMantissa = 'market__cashMantissa',
  MarketCollateralFactorMantissa = 'market__collateralFactorMantissa',
  MarketExchangeRateMantissa = 'market__exchangeRateMantissa',
  MarketId = 'market__id',
  MarketInterestRateModelAddress = 'market__interestRateModelAddress',
  MarketLiquidationThresholdMantissa = 'market__liquidationThresholdMantissa',
  MarketName = 'market__name',
  MarketReserveFactorMantissa = 'market__reserveFactorMantissa',
  MarketReservesMantissa = 'market__reservesMantissa',
  MarketSupplierCount = 'market__supplierCount',
  MarketSupplyCapMantissa = 'market__supplyCapMantissa',
  MarketSupplyRateMantissa = 'market__supplyRateMantissa',
  MarketSymbol = 'market__symbol',
  MarketTotalBorrowsMantissa = 'market__totalBorrowsMantissa',
  MarketTotalSupplyMantissa = 'market__totalSupplyMantissa',
  MarketUnderlyingAddress = 'market__underlyingAddress',
  MarketUnderlyingDecimals = 'market__underlyingDecimals',
  MarketUnderlyingName = 'market__underlyingName',
  MarketUnderlyingPriceCents = 'market__underlyingPriceCents',
  MarketUnderlyingSymbol = 'market__underlyingSymbol',
  MarketVTokenDecimals = 'market__vTokenDecimals',
  RewardsDistributor = 'rewardsDistributor',
  RewardsDistributorId = 'rewardsDistributor__id',
  RewardsDistributorReward = 'rewardsDistributor__reward',
  SupplySpeedPerBlockMantissa = 'supplySpeedPerBlockMantissa'
}

/**
 * An interface for rewards distributor that distribute rewards to isolated pools
 *
 */
export type RewardsDistributor = {
  __typename?: 'RewardsDistributor';
  /** Address of the rewards distributor */
  id: Scalars['ID']['output'];
  /** Address of the pool */
  pool: Pool;
  /** Address of the reward distributed */
  reward: Scalars['Bytes']['output'];
  /** Distribution rate for suppliers */
  rewardSpeeds: Array<RewardSpeed>;
};


/**
 * An interface for rewards distributor that distribute rewards to isolated pools
 *
 */
export type RewardsDistributorRewardSpeedsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RewardSpeed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RewardSpeed_Filter>;
};

export type RewardsDistributor_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RewardsDistributor_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<RewardsDistributor_Filter>>>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  reward?: InputMaybe<Scalars['Bytes']['input']>;
  rewardSpeeds_?: InputMaybe<RewardSpeed_Filter>;
  reward_contains?: InputMaybe<Scalars['Bytes']['input']>;
  reward_gt?: InputMaybe<Scalars['Bytes']['input']>;
  reward_gte?: InputMaybe<Scalars['Bytes']['input']>;
  reward_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  reward_lt?: InputMaybe<Scalars['Bytes']['input']>;
  reward_lte?: InputMaybe<Scalars['Bytes']['input']>;
  reward_not?: InputMaybe<Scalars['Bytes']['input']>;
  reward_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  reward_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum RewardsDistributor_OrderBy {
  Id = 'id',
  Pool = 'pool',
  PoolBlockPosted = 'pool__blockPosted',
  PoolCategory = 'pool__category',
  PoolCloseFactorMantissa = 'pool__closeFactorMantissa',
  PoolCreator = 'pool__creator',
  PoolDescription = 'pool__description',
  PoolId = 'pool__id',
  PoolLiquidationIncentiveMantissa = 'pool__liquidationIncentiveMantissa',
  PoolLogoUrl = 'pool__logoUrl',
  PoolMinLiquidatableCollateralMantissa = 'pool__minLiquidatableCollateralMantissa',
  PoolName = 'pool__name',
  PoolPriceOracleAddress = 'pool__priceOracleAddress',
  PoolTimestampPosted = 'pool__timestampPosted',
  Reward = 'reward',
  RewardSpeeds = 'rewardSpeeds'
}

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  account?: Maybe<Account>;
  accountVToken?: Maybe<AccountVToken>;
  accountVTokenBadDebt?: Maybe<AccountVTokenBadDebt>;
  accountVTokenBadDebts: Array<AccountVTokenBadDebt>;
  accountVTokenTransaction?: Maybe<AccountVTokenTransaction>;
  accountVTokenTransactions: Array<AccountVTokenTransaction>;
  accountVTokens: Array<AccountVToken>;
  accounts: Array<Account>;
  market?: Maybe<Market>;
  marketAction?: Maybe<MarketAction>;
  marketActions: Array<MarketAction>;
  markets: Array<Market>;
  pool?: Maybe<Pool>;
  poolAction?: Maybe<PoolAction>;
  poolActions: Array<PoolAction>;
  poolRegistries: Array<PoolRegistry>;
  poolRegistry?: Maybe<PoolRegistry>;
  pools: Array<Pool>;
  rewardSpeed?: Maybe<RewardSpeed>;
  rewardSpeeds: Array<RewardSpeed>;
  rewardsDistributor?: Maybe<RewardsDistributor>;
  rewardsDistributors: Array<RewardsDistributor>;
  transaction?: Maybe<Transaction>;
  transactionParams?: Maybe<TransactionParams>;
  transactionParams_collection: Array<TransactionParams>;
  transactions: Array<Transaction>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionAccountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAccountVTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAccountVTokenBadDebtArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAccountVTokenBadDebtsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccountVTokenBadDebt_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AccountVTokenBadDebt_Filter>;
};


export type SubscriptionAccountVTokenTransactionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAccountVTokenTransactionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccountVTokenTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AccountVTokenTransaction_Filter>;
};


export type SubscriptionAccountVTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccountVToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AccountVToken_Filter>;
};


export type SubscriptionAccountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Account_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Account_Filter>;
};


export type SubscriptionMarketArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMarketActionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMarketActionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MarketAction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MarketAction_Filter>;
};


export type SubscriptionMarketsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Market_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Market_Filter>;
};


export type SubscriptionPoolArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPoolActionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPoolActionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolAction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolAction_Filter>;
};


export type SubscriptionPoolRegistriesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolRegistry_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolRegistry_Filter>;
};


export type SubscriptionPoolRegistryArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPoolsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pool_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Pool_Filter>;
};


export type SubscriptionRewardSpeedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRewardSpeedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RewardSpeed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RewardSpeed_Filter>;
};


export type SubscriptionRewardsDistributorArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRewardsDistributorsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RewardsDistributor_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RewardsDistributor_Filter>;
};


export type SubscriptionTransactionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTransactionParamsArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTransactionParams_CollectionArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TransactionParams_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TransactionParams_Filter>;
};


export type SubscriptionTransactionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Transaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Transaction_Filter>;
};

/**
 * An interface for a transfer of any vToken. TransferEvent, MintEvent,
 * RedeemEvent, and LiquidationEvent all use this interface
 *
 */
export type Transaction = {
  __typename?: 'Transaction';
  /** count of vTokens transferred */
  amount: Scalars['BigDecimal']['output'];
  /** Block number */
  blockNumber: Scalars['Int']['output'];
  /** Block time */
  blockTime: Scalars['Int']['output'];
  /** The account that sent the tokens, usually vToken */
  from: Scalars['Bytes']['output'];
  /** Transaction hash concatenated with log index */
  id: Scalars['ID']['output'];
  /** Optional parameters for the transaction */
  params?: Maybe<TransactionParams>;
  /** Account that received tokens */
  to: Scalars['Bytes']['output'];
  /** enum of event type */
  type: EventType;
};

export enum TransactionParamKey {
  AccountBorrows = 'ACCOUNT_BORROWS',
  UnderlyingAmount = 'UNDERLYING_AMOUNT',
  UnderlyingRepayAmount = 'UNDERLYING_REPAY_AMOUNT'
}

/**
 * TransactionParams hold extra information about a Transaction depending on the type of the transacton
 *
 */
export type TransactionParams = {
  __typename?: 'TransactionParams';
  /** Transaction hash concatenated with log index */
  id: Scalars['ID']['output'];
  /** Name of the field */
  key: TransactionParamKey;
  /** Value of the field */
  value: Scalars['String']['output'];
};

export type TransactionParams_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TransactionParams_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  key?: InputMaybe<TransactionParamKey>;
  key_in?: InputMaybe<Array<TransactionParamKey>>;
  key_not?: InputMaybe<TransactionParamKey>;
  key_not_in?: InputMaybe<Array<TransactionParamKey>>;
  or?: InputMaybe<Array<InputMaybe<TransactionParams_Filter>>>;
  value?: InputMaybe<Scalars['String']['input']>;
  value_contains?: InputMaybe<Scalars['String']['input']>;
  value_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  value_ends_with?: InputMaybe<Scalars['String']['input']>;
  value_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  value_gt?: InputMaybe<Scalars['String']['input']>;
  value_gte?: InputMaybe<Scalars['String']['input']>;
  value_in?: InputMaybe<Array<Scalars['String']['input']>>;
  value_lt?: InputMaybe<Scalars['String']['input']>;
  value_lte?: InputMaybe<Scalars['String']['input']>;
  value_not?: InputMaybe<Scalars['String']['input']>;
  value_not_contains?: InputMaybe<Scalars['String']['input']>;
  value_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  value_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  value_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  value_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  value_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  value_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  value_starts_with?: InputMaybe<Scalars['String']['input']>;
  value_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum TransactionParams_OrderBy {
  Id = 'id',
  Key = 'key',
  Value = 'value'
}

export type Transaction_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Transaction_Filter>>>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockTime?: InputMaybe<Scalars['Int']['input']>;
  blockTime_gt?: InputMaybe<Scalars['Int']['input']>;
  blockTime_gte?: InputMaybe<Scalars['Int']['input']>;
  blockTime_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockTime_lt?: InputMaybe<Scalars['Int']['input']>;
  blockTime_lte?: InputMaybe<Scalars['Int']['input']>;
  blockTime_not?: InputMaybe<Scalars['Int']['input']>;
  blockTime_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  from?: InputMaybe<Scalars['Bytes']['input']>;
  from_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_gt?: InputMaybe<Scalars['Bytes']['input']>;
  from_gte?: InputMaybe<Scalars['Bytes']['input']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  from_lt?: InputMaybe<Scalars['Bytes']['input']>;
  from_lte?: InputMaybe<Scalars['Bytes']['input']>;
  from_not?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Transaction_Filter>>>;
  params?: InputMaybe<Scalars['String']['input']>;
  params_?: InputMaybe<TransactionParams_Filter>;
  params_contains?: InputMaybe<Scalars['String']['input']>;
  params_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  params_ends_with?: InputMaybe<Scalars['String']['input']>;
  params_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  params_gt?: InputMaybe<Scalars['String']['input']>;
  params_gte?: InputMaybe<Scalars['String']['input']>;
  params_in?: InputMaybe<Array<Scalars['String']['input']>>;
  params_lt?: InputMaybe<Scalars['String']['input']>;
  params_lte?: InputMaybe<Scalars['String']['input']>;
  params_not?: InputMaybe<Scalars['String']['input']>;
  params_not_contains?: InputMaybe<Scalars['String']['input']>;
  params_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  params_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  params_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  params_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  params_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  params_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  params_starts_with?: InputMaybe<Scalars['String']['input']>;
  params_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['Bytes']['input']>;
  to_contains?: InputMaybe<Scalars['Bytes']['input']>;
  to_gt?: InputMaybe<Scalars['Bytes']['input']>;
  to_gte?: InputMaybe<Scalars['Bytes']['input']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  to_lt?: InputMaybe<Scalars['Bytes']['input']>;
  to_lte?: InputMaybe<Scalars['Bytes']['input']>;
  to_not?: InputMaybe<Scalars['Bytes']['input']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  type?: InputMaybe<EventType>;
  type_in?: InputMaybe<Array<EventType>>;
  type_not?: InputMaybe<EventType>;
  type_not_in?: InputMaybe<Array<EventType>>;
};

export enum Transaction_OrderBy {
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  BlockTime = 'blockTime',
  From = 'from',
  Id = 'id',
  Params = 'params',
  ParamsId = 'params__id',
  ParamsKey = 'params__key',
  ParamsValue = 'params__value',
  To = 'to',
  Type = 'type'
}

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars['Bytes']['output']>;
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}


export const IsolatedPoolParticipantsCountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"IsolatedPoolParticipantsCount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pools"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"markets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"supplierCount"}},{"kind":"Field","name":{"kind":"Name","value":"borrowerCount"}}]}}]}}]}}]} as unknown as DocumentNode<IsolatedPoolParticipantsCountQuery, IsolatedPoolParticipantsCountQueryVariables>;
export type IsolatedPoolParticipantsCountQueryVariables = Exact<{ [key: string]: never; }>;


export type IsolatedPoolParticipantsCountQuery = { __typename?: 'Query', pools: Array<{ __typename?: 'Pool', id: string, markets: Array<{ __typename?: 'Market', id: string, supplierCount: any, borrowerCount: any }> }> };
