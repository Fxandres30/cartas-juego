'use client';

import { useEffect, useState } from 'react';
import Header from "@/app/components/Header";
import IntroSection from "./components/IntroSection";
import Footer from "@/app/Footer";
import TermsModal from "./components/TermsModal";
import GamesSection from './components/GamesSection';

export default function Home() {
  const [accepted, setAccepted] = useState<boolean | null>(null);

  useEffect(() => {
    const storedAccepted = localStorage.getItem('termsAccepted');
    setAccepted(storedAccepted === 'true');
  }, []);

  const handleAccept = () => {
    localStorage.setItem('termsAccepted', 'true');
    setAccepted(true);
  };

  if (accepted === null) return null;

  return (
    <>
      {!accepted && <TermsModal onAccept={handleAccept} />}
      {accepted && (
        <>
          <Header />
          <main>
            <IntroSection />
            
            <GamesSection />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
