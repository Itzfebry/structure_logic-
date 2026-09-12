import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import lilyImage from "./images/lili2.png";

const chapters = [
  { number: "01", title: "Awal yang tenang", text: "Beberapa kisah dimulai dengan lembut, dari momen kecil yang terasa berbeda dari yang lain." },
  { number: "02", title: "Dua jalan bersatu", text: "Hari demi hari, Febry dan Sasha menemukan lebih banyak alasan untuk terus memilih arah yang sama." },
  { number: "03", title: "Janji yang dijaga", text: "Kini babak baru terbuka, dibawa oleh semua kenangan kecil yang membawa mereka sampai di sini." },
];

export const Story = () => {
  const storyRef = useRef<HTMLElement>(null);
  const [flowerY, setFlowerY] = useState(0);
  const [progressHeight, setProgressHeight] = useState("8%");

  useEffect(() => {
    const updateScrollState = () => {
      const section = storyRef.current;
      if (!section) return;

      const stage = section.querySelector(".story-chapter-stage") as HTMLElement | null;
      const viewportHeight = window.innerHeight;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const travelRange = Math.max((stage?.offsetHeight ?? 620) - 120, 260);
      const maxProgressDistance = Math.max(sectionHeight - viewportHeight, 1);
      const progress = Math.min(Math.max((window.scrollY - sectionTop) / maxProgressDistance, 0), 1);
      const y = progress * travelRange;
      const height = `${8 + progress * 84}%`;

      setFlowerY(y);
      setProgressHeight(height);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  return <section className="story-page" ref={storyRef}>
    <div className="story-sticky">
      <div className="story-heading"><span className="tiny-label">CERITA KECIL KAMI</span><h1>Dari dulu <em>sampai sekarang</em></h1><p>Gulir untuk menelusuri babak-babak cinta yang semakin indah di setiap musimnya.</p></div>
      <motion.div className="story-chapter-stage">
        <div className="story-rail" aria-hidden="true" />
        <motion.div className="story-progress" style={{ height: progressHeight }} aria-hidden="true" />
        <motion.div
          className="story-scroll-flower-wrap"
          animate={{ y: flowerY, rotate: flowerY * 0.012 }}
          transition={{ type: "spring", stiffness: 120, damping: 34, mass: 0.9 }}
          aria-hidden="true"
        >
          <img src={lilyImage} alt="" className="story-scroll-flower" />
        </motion.div>
        {chapters.map((chapter, index) => (
          <motion.article
            className={`story-chapter story-chapter-${index + 1}`}
            key={chapter.number}
            initial={{ opacity: 0, y: 32, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ amount: 0.5 }}
            transition={{ delay: index * 0.12, duration: 0.7, ease: "easeOut" }}
          >
            <span className="story-bloom" aria-hidden="true" />
            <span className="chapter-number">{chapter.number}</span>
            <h2>{chapter.title}</h2>
            <p>{chapter.text}</p>
            <span className="chapter-mark">✦</span>
          </motion.article>
        ))}
      </motion.div>
      <p className="story-caption">terus gulir menelusuri kisah mereka</p>
    </div>
  </section>;
};