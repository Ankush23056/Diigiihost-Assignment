import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';


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
      <Navbar />

      <motion.main
        className="flex-1 pt-[72px] lg:pt-[80px]"
        variants={pageVariants}
        initial="hidden"
        animate="visible"
      >
        {children}
      </motion.main>

      <Footer />
    </div>
  );
}
