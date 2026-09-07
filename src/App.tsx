import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { FloatingBackground } from "./components/FloatingBackground";
import { MusicButton } from "./components/MusicButton";
import { Navigation } from "./components/Navigation";
import { OpeningScreen } from "./components/OpeningScreen";
import { RSVPModal } from "./components/RSVPModal";
import { Invitation } from "./pages/Invitation";
import type { RSVPStatus } from "./types/invitation";

export default function App() {
  const [guestName, setGuestName] = useState<string | null>(null);
  const [isOpening, setIsOpening] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rsvpStatus, setRsvpStatus] = useState<RSVPStatus>(null);

  const openInvitation = (name: string) => {
    setIsOpening(true);
    window.setTimeout(() => { setGuestName(name); setIsOpening(false); }, 950);
  };

  const selectRSVP = (status: Exclude<RSVPStatus, null>) => setRsvpStatus(status);

  return <div className="app-shell"><FloatingBackground /><AnimatePresence mode="wait">{guestName ? <Invitation key="invitation" guest={{ name: guestName }} onRSVP={() => { setRsvpStatus(null); setIsModalOpen(true); }} /> : <OpeningScreen key="opening" onOpen={openInvitation} isOpening={isOpening} />}</AnimatePresence>{guestName && <><Navigation /><MusicButton /><RSVPModal isOpen={isModalOpen} status={rsvpStatus} onClose={() => setIsModalOpen(false)} onSelect={selectRSVP} /></>}</div>;
}
