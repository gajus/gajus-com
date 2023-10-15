'use client';

import { Heart } from './Heart';
import { like } from '@/actions/like';
import { unlike } from '@/actions/unlike';
import { Center } from '@/styles';
import { useCallback, useState, useTransition } from 'react';

export const BlogPostReactions = ({
  liked: initialLiked,
  slug,
}: {
  readonly liked: boolean;
  readonly slug: string;
}) => {
  const [liked, setLiked] = useState<boolean>(initialLiked);
  const [, startTransition] = useTransition();

  const onClick = useCallback(() => {
    startTransition(async () => {
      if (liked) {
        await unlike({ slug });
      } else {
        await like({ slug });
      }

      setLiked(!liked);
    });
  }, [liked, slug]);

  return (
    <Center>
      <Heart
        liked={liked}
        onClick={onClick}
      />
    </Center>
  );
};
