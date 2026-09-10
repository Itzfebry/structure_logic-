import { motion } from "framer-motion";

const stars = [
  { left: "8%", top: "13%", delay: 0 },
  { left: "87%", top: "18%", delay: 0.8 },
  { left: "20%", top: "72%", delay: 1.3 },
  { left: "78%", top: "64%", delay: 0.4 },
  { left: "52%", top: "9%", delay: 1.8 },
];

const blooms = [
  { left: "7%", top: "18%", size: 170 },
  { left: "25%", top: "72%", size: 205 },
  { left: "58%", top: "12%", size: 180 },
  { left: "77%", top: "64%", size: 210 },
  { left: "42%", top: "68%", size: 170 },
  { left: "82%", top: "28%", size: 150 },
];

export const FloatingBackground = () => (
  <div className="background-art" aria-hidden="true">
    <div className="glow glow-one" />
    <div className="glow glow-two" />
    <div className="cloud cloud-one" />
    <div className="cloud cloud-two" />
    <div className="cloud cloud-three" />

    {blooms.map((bloom) => (
      <div
        key={`${bloom.left}-${bloom.top}`}
        className="floral-bloom"
        style={{ left: bloom.left, top: bloom.top, width: `${bloom.size}px`, height: `${bloom.size}px` }}
      />
    ))}

    <motion.div
      className="kirby-background"
      animate={{
        y: [0, -20, 0, 12, 0],
        x: [0, 12, -8, 10, 0],
        rotate: [0, 8, -6, 5, 0],
        opacity: [0.16, 0.34, 0.2, 0.3, 0.18],
      }}
      transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="glass-orb glass-orb-one" />
      <div className="glass-orb glass-orb-two" />
      <div className="glass-orb glass-orb-three" />
    </motion.div>

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
