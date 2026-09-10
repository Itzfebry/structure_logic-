import { motion } from "framer-motion";
import { Countdown } from "../components/Countdown";
import { EventDetails } from "../components/EventDetails";
import { InvitationCard } from "../components/InvitationCard";
import { Story } from "../components/Story";
import type { InvitationPage } from "../App";
import type {
  EventDetails as EventDetailsType,
  Guest,
} from "../types/invitation";

interface InvitationProps {
  guest: Guest;
  page: InvitationPage;
}

const details: EventDetailsType = {
  date: "Sabtu, 30 Mei 2030",
  time: "08.00 WIB - Selesai",
  location: "Maldives",
  address: "Four Seasons Resort Maldives",
};
const eventDate = new Date("2030-05-30T08:00:00+07:00").getTime();

export const Invitation = ({ guest, page }: InvitationProps) => (
  <motion.main
    className="invitation-page"
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.55 }}
  >
    <div className="page-view">
      {page === "home" && <InvitationCard guest={guest} />}
      {page === "story" && <Story />}
      {page === "details" && (
        <>
          <Countdown targetDate={eventDate} />
          <EventDetails details={details} />
         
        </>
      )}
    </div>
  </motion.main>
);
