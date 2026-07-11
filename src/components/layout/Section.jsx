/**
 * Section — reusable wrapper for each landing-page section.
 *
 * Handles consistent padding, optional dark/accent backgrounds,
 * and centered content constraining.
 */
import { forwardRef } from 'react';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const Section = forwardRef(function Section(
  {
    children,
    className = '',
    variant = 'light',   // 'light' | 'dark' | 'cream' | 'accent'
    noPadding = false,
    fullWidth = false,
    id,
    ...rest
  },
  ref,
) {
  const bgMap = {
    light:  'bg-white text-neutral-gray-800',
    dark:   'bg-emerald-dark text-white',
    cream:  'bg-cream text-neutral-gray-800',
    accent: 'bg-cream-warm text-neutral-gray-800',
  };

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`
        ${bgMap[variant] || bgMap.light}
        ${noPadding ? '' : 'section-padding'}
        ${className}
      `}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      {...rest}
    >
      <div className={fullWidth ? '' : 'content-wrapper'}>
        {children}
      </div>
    </motion.section>
  );
});

export default Section;
