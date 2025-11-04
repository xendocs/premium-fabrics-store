import { useState, useRef, MouseEvent } from 'react';

export function useImageZoom() {
  const [zoom, setZoom] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const imgRef = useRef<HTMLImageElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLImageElement>) => {
    if (!imgRef.current || !zoom) return;

    const rect = imgRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setPosition({ x, y });
  };

  const handleMouseEnter = () => setZoom(true);
  const handleMouseLeave = () => setZoom(false);

  return {
    zoom,
    position,
    imgRef,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
  };
}

