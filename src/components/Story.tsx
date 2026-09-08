import { motion, useScroll, useTransform } from "framer-motion";
import { ImagePlus } from "lucide-react";
import { type ChangeEvent, useRef, useState } from "react";

const hearts = Array.from({ length: 12 }, (_, index) => index);

const PhotoFrame = ({ side, image, onUpload }: { side: "left" | "right"; image: string | null; onUpload: (event: ChangeEvent<HTMLInputElement>) => void }) => (
  <motion.label className={`story-photo story-photo-${side}`} whileHover={{ y: -8, rotate: side === "left" ? -4 : 4 }}>
    {image ? <img src={image} alt={`${side === "left" ? "Man" : "Woman"} in the wedding story`} /> : <><ImagePlus size={27} strokeWidth={1.4} /><span>upload {side === "left" ? "his" : "her"} photo</span></>}
    <input type="file" accept="image/*" onChange={onUpload} />
  </motion.label>
);

const HeartParticle = ({ index, progress }: { index: number; progress: ReturnType<typeof useScroll>["scrollYProgress"] }) => {
  const opacity = useTransform(progress, [0, Math.max(0.2, index / hearts.length), 1], [index < 3 ? 1 : 0, 1, 1]);
  return <motion.span className={`heart-particle particle-${index}`} style={{ opacity }}>♡</motion.span>;
};

export const Story = () => {
  const storyRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: storyRef, offset: ["start start", "end end"] });
  const leftX = useTransform(scrollYProgress, [0, 1], [0, 105]);
  const rightX = useTransform(scrollYProgress, [0, 1], [0, -105]);
  const heartScale = useTransform(scrollYProgress, [0, 1], [1, 1.35]);
  const [images, setImages] = useState<{ left: string | null; right: string | null }>({ left: null, right: null });

  const upload = (side: "left" | "right") => (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) setImages((current) => ({ ...current, [side]: URL.createObjectURL(file) }));
  };

  return <section className="story-page" ref={storyRef}>
    <div className="story-sticky">
      <div className="story-heading"><span className="tiny-label">A LOVE IN MOTION</span><h1>How it <em>began</em></h1><p>Bring their first chapter to life. Add a portrait for each of them, then scroll gently to watch two paths meet.</p></div>
      <div className="story-stage">
        <motion.div style={{ x: leftX }}><PhotoFrame side="left" image={images.left} onUpload={upload("left")} /></motion.div>
        <motion.div className="story-heart-field" style={{ scale: heartScale }} aria-hidden="true">{hearts.map((heart) => <HeartParticle key={heart} index={heart} progress={scrollYProgress} />)}<span className="story-main-heart">♥</span></motion.div>
        <motion.div style={{ x: rightX }}><PhotoFrame side="right" image={images.right} onUpload={upload("right")} /></motion.div>
      </div>
      <div className="story-caption"><span>scroll to bring them closer</span><span className="story-line" /></div>
    </div>
  </section>;
};