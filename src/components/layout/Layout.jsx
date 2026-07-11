import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

/**
 * Layout — root shell that wraps every page.
 *
 * Provides:
 *  • Fixed Navbar at the top with scroll-aware styling
 *  • A flex column that pushes the Footer to the bottom on short pages
 *  • Subtle page-enter animation via Framer Motion
 *  • Top padding to offset the fixed navbar height
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
      {/* ── Navbar (fixed) ────────────────────────────────── */}
      <Navbar />

      {/* ── Main Content ─────────────────────────────────── */}
      <motion.main
        className="flex-1 pt-[72px] lg:pt-[80px]"
        variants={pageVariants}
        initial="hidden"
        animate="visible"
      >
        {children}
      </motion.main>

      {/* ── Footer ────────────────────────────────────────── */}
      <Footer />
    </div>
  );
}
