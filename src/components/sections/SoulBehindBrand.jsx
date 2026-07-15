import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function SoulBehindBrand() {
  return (
    <section id="founder" className="bg-cream section-padding overflow-hidden">
      <div className="content-wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <p className="text-label-md uppercase tracking-[0.15em] text-gold mb-6">
              The Soul Behind the Brand
            </p>
            <h2 className="font-display text-display-md md:text-display-lg text-emerald-dark leading-tight mb-8">
              I believe that true creation requires more than strategy—it requires <span className="text-gold italic">soul</span>.
            </h2>
            <div className="flex flex-col gap-5 text-body-md text-neutral-gray-600 font-sans leading-relaxed">
              <p>
                As a Founder and Creator, my journey has never been about following a standard playbook. It has always been about asking the right questions and diving deep into the core identity of a vision.
              </p>
              <p>
                When we build, we don't just assemble assets. We excavate the essence of your business and transform it into a digital experience that speaks directly to the hearts of your audience.
              </p>
            </div>
            
            <div className="mt-10">
              <img src="/images/alkesh.png" alt="Alkesh Signature" className="h-12 object-contain opacity-50 sepia mix-blend-multiply" style={{ filter: 'grayscale(1) brightness(0.2) sepia(1) hue-rotate(20deg) saturate(3)' }} />
              <p className="font-display text-xl font-bold tracking-tight text-emerald-dark mt-2 select-none">
                ALKESH GUPTA
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative lg:ml-auto w-full max-w-md mx-auto lg:max-w-none"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="absolute inset-0 -translate-x-4 translate-y-4 border border-gold/40 z-0"></div>
            
            <div className="relative z-10 bg-emerald-dark aspect-[4/5] overflow-hidden shadow-2xl">
              <img 
                src="/images/alkesh.png" 
                alt="Alkesh Gupta Portrait" 
                className="w-full h-full object-cover object-center opacity-90 hover:opacity-100 transition-opacity duration-500 hover:scale-105"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gold/10 rounded-full blur-2xl -z-10"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
