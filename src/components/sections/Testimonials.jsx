import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import testimonials from '../../data/testimonials';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="bg-cream section-padding overflow-hidden">
      <div className="content-wrapper">
        <motion.div
          className="text-center mb-16 md:mb-20"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <p className="text-label-md uppercase tracking-[0.15em] text-gold mb-4">
            The Impact
          </p>
          <h2 className="font-display text-display-md md:text-display-lg text-emerald-dark leading-tight">
            Don't just take our word for it.
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="min-h-[250px] md:min-h-[200px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="text-center w-full"
              >
                <p className="font-display text-display-sm md:text-display-md text-neutral-gray-800 leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div className="flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-gold/30">
                    <img 
                      src={testimonials[currentIndex].avatar} 
                      alt={testimonials[currentIndex].author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-label-md uppercase tracking-wider text-emerald-dark font-bold">
                    {testimonials[currentIndex].author}
                  </h4>
                  <p className="text-body-sm text-neutral-gray-500 font-sans mt-1">
                    {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center items-center gap-6 mt-12">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-neutral-gray-300 flex items-center justify-center text-neutral-gray-500 hover:border-gold hover:text-gold transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === currentIndex ? 'bg-gold w-6' : 'bg-neutral-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-neutral-gray-300 flex items-center justify-center text-neutral-gray-500 hover:border-gold hover:text-gold transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
