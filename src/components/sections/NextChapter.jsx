import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function NextChapter() {
  return (
    <section className="bg-cream section-padding overflow-hidden">
      <div className="content-wrapper max-w-5xl">
        <div className="flex flex-col gap-10 md:gap-16">
          
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-7xl text-emerald-dark leading-[1.1] tracking-tight">
              My Next Chapter Is About Building With People...
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="md:pl-16 lg:pl-32"
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-7xl text-neutral-gray-400 leading-[1.1] tracking-tight">
              Through The <span className="text-emerald-dark">Bharat Building Mission</span>...
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="md:pl-32 lg:pl-64 relative"
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-7xl text-neutral-gray-400 leading-[1.1] tracking-tight relative z-10">
              Who Want To Grow With <span className="text-emerald-dark">Purpose</span>...
            </h2>
            
            <div className="absolute -right-4 md:-right-12 -top-12 md:-top-16 z-20">
              <a href="#contact" className="group flex items-center justify-center w-28 h-28 md:w-32 md:h-32 rounded-full bg-emerald-dark hover:bg-gold transition-colors duration-300 text-white shadow-2xl rotate-[15deg] hover:rotate-0">
                <span className="text-label-sm uppercase tracking-widest font-bold text-center leading-tight">
                  Join<br/>Mission
                </span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
