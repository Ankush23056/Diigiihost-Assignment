import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Manifesto() {
  return (
    <section id="manifesto" className="bg-emerald-dark section-padding text-white overflow-hidden">
      <div className="content-wrapper">
        <motion.div
          className="text-center mb-20 md:mb-32"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="font-display text-display-md md:text-display-lg leading-tight text-gold">
            The Brand Soul Manifesto
          </h2>
        </motion.div>

        <div className="flex flex-col gap-24 md:gap-32">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div 
              className="order-2 md:order-1 relative aspect-square w-full max-w-sm mx-auto md:max-w-none md:mx-0"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <img src="/images/manifesto_cube.png" alt="3D Geometric Cube" className="w-full h-full object-contain" />
            </motion.div>
            <motion.div 
              className="order-1 md:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <h3 className="font-display text-display-sm md:text-display-md leading-tight text-neutral-gray-100">
                A BRAND is not a logo...<br/>
                <span className="text-gold italic text-2xl md:text-3xl mt-4 block">It's a living, breathing entity.</span>
              </h3>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div 
              className="order-1 md:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <h3 className="font-display text-display-sm md:text-display-md leading-tight text-neutral-gray-100">
                A FOUNDER Is Not A Title...<br/>
                <span className="text-gold italic text-2xl md:text-3xl mt-4 block">It's a lifelong commitment to creation.</span>
              </h3>
            </motion.div>
            <motion.div 
              className="order-2 md:order-2 w-full"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <div className="aspect-[16/9] md:aspect-[4/3] w-full overflow-hidden shadow-2xl border border-white/10">
                <img src="/images/manifesto_creator.png" alt="Creator writing" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div 
              className="order-2 md:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <div className="aspect-square w-full overflow-hidden shadow-2xl border border-white/10">
                <img src="/images/manifesto_team.png" alt="Team meeting" className="w-full h-full object-cover" />
              </div>
            </motion.div>
            <motion.div 
              className="order-1 md:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <h3 className="font-display text-display-sm md:text-display-md leading-tight text-neutral-gray-100">
                And BUSINESS Is Not About The Market...<br/>
                <span className="text-gold italic text-2xl md:text-3xl mt-4 block">It's about the people you serve.</span>
              </h3>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
