import Header from './components/Header';
import Info from './components/Info';
import MasonicSection from './components/MasonicSection';
import ValuesSection from './components/ValuesSection';
import HeroSection from './components/HeroSection';
import FooterSection from "./components/FooterSection";
import MainLodges from './components/MainLobges';


export default function Home() {
  return (
    <main >
      <Header />
      <HeroSection />
      <Info />
      <MasonicSection />
      <ValuesSection />
      <MainLodges />
      <FooterSection />
    </main>
  );
}
