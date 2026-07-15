import { motion } from 'framer-motion';
import { footerNavigateLinks, footerExploreLinks, socialLinks } from '../../data/navigation';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Footer() {
  return (
    <footer className="bg-emerald-dark text-white">
      <motion.div
        className="content-wrapper px-6 md:px-10 lg:px-16 xl:px-20 pt-20 pb-12 lg:pt-28 lg:pb-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">

          <motion.div
            className="lg:col-span-4"
            variants={itemVariants}
          >
            <h3 className="font-display text-display-sm md:text-display-md text-white leading-tight">
              Maybe it's time we build{' '}
              <span className="text-gold italic">something</span>{' '}
              together.
            </h3>
            <div className="mt-6 h-[1px] w-16 bg-gold/40" />
          </motion.div>

          <motion.div
            className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8"
            variants={itemVariants}
          >
            <div>
              <h6 className="text-label-sm uppercase tracking-widest text-gold mb-5">
                Navigate
              </h6>
              <ul className="flex flex-col gap-3">
                {footerNavigateLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-body-sm text-neutral-gray-300 hover:text-gold transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h6 className="text-label-sm uppercase tracking-widest text-gold mb-5">
                Explore
              </h6>
              <ul className="flex flex-col gap-3">
                {footerExploreLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-body-sm text-neutral-gray-300 hover:text-gold transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h6 className="text-label-sm uppercase tracking-widest text-gold mb-5">
                Connect
              </h6>
              <ul className="flex flex-col gap-3">
                {socialLinks.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-body-sm text-neutral-gray-300 hover:text-gold transition-colors duration-300 lowercase"
                    >
                      {social.label.toLowerCase()}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="border-t border-neutral-gray-700/50">
        <div className="content-wrapper px-6 md:px-10 lg:px-16 xl:px-20 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <a
            href="#"
            className="font-display text-[1.75rem] font-bold tracking-tight text-gold select-none"
          >
            ALKESH
          </a>

          <p className="text-label-sm uppercase tracking-widest text-neutral-gray-500 text-center md:text-right">
            &copy; {new Date().getFullYear()} Alkesh &middot; Diigiihost. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
