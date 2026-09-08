import { CalendarDays, Heart, Home } from "lucide-react";
import type { InvitationPage } from "../App";

interface NavigationProps { activePage: InvitationPage; onNavigate: (page: InvitationPage) => void; }

export const Navigation = ({ activePage, onNavigate }: NavigationProps) => {
	const links = [{ page: "home" as const, label: "home", icon: Home }, { page: "story" as const, label: "story", icon: Heart }, { page: "details" as const, label: "details", icon: CalendarDays }];
	return <nav className="floating-nav" aria-label="Invitation navigation">{links.map(({ page, label, icon: Icon }) => <button key={page} className={activePage === page ? "is-active" : ""} onClick={() => onNavigate(page)} aria-current={activePage === page ? "page" : undefined}><Icon size={16} /><span>{label}</span></button>)}</nav>;
};
