import { motion } from 'framer-motion';

/* ─── Gallery images ─────────────────────────────────── */
const teamPhotos = [
  { id: 1, src: '/images/team-1.png', alt: 'Team collaborating at desk' },
  { id: 2, src: '/images/team-2.png', alt: 'Brainstorming session' },
  { id: 3, src: '/images/team-3.png', alt: 'Team celebrating together' },
  { id: 4, src: '/images/team-4.png', alt: 'Design review session' },
  { id: 5, src: '/images/team-5.png', alt: 'Creative studio workshop' },
];

/* ─── Variants ───────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const imageReveal = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay: 0.2 + i * 0.08, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

/**
 * TeamOrigin — centered narrative paragraph + horizontal photo gallery.
 */
export default function TeamOrigin() {
  return (
    <section id="team-origin" className="bg-cream section-padding">
      <div className="content-wrapper">
        {/* ── Centered Narrative Text ─────────────────────── */}
        <motion.div
          className="max-w-narrow mx-auto text-center mb-16 md:mb-20"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          custom={0}
        >
          <p className="text-label-md uppercase tracking-[0.15em] text-gold mb-5">
            Our Origin
          </p>
          <h2 className="font-display text-display-sm md:text-display-md text-emerald-dark leading-snug">
            We didn&apos;t start as a digital agency.
          </h2>
          <p className="mt-6 text-body-lg text-neutral-gray-500 font-sans leading-relaxed">
            Before the pixels and the platforms, before the logos and the landing pages — we
            started by listening. We sat with founders who had fire in their eyes but no language
            for their brand. We learned that the best design doesn&apos;t come from trends.
            It comes from truth.{' '}
            <span className="text-emerald-dark font-medium">We understood people.</span>
          </p>
        </motion.div>

        {/* ── Horizontal Photo Gallery ────────────────────── */}
        <div className="relative">
          {/* Desktop: 5-column grid / Mobile: horizontal scroll */}
          <div className="flex gap-3 md:gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-5 md:overflow-visible md:pb-0">
            {teamPhotos.map((photo, i) => (
              <motion.div
                key={photo.id}
                className="flex-shrink-0 w-[72%] md:w-auto snap-center"
                variants={imageReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                custom={i}
              >
                <div className="relative overflow-hidden rounded-lg md:rounded-xl aspect-[4/3] group">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="h-full w-full object-cover transition-transform duration-600 ease-smooth group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle gradient on hover */}
                  <div className="absolute inset-0 bg-emerald-dark/0 group-hover:bg-emerald-dark/15 transition-colors duration-400" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile scroll hint */}
          <div className="flex justify-center mt-4 gap-1.5 md:hidden">
            {teamPhotos.map((photo) => (
              <div
                key={`dot-${photo.id}`}
                className="w-1.5 h-1.5 rounded-full bg-gold/30"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
