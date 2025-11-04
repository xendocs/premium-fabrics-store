import React from 'react';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className = '',
  variant = 'rectangular',
}) => {
  const variantClasses = {
    text: 'rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-2xl',
  };

  return (
    <div
      className={`
        animate-shimmer bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200
        bg-[length:1000px_100%] ${variantClasses[variant]}
        ${className}
      `}
    />
  );
};

