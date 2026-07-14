import { motion } from 'framer-motion';
import manifesto from '../../data/manifesto';

/* ─── Variants ───────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function Manifesto() {
  return (
    <section id="manifesto" className="bg-emerald-dark section-padding text-white overflow-hidden">
      <div className="content-wrapper">
        <motion.div
          className="max-w-[700px] mb-16 md:mb-24"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <p className="text-label-md uppercase tracking-[0.15em] text-gold mb-4">
            The Manifesto
          </p>
          <h2 className="font-display text-display-md md:text-display-lg leading-tight">
            Design isn't just how it looks. It's how it <span className="text-gold italic">connects</span>.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {manifesto.map((item, i) => (
            <motion.div
              key={item.id}
              className="relative pl-6 md:pl-8 border-l border-white/20 hover:border-gold transition-colors duration-400"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              custom={i + 1}
            >
              <div className="absolute left-0 top-0 -translate-x-[50%] -translate-y-2 bg-emerald-dark text-gold font-mono text-label-sm px-1 py-2">
                {item.number}
              </div>
              <h3 className="font-display text-display-sm md:text-2xl mb-3 text-gold-light">
                {item.title}
              </h3>
              <p className="text-body-md text-neutral-gray-300 font-sans leading-relaxed">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
