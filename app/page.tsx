import Hero from '@/app/home/Hero';
import StatsBar from '@/app/home/StatsBar';
import WhoWeAre from '@/app/home/WhoWeAre';
import Services from '@/app/home/Services';
import Process from '@/app/home/Process';
import WhyCuantic from '@/app/home/WhyCuantic';
import PortfolioPreview from '@/app/home/PortfolioPreview';
import Testimonials from '@/app/home/Testimonials';
import Faq from '@/app/home/Faq';
import CtaBand from '@/app/home/CtaBand';

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
