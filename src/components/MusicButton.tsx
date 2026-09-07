import { Music2, VolumeX } from "lucide-react";
import { useMusic } from "../hooks/useMusic";

export const MusicButton = () => {
  const { isPlaying, toggleMusic } = useMusic();
  return <button className={`music-button ${isPlaying ? "is-playing" : ""}`} onClick={toggleMusic} aria-label={isPlaying ? "Turn music off" : "Turn music on"} title={isPlaying ? "Music on" : "Music off"}>{isPlaying ? <Music2 size={18} /> : <VolumeX size={18} />}<span>{isPlaying ? "music on" : "music off"}</span></button>;
};
