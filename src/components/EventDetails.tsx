import { motion } from "framer-motion";
import { CalendarDays, Clock3, MapPin, Sparkles } from "lucide-react";
import maldivesImage from "./images/Maldives.jpg";
import type { EventDetails as EventDetailsType } from "../types/invitation";

interface EventDetailsProps { details: EventDetailsType; }

export const EventDetails = ({ details }: EventDetailsProps) => {
  const cards = [
    { icon: CalendarDays, label: "TANGGAL", value: details.date },
    { icon: Clock3, label: "WAKTU", value: details.time },
    { icon: MapPin, label: "LOKASI", value: details.location },
    { icon: Sparkles, label: "ALAMAT", value: details.address },
  ];

  return (
    <section className="details-section section-shell" id="details">
      <div className="section-heading">
        <span className="tiny-label">KAPAN & DI MANA</span>
        <h2>Simpan tanggal <span>✦</span></h2>
        <p>Jaga momen kecil ini dekat di hati.</p>
      </div>

      <div className="details-showcase">
        <div className="details-visual">
          <img src={maldivesImage} alt="Four Seasons Resort Maldives" />
          <div className="details-badge">
            <span>Ocean Escape</span>
            <strong>Maldives</strong>
          </div>
        </div>
      </div>

      <div className="details-grid">
        {cards.map(({ icon: Icon, label, value }, index) => (
          <motion.article
            className="detail-card"
            key={label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ y: -5 }}
          >
            <div className="detail-icon"><Icon size={19} strokeWidth={1.7} /></div>
            <div>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};
