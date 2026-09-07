import { Heart, Home, Sparkles } from "lucide-react";

export const Navigation = () => <nav className="floating-nav" aria-label="Invitation navigation"><a href="#home"><Home size={16} /><span>home</span></a><a href="#details"><Sparkles size={16} /><span>details</span></a><a href="#rsvp"><Heart size={16} /><span>rsvp</span></a></nav>;
