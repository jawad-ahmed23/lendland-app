import BigNumber from 'bignumber.js';
import { useMemo } from 'react';

import { MAXIMUM_PRICE_IMPACT_THRESHOLD_PERCENTAGE } from 'constants/swap';
import type { Swap, SwapError } from 'types';

import { getSwapToTokenAmountReceivedTokens } from '../../getSwapToTokenAmountReceived';
import type { FormError, FormValues } from './types';

interface UseFormValidationInput {
  formValues: FormValues;
  fromTokenUserWalletBalanceTokens?: BigNumber;
  fromTokenUserBorrowBalanceTokens?: BigNumber;
  fromTokenWalletSpendingLimitTokens?: BigNumber;
  isFromTokenApproved?: boolean;
  isUsingSwap: boolean;
  swap?: Swap;
  swapError?: SwapError;
}

interface UseFormValidationOutput {
  isFormValid: boolean;
  formError?: FormError;
}

const useFormValidation = ({
  swap,
  swapError,
  formValues,
  isFromTokenApproved,
  isUsingSwap,
  fromTokenUserWalletBalanceTokens,
  fromTokenUserBorrowBalanceTokens,
  fromTokenWalletSpendingLimitTokens,
}: UseFormValidationInput): UseFormValidationOutput => {
  const formError: FormError | undefined = useMemo(() => {
    const swapErrorMapping: {
      [key: string]: FormError;
    } = {
      INSUFFICIENT_LIQUIDITY: 'SWAP_INSUFFICIENT_LIQUIDITY',
      WRAPPING_UNSUPPORTED: 'SWAP_WRAPPING_UNSUPPORTED',
      UNWRAPPING_UNSUPPORTED: 'SWAP_UNWRAPPING_UNSUPPORTED',
    };

    if (isUsingSwap && swapError && swapError in swapErrorMapping) {
      return swapErrorMapping[swapError];
    }

    const fromTokenAmountTokens = formValues.amountTokens
      ? new BigNumber(formValues.amountTokens)
      : undefined;

    if (!fromTokenAmountTokens || fromTokenAmountTokens.isLessThanOrEqualTo(0)) {
      return 'INVALID_TOKEN_AMOUNT';
    }

    if (
      fromTokenUserWalletBalanceTokens &&
      fromTokenAmountTokens.isGreaterThan(fromTokenUserWalletBalanceTokens)
    ) {
      return 'HIGHER_THAN_WALLET_BALANCE';
    }

    const toTokensAmountRepaidTokens = isUsingSwap
      ? getSwapToTokenAmountReceivedTokens(swap).swapToTokenAmountReceivedTokens
      : fromTokenAmountTokens;

    if (
      toTokensAmountRepaidTokens &&
      fromTokenUserBorrowBalanceTokens &&
      toTokensAmountRepaidTokens.isGreaterThan(fromTokenUserBorrowBalanceTokens)
    ) {
      return 'HIGHER_THAN_REPAY_BALANCE';
    }

    if (
      isFromTokenApproved &&
      fromTokenWalletSpendingLimitTokens &&
      fromTokenAmountTokens.isGreaterThan(fromTokenWalletSpendingLimitTokens)
    ) {
      return 'HIGHER_THAN_WALLET_SPENDING_LIMIT';
    }

    if (
      !!swap?.priceImpactPercentage &&
      swap?.priceImpactPercentage >= MAXIMUM_PRICE_IMPACT_THRESHOLD_PERCENTAGE
    ) {
      return 'PRICE_IMPACT_TOO_HIGH';
    }
  }, [
    fromTokenUserBorrowBalanceTokens,
    fromTokenUserWalletBalanceTokens,
    fromTokenWalletSpendingLimitTokens,
    isFromTokenApproved,
    isUsingSwap,
    formValues.amountTokens,
    swap,
    swapError,
  ]);

  return {
    isFormValid: !formError,
    formError,
  };
};

export default useFormValidation;
