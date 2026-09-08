import { motion } from "framer-motion";
import type { Guest } from "../types/invitation";
import febryImage from "./images/Febry.png";
import sashaImage from "./images/Sasha.jpeg";

interface InvitationCardProps {
  guest: Guest;
}

export const InvitationCard = ({ guest }: InvitationCardProps) => (
  <motion.section
    className="hero-section section-shell"
    id="home"
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9, delay: 0.1 }}
  >
    <div className="home-composition">
      <motion.figure className="floating-portrait floating-portrait-left" initial={{ opacity: 0, x: -28, y: 16 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ delay: 0.35, duration: 0.9 }}>
        <img src={febryImage} alt="Febry" />
        <figcaption>Febry <span>the groom</span></figcaption>
      </motion.figure>
      <div className="invitation-card">
        <div className="card-orbit orbit-one" />
        <div className="card-orbit orbit-two" />
        <div className="card-topline"><span>WITH LOVE</span><span>✦</span></div>
        <div className="card-flower">✿</div>
        <p className="script-kicker">Dear {guest.name},</p>
        <h1>You're<br /><em>invited</em></h1>
        <div className="divider"><span>♡</span></div>
        <p className="names">Febry <i>&</i> Sasha</p>
        <p className="invitation-message">Together with love and happiness,<br />we invite you to celebrate<br />a beautiful moment with us.</p>
        <div className="card-footer"><span>28</span><span>12</span><span>2026</span></div>
      </div>
      <motion.figure className="floating-portrait floating-portrait-right" initial={{ opacity: 0, x: 28, y: 16 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ delay: 0.5, duration: 0.9 }}>
        <img src={sashaImage} alt="Sasha" />
        <figcaption>Sasha <span>the bride</span></figcaption>
      </motion.figure>
    </div>
  </motion.section>
);
