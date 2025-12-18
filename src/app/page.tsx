import React, { Suspense } from "react";
import dynamic from "next/dynamic";

import Hero from "@components/Hero";

const Navbar = dynamic(() => import("@components/Navbar"), {
  ssr: true,
});

const CoolMarquee = dynamic(() => import("@components/CoolMarquee"), {
  ssr: false,
});

const Footer = dynamic(() => import("@components/Footer"), {
  ssr: true,
});

const CursorTrail = dynamic(() => import("@components/CursorTrail"), { ssr: false });

const BackgroundLayer = dynamic(() => import("@components/BackgroundLayer"), { ssr: false });

const Home = () => {
  return (
    <>
      <Navbar />
      <CursorTrail/>
      <BackgroundLayer/>
      
      <Suspense fallback={null}>
        <Hero />
      </Suspense>

      <Suspense fallback={null}>
        <CoolMarquee />
      </Suspense>

      <Footer />
    </>
  );
};

export default Home;