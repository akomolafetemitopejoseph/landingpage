import React from "react";
import { BadgeCheck } from "lucide-react";

const Pricing = () => {
  const priceOptions = [
    {
      title: "free",
      price: "$0",
      features: [
        "Private board sharing",
        "5 Gb storage",
        "We Analytics",
        "Private Modes",
      ],
    },
    {
      title: "pro",
      price: "$10",
      features: [
        "Private board sharing",
        "10 Gb storage",
        "Web Analytics (Advance)",
        "Private Modes",
      ],
    },
    {
      title: "enterprise",
      price: "$200",
      features: [
        "Private board sharing",
        "Unlimited storage",
        "High performance network",
        "Private Modes",
      ],
    },
  ];
  return (
    <div id="price" className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:6xl text-center my-8 tracking-wider capitalize">
        pricing
      </h2>
      <div
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500"
        className="flex m-5 flex-wrap lg:flex-nowrap justify-center gap-4"
      >
        {priceOptions.map((priceOptions, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="p-10 border border-neutral-700 rounded-xl capitalize">
              {" "}
              <p className="text-4xl mb-8">
                {priceOptions.title}
                {priceOptions.title === "pro" && (
                  <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2">
                    (Most popular)
                  </span>
                )}
              </p>
              <p className="mb-8">
                <span className="text-5xl mt-6 mr-2">{priceOptions.price}</span>
                <span className="text-neutral-400 tracking-tight">Month</span>
                <ul>
                  {priceOptions.features.map((priceOptions, index) => (
                    <li key={index} className="mt-8 flex items-center">
                      <BadgeCheck />
                      <span className="ml-2">{priceOptions}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transparent duration-200 "
                >
                  subscribe
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
