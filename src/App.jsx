import { Layout } from './components/layout';
import { Hero, NarrativeQuestions, BrandBanner } from './components/sections';

/**
 * App — root component.
 *
 * Renders the top-fold sections of the Diigiihost landing page
 * inside the Layout shell (Navbar + Footer).
 */
export default function App() {
  return (
    <Layout>
      <Hero />
      <NarrativeQuestions />
      <BrandBanner />
    </Layout>
  );
}
