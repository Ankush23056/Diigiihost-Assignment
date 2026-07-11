import { Layout } from './components/layout';
import { Section } from './components/layout';
import { Badge } from './components/ui';

/**
 * App — root component.
 *
 * Currently renders the Layout shell with a placeholder section
 * to validate the design-token pipeline and layout structure.
 */
export default function App() {
  return (
    <Layout>
      {/* ── Validation Section ─── remove once real sections exist ── */}
      <Section variant="cream">
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <Badge variant="gold">Foundation Ready</Badge>

          <h1 className="mt-6 font-display text-display-lg md:text-display-xl text-emerald-dark">
            Diigi<span className="text-gold">i</span>host
          </h1>

          <p className="mt-4 max-w-narrow text-body-lg text-neutral-gray-500 font-sans">
            Configuration tokens, layout shell, and design system are wired up.
            Start building sections to bring this page to life.
          </p>

          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Badge variant="outline">Vite + React</Badge>
            <Badge variant="outline">Tailwind v3</Badge>
            <Badge variant="outline">Framer Motion</Badge>
          </div>
        </div>
      </Section>

      {/* ── Dark variant test ─────────────────────────────── */}
      <Section variant="dark">
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <h5 className="label-text text-gold-light">Dark Section Preview</h5>
          <h2 className="mt-4 font-display text-display-md text-white">
            Emerald & <span className="text-gold">Gold</span>
          </h2>
          <p className="mt-3 max-w-narrow text-body-md text-neutral-gray-300 font-sans">
            This validates the dark section variant with proper contrast ratios.
          </p>
        </div>
      </Section>
    </Layout>
  );
}
