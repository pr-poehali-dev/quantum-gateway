import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhatIsArt } from "@/components/WhatIsArt";
import { FeaturedArtists } from "@/components/FeaturedArtists";
import { ArtTypes } from "@/components/ArtTypes";
import { ArtSpaces } from "@/components/ArtSpaces";
import { ArtworkGrid } from "@/components/ArtworkGrid";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <WhatIsArt />
      <FeaturedArtists />
      <ArtTypes />
      <ArtSpaces />
      <ArtworkGrid />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
