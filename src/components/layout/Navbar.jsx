import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui';
import { navLinks } from '../../data/navigation';

const mobileMenuVariants = {
  closed: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1], staggerChildren: 0.07 },
  },
};

const mobileLinkVariants = {
  closed: { opacity: 0, x: -20 },
  open: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

function HamburgerIcon({ isOpen }) {
  const lineBase =
    'block h-[2px] w-6 rounded-full bg-emerald-dark transition-all duration-300 ease-smooth';

  return (
    <div className="relative flex h-5 w-6 flex-col items-center justify-center gap-[5px]">
      <span
        className={`${lineBase} ${
          isOpen ? 'translate-y-[7px] rotate-45' : ''
        }`}
      />
      <span
        className={`${lineBase} ${isOpen ? 'scale-x-0 opacity-0' : ''}`}
      />
      <span
        className={`${lineBase} ${
          isOpen ? '-translate-y-[7px] -rotate-45' : ''
        }`}
      />
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header
      className={`
        fixed top-0 left-0 z-50 w-full
        transition-all duration-400 ease-smooth
        ${
          scrolled
            ? 'bg-cream/90 backdrop-blur-md shadow-soft'
            : 'bg-transparent'
        }
      `}
    >
      <nav className="content-wrapper flex items-center justify-between px-6 md:px-10 lg:px-16 xl:px-20 py-4 lg:py-5">
        <a
          href="#"
          className="relative z-50 font-display text-[1.5rem] font-bold tracking-tight text-emerald-dark select-none"
        >
          ALKESH
        </a>

        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="gold-underline text-body-sm font-medium text-neutral-gray-700 hover:text-emerald-dark transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button variant="outline" size="sm">
            Work With Me
          </Button>
        </div>

        <button
          type="button"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          className="relative z-50 flex lg:hidden items-center justify-center rounded-lg p-2 hover:bg-cream-warm/60 transition-colors duration-200"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <HamburgerIcon isOpen={mobileOpen} />
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-cream/98 backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <motion.li key={link.href} variants={mobileLinkVariants}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-display text-display-sm text-emerald-dark hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            <motion.div variants={mobileLinkVariants} className="mt-12">
              <Button
                variant="primary"
                size="lg"
                onClick={() => setMobileOpen(false)}
              >
                Work With Me
              </Button>
            </motion.div>

            <motion.div
              variants={mobileLinkVariants}
              className="mt-16 h-[1px] w-24 bg-gold/40"
            />
            <motion.p
              variants={mobileLinkVariants}
              className="mt-4 text-label-sm uppercase tracking-widest text-neutral-gray-400"
            >
              Diigiihost &copy; {new Date().getFullYear()}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
