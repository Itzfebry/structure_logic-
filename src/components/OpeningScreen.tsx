import { motion } from "framer-motion";
import { GuestNameInput } from "./GuestNameInput";
import { SparkleEffect } from "./SparkleEffect";

interface OpeningScreenProps {
  onOpen: (name: string) => void;
  isOpening: boolean;
}

export const OpeningScreen = ({ onOpen, isOpening }: OpeningScreenProps) => (
  <motion.main className="opening-screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: 1.06 }} transition={{ duration: 0.7 }}>
    <div className="opening-copy">
      <motion.div className="eyebrow-badge" initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.25 }}>A little note of forever</motion.div>
      <motion.div className="mascot" animate={{ y: [0, -8, 0], rotate: [-2, 2, -2] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
        <div className="mascot-face"><i /><i /><b>⌣</b></div><span className="foot foot-left" /><span className="foot foot-right" />
      </motion.div>
      <p className="script-kicker">You are invited</p>
      <h1>To celebrate <em>our love story</em></h1>
      <p className="opening-text">With sincere hearts, we warmly welcome you to our wedding day.</p>
      <GuestNameInput onSubmit={onOpen} />
    </div>
    <SparkleEffect active={isOpening} />
  </motion.main>
);
