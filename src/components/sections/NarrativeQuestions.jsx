import { motion } from 'framer-motion';

const questions = [
  {
    id: 1,
    number: '01',
    question: 'Why do most brands look the same — polished but empty, loud but forgettable?',
    context:
      'Every scroll, every swipe — the same templates, the same stock photos, the same hollow promises. I wondered: where\'s the soul?',
  },
  {
    id: 2,
    number: '02',
    question: 'Why do founders burn out building brands that don\'t feel like them?',
    context:
      'I watched brilliant people lose themselves in someone else\'s playbook. The frameworks worked — but the founder was gone.',
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

const lineGrow = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function NarrativeQuestions() {
  return (
    <section
      id="narrative"
      className="bg-cream section-padding overflow-hidden"
    >
      <div className="content-wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <motion.div
            className="lg:col-span-5"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            custom={0}
          >
            <p className="text-label-md uppercase tracking-[0.15em] text-gold mb-4">
              The Origin
            </p>

            <h2 className="font-display text-display-md md:text-display-lg text-emerald-dark leading-tight">
              My journey didn't start with a business plan.
            </h2>

            <motion.div
              className="mt-4 h-[2px] w-16 bg-gold/60 origin-left"
              variants={lineGrow}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />

            <h2 className="mt-4 font-display text-display-md md:text-display-lg text-emerald-dark leading-tight">
              It started with{' '}
              <span className="text-gold italic">questions</span>.
            </h2>
          </motion.div>

          <div className="lg:col-span-7 lg:pl-8 flex flex-col gap-10">
            {questions.map((q, i) => (
              <motion.div
                key={q.id}
                className="group relative pl-8 md:pl-12 border-l-2 border-gold/20 hover:border-gold/60 transition-colors duration-400"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                custom={i + 1}
              >
                <span className="absolute -left-[1px] top-0 -translate-x-1/2 bg-cream px-1 text-label-sm text-gold font-semibold">
                  {q.number}
                </span>

                <h3 className="font-display text-display-sm md:text-[1.65rem] text-emerald-dark leading-snug">
                  {q.question}
                </h3>

                <p className="mt-4 text-body-md text-neutral-gray-500 font-sans leading-relaxed max-w-[580px]">
                  {q.context}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
