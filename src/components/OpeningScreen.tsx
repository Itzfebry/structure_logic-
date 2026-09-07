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
      <motion.div className="eyebrow-badge" initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.25 }}>a tiny love note</motion.div>
      <motion.div className="mascot" animate={{ y: [0, -8, 0], rotate: [-2, 2, -2] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
        <div className="mascot-face"><i /><i /><b>⌣</b></div><span className="foot foot-left" /><span className="foot foot-right" />
      </motion.div>
      <p className="script-kicker">You are invited</p>
      <h1>A little invitation<br /><em>for someone special.</em></h1>
      <p className="opening-text">There is a beautiful moment waiting<br className="desktop-break" /> beneath the pink sky.</p>
      <GuestNameInput onSubmit={onOpen} />
    </div>
    <SparkleEffect active={isOpening} />
  </motion.main>
);
