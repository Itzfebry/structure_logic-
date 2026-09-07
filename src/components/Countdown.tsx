import { motion } from "framer-motion";
import { useCountdown } from "../hooks/useCountdown";

interface CountdownProps { targetDate: number; }

export const Countdown = ({ targetDate }: CountdownProps) => {
  const countdown = useCountdown(targetDate);
  const units = [
    [countdown.days, "days"],
    [countdown.hours, "hours"],
    [countdown.minutes, "minutes"],
    [countdown.seconds, "seconds"],
  ] as const;

  return (
    <div className="countdown-wrap">
      <p className="section-note">Counting down to our special moment</p>
      {countdown.isComplete ? <p className="countdown-complete">The moment is here! ♡</p> : <div className="countdown-grid">{units.map(([value, label], index) => <motion.div className="countdown-cell" key={label} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}><strong>{String(value).padStart(2, "0")}</strong><span>{label}</span></motion.div>)}</div>}
    </div>
  );
};
