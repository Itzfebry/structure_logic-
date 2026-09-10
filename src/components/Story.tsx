import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const chapters = [
  { number: "01", title: "Awal yang tenang", text: "Beberapa kisah dimulai dengan lembut, dari momen kecil yang terasa berbeda dari yang lain." },
  { number: "02", title: "Dua jalan bersatu", text: "Hari demi hari, Febry dan Sasha menemukan lebih banyak alasan untuk terus memilih arah yang sama." },
  { number: "03", title: "Janji yang dijaga", text: "Kini babak baru terbuka, dibawa oleh semua kenangan kecil yang membawa mereka sampai di sini." },
];

export const Story = () => {
  const storyRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: storyRef, offset: ["start start", "end end"] });
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["8%", "92%"]);
  const stageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1, 0.96]);

  return <section className="story-page" ref={storyRef}>
    <div className="story-sticky">
      <div className="story-heading"><span className="tiny-label">CERITA KECIL KAMI</span><h1>Dari dulu <em>sampai sekarang</em></h1><p>Gulir untuk menelusuri babak-babak cinta yang semakin indah di setiap musimnya.</p></div>
      <motion.div className="story-chapter-stage" style={{ scale: stageScale }}>
        {chapters.map((chapter, index) => <motion.article className={`story-chapter story-chapter-${index + 1}`} key={chapter.number} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ amount: 0.5 }} transition={{ delay: index * 0.08 }}><span className="chapter-number">{chapter.number}</span><h2>{chapter.title}</h2><p>{chapter.text}</p><span className="chapter-mark">✦</span></motion.article>)}
        <motion.div className="story-progress" style={{ width: progressWidth }} />
      </motion.div>
      <p className="story-caption">terus gulir menelusuri kisah mereka</p>
    </div>
  </section>;
};