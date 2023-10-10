'use client';

import AnimatedHeart from 'react-animated-heart';

export const Heart = ({
  liked,
  onClick,
}: {
  readonly liked: boolean;
  readonly onClick: () => void;
}) => {
  return (
    <div>
      <AnimatedHeart
        isClick={liked}
        onClick={onClick}
      />
    </div>
  );
};
