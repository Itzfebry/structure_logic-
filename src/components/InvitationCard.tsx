import { motion } from "framer-motion";
import type { Guest } from "../types/invitation";

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
    <div className="invitation-card">
      <div className="card-orbit orbit-one" />
      <div className="card-orbit orbit-two" />
      <div className="card-topline">
        <span>WITH LOVE</span>
        <span>✦</span>
      </div>
      <div className="card-flower">✿</div>
      <p className="script-kicker">Dear {guest.name},</p>
      <h1>
        You're
        <br />
        <em>invited</em>
      </h1>
      <div className="divider">
        <span>♡</span>
      </div>
      <p className="names">
        Febry <i>&</i> Sasha
      </p>
      <p className="invitation-message">
        Together with love and happiness,
        <br />
        we invite you to celebrate
        <br />a beautiful moment with us.
      </p>
      <div className="card-footer">
        <span>28</span>
        <span>12</span>
        <span>2026</span>
      </div>
    </div>
  </motion.section>
);
