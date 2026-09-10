import { Music2, VolumeX } from "lucide-react";
import { useMusic } from "../hooks/useMusic";

export const MusicButton = () => {
  const { isPlaying, toggleMusic } = useMusic();
  return <button className={`music-button ${isPlaying ? "is-playing" : ""}`} onClick={toggleMusic} aria-label={isPlaying ? "Matikan musik" : "Nyalakan musik"} title={isPlaying ? "Musik aktif" : "Musik mati"}>{isPlaying ? <Music2 size={18} /> : <VolumeX size={18} />}<span>{isPlaying ? "musik aktif" : "musik mati"}</span></button>;
};
