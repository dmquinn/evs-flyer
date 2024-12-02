import { useState } from "react";

interface UseBackgroundImageReturn {
  backgroundPosition: { x: number; y: number };
  isDragging: boolean;
  handleMouseDown: (e: MouseEvent) => void;
  handleMouseMove: (e: MouseEvent) => void;
  handleMouseUp: (e: MouseEvent) => void;
}
const useBackgroundImage = (): UseBackgroundImageReturn => {
  const [backgroundPosition, setBackgroundPosition] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startDragPosition, setStartDragPosition] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setStartDragPosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      const deltaX = event.clientX - startDragPosition.x;
      const deltaY = event.clientY - startDragPosition.y;

      setBackgroundPosition((prevPosition) => ({
        x: Math.max(0, Math.min(100, prevPosition.x + deltaX / 5)),
        y: Math.max(0, Math.min(100, prevPosition.y + deltaY / 5)),
      }));

      setStartDragPosition({ x: event.clientX, y: event.clientY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };
  return {
    backgroundPosition,
    isDragging,
    handleMouseDown,
    handleMouseUp,
    handleMouseMove,
  };
};

export default useBackgroundImage;
