import React from "react";
import img1 from "../assets/pics1.jpg";
import { Flower } from "lucide-react";

const WorkFlow = () => {
  const checklist = [
    {
      title: "Code made easy",

      description:
        "track the performance of your VR apps gain insights into user behavior",
    },
    {
      title: "Review code without worry",

      description:
        "track the performance of your VR apps gain insights into user behavior",
    },
    {
      title: "AI assistance to reduce time",

      description:
        "track the performance of your VR apps gain insights into user behavior",
    },
    {
      title: "Share work in minutes",

      description:
        "track the performance of your VR apps gain insights into user behavior",
    },
  ];
  return (
    <div id="work" className="mt-20">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Accelerate your{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          coding work flow
        </span>
      </h2>

      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="lg:flex justify-center items-center"
      >
        <div className="p-5  lg:1/2">
          <img className="w-150" src={img1} alt="code" />
        </div>
        <div
          className=" 
        pt-10 w-full lg:w-1/2"
        >
          {checklist.map((checklist, index) => (
            <div key={index} className="mb-12 flex">
              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center rounded-full">
                <Flower />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl lg:text-2xl">
                  {" "}
                  {checklist.title}
                </h5>
                <p className="text-md lg:text-xl text-neutral-500">
                  {checklist.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;
