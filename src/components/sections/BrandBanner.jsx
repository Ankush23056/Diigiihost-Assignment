import { motion } from 'framer-motion';

/* ─── Variants ───────────────────────────────────────── */
const imageReveal = {
  hidden: { opacity: 0, scale: 1.04 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const textReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.3 + i * 0.12, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

/**
 * BrandBanner — full-width stylized room/office image block.
 *
 * Features:
 *  • Centered background image of a premium workspace
 *  • Overlaid typography: "DIIGIIHOST BRAND SOUL, FOUND"
 *  • Consistent vertical spacing above and below
 *  • Subtle parallax-like scale on scroll enter
 */
export default function BrandBanner() {
  return (
    <section
      id="brand-banner"
      className="py-16 md:py-24 lg:py-30 bg-cream"
    >
      <div className="content-wrapper px-6 md:px-10 lg:px-16 xl:px-20">
        {/* ── Image Container ─────────────────────────────── */}
        <motion.div
          className="relative w-full overflow-hidden rounded-xl md:rounded-2xl"
          variants={imageReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Background Image */}
          <div className="relative aspect-[16/7] md:aspect-[16/6] lg:aspect-[21/9]">
            <img
              src="/images/brand-banner-room.png"
              alt="Diigiihost creative workspace"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-emerald-dark/55" />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-dark/70 via-transparent to-emerald-dark/30" />

            {/* ── Typography Overlay ──────────────────────── */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
              {/* Top label */}
              <motion.p
                className="text-label-sm md:text-label-md uppercase tracking-[0.25em] text-gold-light/70 mb-3 md:mb-5"
                variants={textReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0}
              >
                Where identity meets intention
              </motion.p>

              {/* Main title lines */}
              <motion.h2
                className="font-display text-display-md md:text-display-lg lg:text-display-xl text-white leading-[1.1] tracking-tight"
                variants={textReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
              >
                DIIGIIHOST
              </motion.h2>

              <motion.div
                className="my-3 md:my-4 flex items-center gap-3 md:gap-5"
                variants={textReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={2}
              >
                <div className="h-[1px] w-8 md:w-14 bg-gold/50" />
                <p className="text-label-md md:text-label-lg uppercase tracking-[0.2em] text-gold">
                  Brand Soul
                </p>
                <div className="h-[1px] w-8 md:w-14 bg-gold/50" />
              </motion.div>

              <motion.h3
                className="font-display text-display-sm md:text-display-md lg:text-display-lg text-white/90 italic"
                variants={textReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={3}
              >
                Found.
              </motion.h3>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
