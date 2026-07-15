import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import portfolioBrands from '../../data/portfolioBrands';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.06, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const thumbnailVariants = {
  hidden: { opacity: 0, x: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
  exit: {
    opacity: 0,
    x: -10,
    scale: 0.95,
    transition: { duration: 0.3 },
  },
};

export default function BrandList() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="brand-list" className="bg-cream section-padding overflow-hidden">
      <div className="content-wrapper">
        <motion.div
          className="mb-16 md:mb-20"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          custom={0}
        >
          <h2 className="font-display text-display-lg md:text-display-xl lg:text-display-2xl text-emerald-dark leading-[1.08]">
            The Stronger The Soul.
            <br />
            <span className="text-gold">The Stronger The Brand.</span>
          </h2>

          <div className="mt-6 flex items-center gap-4">
            <div className="h-[1px] w-10 bg-gold/50" />
            <p className="text-label-md uppercase tracking-[0.15em] text-gold">
              Brands That Carry My Soul
            </p>
          </div>
        </motion.div>

        <div className="relative">
          <div className="h-[1px] w-full bg-neutral-gray-200" />

          {portfolioBrands.map((brand, i) => (
            <motion.div
              key={brand.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              custom={i + 1}
            >
              <div
                className="group relative grid grid-cols-1 md:grid-cols-12 items-center gap-4 md:gap-6 py-7 md:py-8 border-b border-neutral-gray-200 transition-colors duration-300 hover:bg-cream-warm/50 cursor-pointer"
                onMouseEnter={() => setHoveredId(brand.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="md:col-span-1 hidden md:block">
                  <span className="text-label-sm text-neutral-gray-400 font-mono">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="md:col-span-4">
                  <h3 className="font-display text-display-sm md:text-[1.6rem] text-emerald-dark group-hover:text-gold transition-colors duration-300 leading-tight">
                    {brand.name}
                  </h3>
                </div>

                <div className="md:col-span-4">
                  <p className="text-body-sm text-neutral-gray-500 font-sans">
                    {brand.subtitle}
                  </p>
                </div>

                <div className="md:col-span-3 flex items-center justify-end gap-3">
                  {brand.featured && (
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-label-sm uppercase tracking-wider bg-gold/15 text-gold border border-gold/20">
                      Featured
                    </span>
                  )}

                  <motion.svg
                    className="w-5 h-5 text-neutral-gray-400 group-hover:text-gold transition-colors duration-300"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    animate={{ x: hoveredId === brand.id ? 4 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </motion.svg>
                </div>

                <AnimatePresence>
                  {(brand.featured || hoveredId === brand.id) && brand.thumbnail && (
                    <motion.div
                      className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 hidden lg:block z-10 pointer-events-none"
                      variants={thumbnailVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <div className="w-48 xl:w-56 overflow-hidden rounded-lg shadow-elevated border border-cream-dark">
                        <img
                          src={brand.thumbnail}
                          alt={`${brand.name} preview`}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 md:mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
        >
          <p className="text-body-md text-neutral-gray-400 font-sans">
            {portfolioBrands.length} brands built with soul &middot; and counting.
          </p>
          <div className="h-[1px] w-16 bg-gold/30" />
        </motion.div>
      </div>
    </section>
  );
}
