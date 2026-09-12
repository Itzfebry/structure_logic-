import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { gsap } from "gsap";
import { GuestNameInput } from "./GuestNameInput";
import { SparkleEffect } from "./SparkleEffect";
import floralDivider from "./images/floral-divider.svg";
import envelopeArt from "./images/envelope-ornament.svg";

interface OpeningScreenProps {
  onOpen: (name: string) => void;
  isOpening: boolean;
}

export const OpeningScreen = ({ onOpen, isOpening }: OpeningScreenProps) => {
  const introRef = useRef<HTMLDivElement | null>(null);
  const [letterOpened, setLetterOpened] = useState(false);

  const petals = useMemo(
    () =>
      Array.from({ length: 18 }, (_, index) => ({
        id: index,
        left: `${8 + (index % 6) * 15}%`,
        top: `${10 + (index % 5) * 18}%`,
        size: 8 + (index % 4) * 4,
        delay: index * 0.18,
        duration: 6 + (index % 5),
        drift: index % 2 === 0 ? -24 : 24,
      })),
    []
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl
        .fromTo(".intro-flower", { opacity: 0, scale: 0.72, y: 22 }, { opacity: 1, scale: 1, y: 0, duration: 1.15 })
        .fromTo(
          ".intro-door-left",
          { opacity: 0, x: -72, rotateY: 65, scaleX: 0.7 },
          { opacity: 1, x: 0, rotateY: 0, scaleX: 1, duration: 1.5, transformPerspective: 1200, transformOrigin: "right center" },
          "-=0.6"
        )
        .fromTo(
          ".intro-door-right",
          { opacity: 0, x: 72, rotateY: -65, scaleX: 0.7 },
          { opacity: 1, x: 0, rotateY: 0, scaleX: 1, duration: 1.5, transformPerspective: 1200, transformOrigin: "left center" },
          "-=1.3"
        )
        .fromTo(".intro-letter", { opacity: 0, y: 54, rotateX: 68, scale: 0.9 }, { opacity: 1, y: 0, rotateX: 0, scale: 1, duration: 1.15 }, "-=0.65")
        .fromTo(".intro-caption", { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.3");
    }, introRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!letterOpened) return;

    const ctx = gsap.context(() => {
      gsap.to(".intro-stage", {
        opacity: 0,
        y: -18,
        scale: 0.98,
        duration: 0.8,
        pointerEvents: "none",
        ease: "power2.inOut",
      });

      gsap.to(".intro-door-left", {
        x: -72,
        rotateY: 60,
        scaleX: 0.78,
        duration: 1,
        ease: "power2.inOut",
      });

      gsap.to(".intro-door-right", {
        x: 72,
        rotateY: -60,
        scaleX: 0.78,
        duration: 1,
        ease: "power2.inOut",
      });

      gsap.fromTo(
        ".wedding-reveal",
        { opacity: 0, y: 28, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 0.95, ease: "power3.out", delay: 0.2 }
      );

      gsap.fromTo(
        ".guest-form",
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.35 }
      );
    }, introRef);

    return () => ctx.revert();
  }, [letterOpened]);

  const handleOpenLetter = () => {
    setLetterOpened(true);
  };

  return (
    <motion.main className="opening-screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: 1.06 }} transition={{ duration: 0.7 }}>
      <div className="opening-copy" ref={introRef}>
        <div className="petal-layer" aria-hidden="true">
          {petals.map((petal) => (
            <span
              key={petal.id}
              className="petal"
              style={{
                left: petal.left,
                top: petal.top,
                width: `${petal.size}px`,
                height: `${petal.size * 1.4}px`,
                animationDelay: `${petal.delay}s`,
                animationDuration: `${petal.duration}s`,
                transform: `translate3d(0, 0, 0) rotate(${petal.drift}deg)`,
              }}
            />
          ))}
        </div>

        <div className="intro-stage">
          <div className="intro-floral-ornament intro-floral-left" />
          <div className="intro-floral-ornament intro-floral-right" />

          <motion.div className="intro-flower" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
            <img src={floralDivider} alt="Floral divider" />
          </motion.div>

          <div className="intro-door-frame">
            <div className="intro-door intro-door-left" />
            <div className="intro-door intro-door-right" />
          </div>

          <button type="button" className="intro-letter" onClick={handleOpenLetter} aria-label="Open invitation letter">
            <img src={envelopeArt} alt="Wedding envelope" />
          </button>

          <p className="intro-caption">Klik surat untuk membuka undangan</p>
        </div>

        <AnimatePresence>
          {letterOpened && (
            <motion.div className="wedding-reveal" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }}>
              <p className="script-kicker">You are invited</p>
              <h1>
                Weddings of
                <span className="name-highlight">
                  <em>Febry &amp; Sasha</em>
                  <span className="name-love" aria-hidden="true">♡</span>
                </span>
              </h1>
              <p className="opening-text">Dengan hati yang tulus, kami menantikan kehadiranmu dalam hari istimewa kami.</p>
              <GuestNameInput onSubmit={onOpen} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <SparkleEffect active={isOpening} />
    </motion.main>
  );
};
