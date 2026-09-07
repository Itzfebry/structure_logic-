import { motion } from "framer-motion";

interface SparkleEffectProps {
  active: boolean;
}

export const SparkleEffect = ({ active }: SparkleEffectProps) => {
  if (!active) return null;
  return (
    <div className="sparkle-burst" aria-hidden="true">
      {Array.from({ length: 8 }, (_, index) => (
        <motion.span
          key={index}
          className="burst-spark"
          initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
          animate={{ opacity: [1, 0], x: Math.cos((index * Math.PI) / 4) * 84, y: Math.sin((index * Math.PI) / 4) * 84, scale: [1, 0.4] }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          ✦
        </motion.span>
      ))}
    </div>
  );
};
