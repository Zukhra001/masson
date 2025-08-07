import dynamic from 'next/dynamic';
import HeroSection from './components/HeroSection';
import Info from './components/Info';

const MasonicSection = dynamic(() => import('./components/MasonicSection'), {
  loading: () => <div className="h-screen bg-gradient-to-b from-black to-gray-900 animate-pulse" />
});

const ValuesSection = dynamic(() => import('./components/ValuesSection'), {
  loading: () => <div className="h-96 bg-black animate-pulse" />
});

const MainLodges = dynamic(() => import('./components/MainLobges'), {
  loading: () => <div className="h-screen bg-gradient-to-b from-gray-900 to-black animate-pulse" />
});

const FooterSection = dynamic(() => import('./components/FooterSection'), {
  loading: () => <div className="h-64 bg-gradient-to-r from-gray-900 to-gray-800 animate-pulse" />
});

export default function Home() {
  return (
    <>
      <HeroSection />
      <Info />
      <MasonicSection />
      <ValuesSection />
      <MainLodges />
      <FooterSection />
    </>
  );
}