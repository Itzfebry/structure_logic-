import { motion } from "framer-motion";

const stars = [
  { left: "8%", top: "13%", delay: 0 },
  { left: "87%", top: "18%", delay: 0.8 },
  { left: "20%", top: "72%", delay: 1.3 },
  { left: "78%", top: "64%", delay: 0.4 },
  { left: "52%", top: "9%", delay: 1.8 },
];

export const FloatingBackground = () => (
  <div className="background-art" aria-hidden="true">
    <div className="glow glow-one" />
    <div className="glow glow-two" />
    <div className="cloud cloud-one" />
    <div className="cloud cloud-two" />
    <div className="cloud cloud-three" />
    {stars.map((star) => (
      <motion.span
        className="star"
        key={`${star.left}-${star.top}`}
        style={{ left: star.left, top: star.top }}
        animate={{ opacity: [0.35, 1, 0.35], scale: [0.8, 1.15, 0.8] }}
        transition={{ duration: 2.6, repeat: Infinity, delay: star.delay, ease: "easeInOut" }}
      >
        ✦
      </motion.span>
    ))}
    <motion.span className="floating-heart heart-one" animate={{ y: [0, -16, 0], rotate: [-8, 8, -8] }} transition={{ duration: 5, repeat: Infinity }}>♡</motion.span>
    <motion.span className="floating-heart heart-two" animate={{ y: [0, 18, 0], rotate: [12, -8, 12] }} transition={{ duration: 6, repeat: Infinity, delay: 1 }}>♡</motion.span>
  </div>
);
