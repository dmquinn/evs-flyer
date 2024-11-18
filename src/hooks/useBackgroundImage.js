import { useState } from "react";

const useBackgroundImage = () => {
  const [backgroundPosition, setBackgroundPosition] = useState({
    x: 50,
    y: 50,
  });
  const [isDragging, setIsDragging] = useState(false);
  const [startDragPosition, setStartDragPosition] = useState({ x: 0, y: 0 });

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
