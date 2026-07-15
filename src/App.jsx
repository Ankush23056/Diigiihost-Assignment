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
  NextChapter,
  BottomBanner,
} from './components/sections';

export default function App() {
  return (
    <Layout>
      <Hero />
      <NarrativeQuestions />
      <BrandBanner />

      <TeamOrigin />
      <BrandSoulPhilosophy />
      <BrandList />
      
      <SoulBehindBrand />
      <Manifesto />
      <Testimonials />

      <NextChapter />
      <BottomBanner />
    </Layout>
  );
}
