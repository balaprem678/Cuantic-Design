import Hero from '@/components/home/Hero';
import StatsBar from '@/components/home/StatsBar';
import WhoWeAre from '@/components/home/WhoWeAre';
import Services from '@/components/home/Services';
import Process from '@/components/home/Process';
import WhyCuantic from '@/components/home/WhyCuantic';
import PortfolioPreview from '@/components/home/PortfolioPreview';
import Testimonials from '@/components/home/Testimonials';
import Faq from '@/components/home/Faq';
import CtaBand from '@/components/home/CtaBand';

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <WhoWeAre />
      <Services />
      <Process />
      <WhyCuantic />
      <PortfolioPreview />
      <Testimonials />
      <Faq />
      <CtaBand />
    </>
  );
}
