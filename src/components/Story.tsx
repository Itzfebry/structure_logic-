import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import lilyImage from "./images/lili2.png";

const chapters = [
  { number: "01", title: "Awal yang tenang", text: "Beberapa kisah dimulai dengan lembut, dari momen kecil yang terasa berbeda dari yang lain." },
  { number: "02", title: "Dua jalan bersatu", text: "Hari demi hari, Febry dan Sasha menemukan lebih banyak alasan untuk terus memilih arah yang sama." },
  { number: "03", title: "Janji yang dijaga", text: "Kini babak baru terbuka, dibawa oleh semua kenangan kecil yang membawa mereka sampai di sini." },
];

export const Story = () => {
  const storyRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: storyRef, offset: ["start start", "end end"] });
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["8%", "92%"]);
  const stageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1, 0.96]);
  const flowerY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 540]), { stiffness: 90, damping: 26, mass: 0.85 });
  const flowerRotate = useSpring(useTransform(scrollYProgress, [0, 1], [0, 12]), { stiffness: 90, damping: 18 });

  return <section className="story-page" ref={storyRef}>
    <div className="story-sticky">
      <div className="story-heading"><span className="tiny-label">CERITA KECIL KAMI</span><h1>Dari dulu <em>sampai sekarang</em></h1><p>Gulir untuk menelusuri babak-babak cinta yang semakin indah di setiap musimnya.</p></div>
      <motion.div className="story-chapter-stage" style={{ scale: stageScale }}>
        <div className="story-rail" aria-hidden="true" />
        <motion.div className="story-progress" style={{ height: progressHeight }} />
        <motion.img
          src={lilyImage}
          alt=""
          className="story-scroll-flower"
          style={{ y: flowerY, rotate: flowerRotate }}
          aria-hidden="true"
        />
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