import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { FloatingBackground } from "./components/FloatingBackground";
import { MusicButton } from "./components/MusicButton";
import { Navigation } from "./components/Navigation";
import { OpeningScreen } from "./components/OpeningScreen";
import { Invitation } from "./pages/Invitation";

export type InvitationPage = "home" | "story" | "details";

export default function App() {
  const [guestName, setGuestName] = useState<string | null>(null);
  const [isOpening, setIsOpening] = useState(false);
  const [activePage, setActivePage] = useState<InvitationPage>("home");

  const openInvitation = (name: string) => {
    setIsOpening(true);
    window.setTimeout(() => { setGuestName(name); setActivePage("home"); setIsOpening(false); }, 950);
  };

  const navigate = (page: InvitationPage) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return <div className="app-shell"><FloatingBackground /><AnimatePresence mode="wait">{guestName ? <Invitation key={activePage} guest={{ name: guestName }} page={activePage} /> : <OpeningScreen key="opening" onOpen={openInvitation} isOpening={isOpening} />}</AnimatePresence>{guestName && <><Navigation activePage={activePage} onNavigate={navigate} /><MusicButton /></>}</div>;
}
