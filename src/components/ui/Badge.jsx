/**
 * Badge — small label element for tags, categories, and status indicators.
 *
 * Variants:
 *  • gold    — gold background, dark text
 *  • outline — bordered with gold text
 *  • dark    — emerald background, white text
 *  • light   — cream background, muted text
 */

const variantStyles = {
  gold:    'bg-gold-light text-emerald-dark',
  outline: 'border border-gold text-gold',
  dark:    'bg-emerald-dark text-gold-light',
  light:   'bg-cream-warm text-neutral-gray-600',
};

export default function Badge({
  children,
  variant = 'gold',
  className = '',
}) {
  return (
    <span
      className={`
        inline-flex items-center
        px-3 py-1 rounded-full
        text-label-sm uppercase tracking-widest
        ${variantStyles[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
