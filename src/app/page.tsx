import './globals.css';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SimanimBrowser from '@/components/SimanimBrowser';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <SimanimBrowser />
      <Footer />
    </>
  );
}
