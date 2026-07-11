import { motion } from 'framer-motion';

/* ─── Footer Link Columns ────────────────────────────── */
const columnOne = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

const columnTwo = [
  { label: 'Diigiihost', href: '#diigiihost' },
  { label: 'Quote Your Price', href: '#quote-your-price' },
  { label: 'Best Rate Websites', href: '#best-rate-websites' },
];

/* ─── Social Links ───────────────────────────────────── */
const socials = [
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43z" />
        <polygon points="9.75,15.02 15.5,11.75 9.75,8.48" fill="#0B3D2E" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'X',
    href: 'https://x.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

/* ─── Stagger animation for columns ──────────────────── */
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

/* ─── Footer Component ───────────────────────────────── */
export default function Footer() {
  return (
    <footer className="bg-emerald-dark text-white">
      {/* ── Main Footer Grid ──────────────────────────────── */}
      <motion.div
        className="content-wrapper px-6 md:px-10 lg:px-16 xl:px-20 pt-20 pb-12 lg:pt-28 lg:pb-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">

          {/* ── Left: Tagline ──────────────────────────────── */}
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

          {/* ── Center: Link Columns ───────────────────────── */}
          <motion.div
            className="lg:col-span-4 grid grid-cols-2 gap-8"
            variants={itemVariants}
          >
            {/* Column 1 */}
            <div>
              <h6 className="text-label-sm uppercase tracking-widest text-gold mb-5">
                Navigate
              </h6>
              <ul className="flex flex-col gap-3">
                {columnOne.map((link) => (
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

            {/* Column 2 */}
            <div>
              <h6 className="text-label-sm uppercase tracking-widest text-gold mb-5">
                Explore
              </h6>
              <ul className="flex flex-col gap-3">
                {columnTwo.map((link) => (
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
          </motion.div>

          {/* ── Right: Socials ─────────────────────────────── */}
          <motion.div
            className="lg:col-span-4 lg:flex lg:flex-col lg:items-end"
            variants={itemVariants}
          >
            <h6 className="text-label-sm uppercase tracking-widest text-gold mb-5">
              Connect
            </h6>
            <div className="flex items-center gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group flex items-center justify-center w-10 h-10 rounded-full border border-neutral-gray-700 text-neutral-gray-400 hover:border-gold hover:text-gold hover:bg-gold/10 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Compact social label list below icons */}
            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 lg:justify-end">
              {socials.map((social) => (
                <a
                  key={`${social.label}-text`}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-label-sm uppercase tracking-wider text-neutral-gray-500 hover:text-gold transition-colors duration-300"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* ── Bottom Bar ────────────────────────────────────── */}
      <div className="border-t border-neutral-gray-700/50">
        <div className="content-wrapper px-6 md:px-10 lg:px-16 xl:px-20 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo Signature */}
          <a
            href="#"
            className="font-display text-[1.75rem] font-bold tracking-tight text-gold select-none"
          >
            ALKESH
          </a>

          {/* Copyright */}
          <p className="text-label-sm uppercase tracking-widest text-neutral-gray-500 text-center md:text-right">
            &copy; {new Date().getFullYear()} Alkesh &middot; Diigiihost. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
