import { motion } from "framer-motion";
import { Countdown } from "../components/Countdown";
import { EventDetails } from "../components/EventDetails";
import { InvitationCard } from "../components/InvitationCard";
import { Story } from "../components/Story";
import type { InvitationPage } from "../App";
import type { EventDetails as EventDetailsType, Guest } from "../types/invitation";

interface InvitationProps { guest: Guest; page: InvitationPage; }

const details: EventDetailsType = { date: "Saturday, 20 September 2026", time: "19:00 WIB", location: "Dreamy Garden", address: "Somewhere Under The Pink Sky" };
const eventDate = new Date("2026-09-20T19:00:00+07:00").getTime();

export const Invitation = ({ guest, page }: InvitationProps) => <motion.main className="invitation-page" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}><div className="page-view">{page === "home" && <InvitationCard guest={guest} />}{page === "story" && <Story />}{page === "details" && <><Countdown targetDate={eventDate} /><EventDetails details={details} /><footer>made with a little bit of magic <span>✦</span></footer></>}</div></motion.main>;
