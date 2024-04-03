/** @jsxImportSource @emotion/react */
import type { ReactElement } from 'react';

import { QuinaryButton } from '../Button';
import { useStyles } from './styles';

export interface Tag {
  content: string | number | ReactElement;
  id: number | string;
}

export interface TagGroupProps {
  tags: Tag[];
  // activeTagIndex: number;
  activeTag: any;
  // onTagClick: (newIndex: number) => void;
  onTagClick: (content: any) => void;
  className?: string;
}

export const TagGroup = ({ tags, activeTag, onTagClick, className }: TagGroupProps) => {
  const styles = useStyles();

  return (
    <div css={styles.container} className={className}>
      {tags.map((tag, index) => (
        <QuinaryButton
          active={tag.content === activeTag}
          key={`tag-group-tag-${tag.id}`}
          onClick={() => onTagClick(tag.content)}
          css={styles.tag}
        >
          {tag.content}
        </QuinaryButton>
      ))}
    </div>
  );
};
