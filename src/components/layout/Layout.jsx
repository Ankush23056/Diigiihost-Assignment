import { motion } from 'framer-motion';

/**
 * Layout — root shell that wraps every page.
 *
 * Provides:
 *  • Consistent horizontal padding that scales from mobile → desktop
 *  • A max-width content container so nothing stretches too wide
 *  • A flex column that pushes the footer to the bottom on short pages
 *  • Subtle page-enter animation via Framer Motion
 *
 * Navbar and Footer will be slotted in here once they're built.
 */

const pageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-cream font-sans text-neutral-gray-800">
      {/* ── Navbar slot (placeholder) ────────────────────── */}
      {/* <Navbar /> */}

      {/* ── Main Content ─────────────────────────────────── */}
      <motion.main
        className="flex-1"
        variants={pageVariants}
        initial="hidden"
        animate="visible"
      >
        {children}
      </motion.main>

      {/* ── Footer slot (placeholder) ────────────────────── */}
      {/* <Footer /> */}
    </div>
  );
}
