import type { Token } from 'types';
import { cn } from 'utilities';

export interface TokenIconProps {
  token: Token;
  className?: string;
}

export const TokenIcon: React.FC<TokenIconProps> = ({ className, token }) => (
  <img src={token.asset.includes('xvs.svg') ? token.asset.replace('xvs.svg', 'lela.png') : token.asset } alt={token.symbol} className={cn('h-6 w-6', className)} />
);
