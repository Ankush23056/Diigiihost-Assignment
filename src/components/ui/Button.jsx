import { motion } from 'framer-motion';

/**
 * Button — primary interactive element.
 *
 * Variants:
 *  • primary  — gold background, dark text
 *  • outline  — transparent with gold border
 *  • dark     — emerald background, white text
 *  • ghost    — no background, subtle hover
 */

const variantStyles = {
  primary:
    'bg-gold text-emerald-dark hover:bg-gold-dark active:bg-gold-dark shadow-gold font-semibold',
  outline:
    'border-2 border-gold text-gold hover:bg-gold hover:text-emerald-dark font-semibold',
  dark:
    'bg-emerald-dark text-white hover:bg-emerald-light font-semibold',
  ghost:
    'text-neutral-gray-600 hover:text-emerald-dark font-medium',
};

const sizeStyles = {
  sm: 'px-4 py-2 text-body-sm rounded-md',
  md: 'px-6 py-3 text-body-md rounded-lg',
  lg: 'px-8 py-4 text-body-lg rounded-xl',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  as: Component = 'button',
  ...props
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="inline-block"
    >
      <Component
        className={`
          inline-flex items-center justify-center gap-2
          transition-all duration-300 ease-smooth
          cursor-pointer select-none
          ${variantStyles[variant]}
          ${sizeStyles[size]}
          ${className}
        `}
        {...props}
      >
        {children}
      </Component>
    </motion.div>
  );
}
