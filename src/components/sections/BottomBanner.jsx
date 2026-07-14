import { motion } from 'framer-motion';

export default function BottomBanner() {
  return (
    <section className="bg-cream px-6 pb-20 md:px-10 lg:px-16 xl:px-20">
      <motion.div 
        className="max-w-6xl mx-auto border-2 border-emerald-dark bg-emerald-dark/5 p-8 md:p-16 lg:p-20 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: true, margin: '-50px' }}
      >
        <h3 className="font-display text-2xl md:text-3xl lg:text-4xl text-emerald-dark leading-relaxed">
          "This Is Not My Story, It's A Reminder, That Every Founder's Story Can Have A Soul."
        </h3>
        <p className="mt-8 text-label-md uppercase tracking-[0.15em] text-gold font-bold">
          - Alkesh Gupta
        </p>
      </motion.div>
    </section>
  );
}
