import { Layout } from './components/layout';
import {
  Hero,
  NarrativeQuestions,
  BrandBanner,
  TeamOrigin,
  BrandSoulPhilosophy,
  BrandList,
  SoulBehindBrand,
  Manifesto,
  Testimonials,
} from './components/sections';

/**
 * App — root component.
 *
 * Renders the full landing page inside the Layout shell (Navbar + Footer).
 */
export default function App() {
  return (
    <Layout>
      {/* ── Top Fold ──────────────────────────────────────── */}
      <Hero />
      <NarrativeQuestions />
      <BrandBanner />

      {/* ── Portfolio Core ────────────────────────────────── */}
      <TeamOrigin />
      <BrandSoulPhilosophy />
      <BrandList />
      
      {/* ── Proof & Philosophy ────────────────────────────── */}
      <SoulBehindBrand />
      <Manifesto />
      <Testimonials />
    </Layout>
  );
}
