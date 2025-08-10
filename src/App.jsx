import React from "react";
import Navbar from "./Component/navbar";
import HeroSection from "./Component/HeroSection";
import FeaturesSection from "./Component/FeaturesSection";
import WorkFlow from "./Component/WorkFlow";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <WorkFlow />
    </div>
  );
};

export default App;
