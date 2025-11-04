'use client';

import React from 'react';

interface BackgroundImageProps {
  src?: string;
  alt?: string;
  overlay?: boolean;
  overlayOpacity?: number;
  overlayColor?: string;
  className?: string;
}

export const BackgroundImage: React.FC<BackgroundImageProps> = ({
  src = '/images/backgrounds/hero-bg.jpg',
  alt = 'Background',
  overlay = false,
  overlayOpacity = 0,
  overlayColor = 'rgba(0, 0, 0, 0)',
  className = '',
}) => {
  return (
    <div
      className={`fixed inset-0 -z-10 ${className}`}
      style={{
        width: '100vw',
        height: '100vh',
        minHeight: '100vh',
        minWidth: '100vw',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundColor: '#1a1a2e', // Fallback dark color
      }}
    >
      {overlay && (
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: overlayColor,
            opacity: overlayOpacity,
          }}
        />
      )}
    </div>
  );
};

