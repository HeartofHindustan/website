"use client";

import { motion } from "framer-motion";
import Image, { type StaticImageData } from "next/image";

type ProductCardProps = {
  name: string;
  note: string;
  colors: [string, string];
  image: StaticImageData;
};

export function ProductCard({ name, note, colors, image }: ProductCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      whileHover={{ y: -14, rotateX: 2, rotateY: -3 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="group relative isolate overflow-hidden rounded-[2.2rem] border border-white/70 bg-white/64 p-5 shadow-card backdrop-blur-xl [transform-style:preserve-3d]"
    >
      <div className="absolute inset-0 -z-10 opacity-95" style={{ background: `linear-gradient(145deg, ${colors[0]}, #fffaf0 46%, ${colors[1]}24)` }} />
      <div className="absolute -right-16 -top-16 -z-10 h-44 w-44 rounded-full opacity-30 blur-3xl" style={{ backgroundColor: colors[1] }} />
      <div className="absolute -bottom-20 left-4 -z-10 h-48 w-48 rounded-full bg-white/70 blur-3xl" />

      <div className="relative mb-5 grid min-h-80 place-items-center overflow-hidden rounded-[1.8rem] bg-white/26">
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-x-10 bottom-5 h-10 rounded-full bg-kajal/18 blur-2xl"
        />
        <motion.div
          whileHover={{ scale: 1.05, rotate: -1.6 }}
          transition={{ type: "spring", stiffness: 180, damping: 18 }}
          className="relative z-10 w-[82%] drop-shadow-[0_34px_48px_rgba(33,23,15,0.28)]"
        >
          <Image
            src={image}
            alt={`HOH ${name} makhana packet`}
            sizes="(min-width: 1024px) 28vw, (min-width: 768px) 42vw, 88vw"
            className="h-auto w-full object-contain"
            placeholder="blur"
          />
        </motion.div>
      </div>

      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl font-black text-mehendi">{name}</h3>
          <p className="mt-2 text-sm leading-6 text-kajal/66">{note}</p>
        </div>
        <span className="rounded-full bg-white/58 px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-kajal/58">
          New
        </span>
      </div>

      <div className="mt-5 flex flex-wrap gap-2 text-xs font-bold text-kajal/70">
        <span className="rounded-full bg-white/60 px-3 py-2">100gm</span>
        <span className="rounded-full bg-white/60 px-3 py-2">250gm</span>
        <span className="rounded-full bg-leaf/10 px-3 py-2 text-leaf">Roasted</span>
      </div>
    </motion.article>
  );
}
