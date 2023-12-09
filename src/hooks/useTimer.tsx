import { useEffect, useState } from "react";

export const useTimer = () => {
  const [currentTimeLeft, setCurrentTimeLeft] = useState(60);
  const [isActive, setIsActive] = useState(false);

  const start = () => {
    setIsActive(true);
  };

  const pause = () => {
    setIsActive(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isActive) {
        return;
      }
      setCurrentTimeLeft((currentTimeLeft) => {
        return currentTimeLeft > 0 ? currentTimeLeft - 1 : currentTimeLeft;
      });
    }, 1000);

    return () => {
      // This code runs when the component unmounts
      clearInterval(interval);
    };
  }, [isActive]);

  return {
    currentTimeLeft,
    start,
    pause,
  };
};
