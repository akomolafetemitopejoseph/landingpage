import React from "react";
import { CircleStar } from "lucide-react";
import { Sparkle } from "lucide-react";
import { Sparkles } from "lucide-react";
import { Projector } from "lucide-react";
import { Cog } from "lucide-react";
import { ChartNetwork } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <CircleStar />,
      text: "Multi-platform compatibility",
      description:
        "Build VR applications that run seamlessly across multiple platforms",
    },
    {
      icon: <Sparkle />,
      text: "build in templates",
      description:
        "Jump start your VR projects with a variety of biult-in templates for different types of application and enveronments ",
    },
    {
      icon: <Sparkles />,
      text: "Drag-and-drop interface",
      description:
        "Easily design and change your VR environments with a user-friendly drag-and-drop interface",
    },

    {
      icon: <Projector />,
      text: "Real-Time preview",
      description:
        "Preview your VR application in real-time as you make changes allowing for quick iterations and adjustments",
    },

    {
      icon: <Cog />,
      text: "Collaboration tools",
      description:
        "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing",
    },

    {
      icon: <ChartNetwork />,
      text: "Analytics dashboard",
      description:
        "Gain valuable insights into user interactions and behaviour with your VR applications with an integrated analytics dashboard",
    },
  ];
  return (
    <div
      data-aos="fade-left"
      data-aos-anchor="#example-anchor"
      data-aos-offset="500"
      data-aos-duration="500"
      className="relative mt-20 border-b border-neutral-800 min-h-[800px]"
    >
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          features
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          {" "}
          Easily build{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            your code
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20 ">
        {features.map((features, index) => (
          <div key={index} className="w-full sm:1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                {features.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl capitalize">
                  {features.text}
                </h5>
                <p className="text-md lg:text-lg p-2 mb-20 text-neutral-500">
                  {features.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
