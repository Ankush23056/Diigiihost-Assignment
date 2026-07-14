import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import testimonials from '../../data/testimonials';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Testimonials() {
  const scrollRef = useRef(null);

  return (
    <section id="testimonials" className="bg-cream section-padding overflow-hidden relative">
      <div className="content-wrapper">
        <motion.div
          className="mb-16 md:mb-20"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <p className="text-label-md uppercase tracking-[0.15em] text-gold mb-4">
            What People Say
          </p>
          <h2 className="font-display text-display-md md:text-display-lg text-emerald-dark leading-tight">
            Our Work Speaks For Itself.
          </h2>
        </motion.div>

        {/* Horizontal scroll container */}
        <div className="relative">
          
          {/* Circular Drag/Slide Badge */}
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-8 z-10 pointer-events-none hidden md:flex items-center justify-center w-24 h-24 rounded-full bg-gold/90 text-white shadow-xl rotate-[-15deg] backdrop-blur-sm">
            <span className="text-label-sm uppercase tracking-wider font-bold">Slide &rarr;</span>
          </div>

          <div 
            ref={scrollRef}
            className="flex gap-6 md:gap-8 overflow-x-auto pb-12 pt-4 px-4 -mx-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.id}
                className="flex-shrink-0 w-[85vw] md:w-[600px] bg-white p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-neutral-gray-200 snap-center rounded-sm"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true, margin: '-50px' }}
              >
                <svg className="w-10 h-10 text-gold mb-6 opacity-40" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                
                <p className="font-display text-xl md:text-2xl text-emerald-dark leading-relaxed mb-10 min-h-[120px]">
                  {testimonial.quote}
                </p>
                
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gold/30 flex-shrink-0">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-label-md uppercase tracking-wider text-emerald-dark font-bold">
                      {testimonial.author}
                    </h4>
                    <p className="text-body-sm text-neutral-gray-500 font-sans mt-1">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
