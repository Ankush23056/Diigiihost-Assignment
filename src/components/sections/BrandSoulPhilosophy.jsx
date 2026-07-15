import { motion } from 'framer-motion';

const philosophyCards = [
  {
    id: 1,
    title: 'SOUL',
    label: 'Identity & Emotion',
    description:
      'Every brand has a heartbeat. We find it, name it, and design it into every touchpoint — so your audience feels you before they read you.',
    image: '/images/card-soul.png',
    color: 'from-emerald-dark/90 to-emerald-dark/70',
  },
  {
    id: 2,
    title: 'SCIENCE',
    label: 'Strategy & Systems',
    description:
      'Intuition meets data. We engineer user journeys, conversion flows, and design systems that turn attention into action.',
    image: '/images/card-science.png',
    color: 'from-neutral-gray-900/90 to-neutral-gray-800/70',
  },
  {
    id: 3,
    title: 'SCALE',
    label: 'Growth & Reach',
    description:
      'Beautiful brands deserve to be seen. We build the infrastructure, platforms, and digital ecosystems that take your vision worldwide.',
    image: '/images/card-scale.png',
    color: 'from-emerald/90 to-emerald-light/70',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function BrandSoulPhilosophy() {
  return (
    <section id="brand-soul" className="bg-cream-warm section-padding overflow-hidden">
      <div className="content-wrapper">
        <motion.div
          className="max-w-narrow mx-auto text-center mb-14 md:mb-20"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          custom={0}
        >
          <p className="text-label-md uppercase tracking-[0.15em] text-gold mb-4">
            The Philosophy
          </p>
          <h2 className="font-display text-display-md md:text-display-lg text-emerald-dark leading-tight">
            Every brand we build stands on{' '}
            <span className="text-gold italic">three pillars</span>.
          </h2>
          <p className="mt-5 text-body-lg text-neutral-gray-500 font-sans">
            Soul gives it meaning. Science gives it structure. Scale gives it wings.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {philosophyCards.map((card, i) => (
            <motion.div
              key={card.id}
              className="group relative overflow-hidden rounded-xl md:rounded-2xl cursor-pointer"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              custom={i + 1}
            >
              <div className="relative aspect-[3/4] md:aspect-[4/5]">
                <img
                  src={card.image}
                  alt={`${card.title} — ${card.label}`}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-600 ease-smooth group-hover:scale-105"
                  loading="lazy"
                />

                <div className={`absolute inset-0 bg-gradient-to-t ${card.color}`} />

                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  <p className="text-label-sm uppercase tracking-[0.15em] text-gold-light/80 mb-2">
                    {card.label}
                  </p>

                  <h3 className="font-display text-display-md md:text-display-lg text-white leading-none mb-3">
                    {card.title}
                  </h3>

                  <div className="h-[1px] w-10 bg-gold/50 mb-4 transition-all duration-400 group-hover:w-16 group-hover:bg-gold" />

                  <p className="text-body-sm text-neutral-gray-200/90 font-sans leading-relaxed max-w-[280px]">
                    {card.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
