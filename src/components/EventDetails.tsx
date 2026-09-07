import { motion } from "framer-motion";
import { CalendarDays, Clock3, MapPin, Sparkles } from "lucide-react";
import type { EventDetails as EventDetailsType } from "../types/invitation";

interface EventDetailsProps { details: EventDetailsType; }

export const EventDetails = ({ details }: EventDetailsProps) => {
  const cards = [
    { icon: CalendarDays, label: "DATE", value: details.date },
    { icon: Clock3, label: "TIME", value: details.time },
    { icon: MapPin, label: "LOCATION", value: details.location },
    { icon: Sparkles, label: "ADDRESS", value: details.address },
  ];
  return <section className="details-section section-shell" id="details"><div className="section-heading"><span className="tiny-label">THE WHEN & WHERE</span><h2>Save the date <span>✦</span></h2><p>Keep this little moment close to your heart.</p></div><div className="details-grid">{cards.map(({ icon: Icon, label, value }, index) => <motion.article className="detail-card" key={label} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ delay: index * 0.08 }} whileHover={{ y: -5 }}><div className="detail-icon"><Icon size={19} strokeWidth={1.7} /></div><div><span>{label}</span><strong>{value}</strong></div></motion.article>)}</div></section>;
};
