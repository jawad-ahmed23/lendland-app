/** @jsxImportSource @emotion/react */
import { LabeledInlineContent } from 'components';
import { useTranslation } from 'libs/translations';

import { MarketCard } from '../MarketCard';
import type { Stat } from '../types';
import { useStyles } from './styles';

export interface MarketInfoProps {
  stats: Stat[];
  testId?: string;
}

const MarketInfo: React.FC<MarketInfoProps> = ({ stats, testId }) => {
  const { t } = useTranslation();
  const styles = useStyles();

  return (
    <MarketCard title={t('asset.marketInfo.title')} testId={testId}>
      <ul css={styles.itemList}>
        {stats.map(stat => (
          <li css={styles.item} key={`market-info-stat-${stat.label}`}>
            <LabeledInlineContent label={stat.label.replace("XVS", "LELA")}>
              {/* <span css={styles.value}>{stat.value}</span> */}
              <span css={styles.value}>{stat.value}</span>
            </LabeledInlineContent>
          </li>
        ))}
      </ul>
    </MarketCard>
  );
};

export default MarketInfo;
