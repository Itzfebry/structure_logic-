import { motion } from "framer-motion";
import { Countdown } from "../components/Countdown";
import { EventDetails } from "../components/EventDetails";
import { InvitationCard } from "../components/InvitationCard";
import type { EventDetails as EventDetailsType, Guest } from "../types/invitation";

interface InvitationProps { guest: Guest; onRSVP: () => void; }

const details: EventDetailsType = { date: "Saturday, 20 September 2026", time: "19:00 WIB", location: "Dreamy Garden", address: "Somewhere Under The Pink Sky" };
const eventDate = new Date("2026-09-20T19:00:00+07:00").getTime();

export const Invitation = ({ guest, onRSVP }: InvitationProps) => <motion.div className="invitation-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }}><InvitationCard guest={guest} /><Countdown targetDate={eventDate} /><EventDetails details={details} /><section className="rsvp-section section-shell" id="rsvp"><div className="rsvp-panel"><span className="tiny-label">A FINAL LITTLE THING</span><h2>Will you join us?</h2><p>Come make this evening a memory we will keep forever.</p><button className="primary-button" onClick={onRSVP}>Send RSVP <span>♡</span></button><div className="rsvp-stamp">with love<br /><b>F + S</b></div></div></section><footer>made with a little bit of magic <span>✦</span></footer></motion.div>;
