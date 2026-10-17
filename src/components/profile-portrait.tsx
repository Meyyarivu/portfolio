"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

export function ProfilePortrait() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 12, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={prefersReducedMotion ? undefined : { y: -2, scale: 1.04 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.5, ease: "easeOut" }}
      className="relative z-10 ml-auto mb-5 size-[60px] md:absolute md:right-12 md:top-12 md:mb-0"
    >
      <div className="size-full rounded-full border border-border/80 bg-background/80 p-[3px] shadow-md shadow-slate-950/10 backdrop-blur-xl dark:bg-white/5 dark:shadow-black/20">
        <div className="relative size-full overflow-hidden rounded-full bg-muted">
          <Image
            src="/images/profile.png"
            alt="Portrait of Meyyarivu"
            fill
            priority
            sizes="(max-width: 767px) 220px, 260px"
            className="object-cover object-[50%_30%]"
          />
        </div>
      </div>
    </motion.div>
  );
}
