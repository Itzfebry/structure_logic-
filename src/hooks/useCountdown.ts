import { useEffect, useState } from "react";

export interface CountdownValue {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isComplete: boolean;
}

const getCountdown = (targetDate: number): CountdownValue => {
  const difference = Math.max(0, targetDate - Date.now());
  const totalSeconds = Math.floor(difference / 1000);

  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
    isComplete: difference === 0,
  };
};

export const useCountdown = (targetDate: number): CountdownValue => {
  const [countdown, setCountdown] = useState(() => getCountdown(targetDate));

  useEffect(() => {
    const timer = window.setInterval(() => setCountdown(getCountdown(targetDate)), 1000);
    return () => window.clearInterval(timer);
  }, [targetDate]);

  return countdown;
};
