import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const chapters = [
  { number: "01", title: "A quiet beginning", text: "Some stories start softly, with one small moment that feels different from the rest." },
  { number: "02", title: "Two paths align", text: "Day by day, Febry and Sasha found more reasons to keep choosing the same direction." },
  { number: "03", title: "A promise to keep", text: "Now a new chapter opens, carried by all the little memories that brought them here." },
];

export const Story = () => {
  const storyRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: storyRef, offset: ["start start", "end end"] });
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["8%", "92%"]);
  const stageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1, 0.96]);

  return <section className="story-page" ref={storyRef}>
    <div className="story-sticky">
      <div className="story-heading"><span className="tiny-label">THEIR LITTLE STORY</span><h1>From then <em>to now</em></h1><p>Scroll through the chapters of a love that grows more beautiful with every season.</p></div>
      <motion.div className="story-chapter-stage" style={{ scale: stageScale }}>
        {chapters.map((chapter, index) => <motion.article className={`story-chapter story-chapter-${index + 1}`} key={chapter.number} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ amount: 0.5 }} transition={{ delay: index * 0.08 }}><span className="chapter-number">{chapter.number}</span><h2>{chapter.title}</h2><p>{chapter.text}</p><span className="chapter-mark">✦</span></motion.article>)}
        <motion.div className="story-progress" style={{ width: progressWidth }} />
      </motion.div>
      <p className="story-caption">keep scrolling through their chapters</p>
    </div>
  </section>;
};