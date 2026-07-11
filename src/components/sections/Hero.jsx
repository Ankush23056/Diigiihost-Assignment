import { motion } from 'framer-motion';

/* ─── Animation Variants ─────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 1.08 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.4, ease: [0.25, 0.1, 0.25, 1] },
  },
};

/**
 * Hero — full-width dark premium section with ambient portrait overlay.
 *
 * Features:
 *  • Full-viewport height with centered portrait background
 *  • Dark gradient overlays for text legibility
 *  • Large editorial heading with gold "Alkesh Gupta" accent
 *  • Subtle scroll-down indicator
 */
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-emerald-dark"
    >
      {/* ── Background Portrait ───────────────────────────── */}
      <motion.div
        className="absolute inset-0 z-0"
        variants={scaleIn}
        initial="hidden"
        animate="visible"
      >
        <img
          src="/images/hero-portrait.png"
          alt="Alkesh Gupta — Founder & Creator"
          className="h-full w-full object-cover object-center"
        />
        {/* Dark gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-dark/70 via-emerald-dark/40 to-emerald-dark/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-dark/60 via-transparent to-emerald-dark/60" />
      </motion.div>

      {/* ── Content Overlay ───────────────────────────────── */}
      <div className="relative z-10 content-wrapper px-6 md:px-10 lg:px-16 xl:px-20 text-center">
        {/* Label */}
        <motion.p
          className="text-label-md uppercase tracking-[0.2em] text-gold-light/80 mb-6"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          Welcome to the journey
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          className="font-display text-display-lg md:text-display-xl lg:text-display-2xl text-white max-w-[900px] mx-auto leading-tight"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Hi, I'm{' '}
          <span className="text-gold">Alkesh Gupta</span>
          {' '}— a Founder, Creator, and Soul Alchemist.
        </motion.h1>

        {/* Sub-line */}
        <motion.p
          className="mt-6 md:mt-8 text-body-lg md:text-body-xl text-neutral-gray-300/90 font-sans max-w-narrow mx-auto"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          Building brands that connect with purpose, depth, and intention.
        </motion.p>

        {/* Gold divider */}
        <motion.div
          className="mt-10 mx-auto h-[1px] w-20 bg-gold/50"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
        />
      </div>

      {/* ── Scroll Indicator ──────────────────────────────── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="text-label-sm uppercase tracking-widest text-gold-light/60">
          Scroll
        </span>
        <motion.div
          className="h-8 w-[1px] bg-gold/40"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: 'top' }}
        />
      </motion.div>
    </section>
  );
}
