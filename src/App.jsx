import React from "react";
import Navbar from "./Component/navbar";
import HeroSection from "./Component/HeroSection";
import FeaturesSection from "./Component/FeaturesSection";
import WorkFlow from "./Component/WorkFlow";
import Pricing from "./Component/Pricing";
import Testimonials from "./Component/Testimonials";
import Footer from "./Component/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <WorkFlow />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
