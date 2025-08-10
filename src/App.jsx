import React from "react";
import Navbar from "./Component/navbar";
import HeroSection from "./Component/HeroSection";
import FeaturesSection from "./Component/FeaturesSection";
import WorkFlow from "./Component/WorkFlow";
import Pricing from "./Component/Pricing";


const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <WorkFlow />
      <Pricing />
    </div>
  );
};

export default App;
