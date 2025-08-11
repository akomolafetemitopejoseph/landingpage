import React from "react";
import image1 from "../assets/img1.jpg";
import image2 from "../assets/img2.jpg";
import image3 from "../assets/img3.jpg";
import image4 from "../assets/img4.jpg";
import image5 from "../assets/img5.jpg";
import image6 from "../assets/img6.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      user: "Johnson Michael ",
      company: "AOT Enterprises",
      image: image1,
      text: "I am extremely satisfied with the services provided. the team was responsive, professional, and delivered results beyond my expectations.",
    },
    {
      user: "Adekunle Samson ",
      company: "Parties kidies LMT",
      image: image2,
      text: "I couldn't be happier with the outcome of the project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
    },
    {
      user: "Taiye Taiwo ",
      company: "T&M Group of Company",
      image: image3,
      text: "Working the company is a pleasure. their attention to details and commitment to excellence are commendable. i would highly recommend them to anyone looking for to-notch service.",
    },
    {
      user: "Komolafe paul T ",
      company: "Fusion Dynamics",
      image: image4,
      text: "Working with the team at XYZ company was a game-changer for our project. Their attention to details and innovative solutions helped us achieve our gaols faster than we thought possible. we are gratefull for their expertise and professionalism",
    },
    {
      user: "Paul Deborah A ",
      company: "App click",
      image: image5,
      text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
    },
    {
      user: "Babatunde Michael ",
      company: "Oil and gas LMT",
      image: image6,
      text: "The team went about and beyond to ensure our project was a success. Their expertise and dedication are unmatched. i look forward to working with them again in the future.",
    },
  ];
  return (
    <div className="mt-20 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:mask-y-from-20">
        what people are saying
      </h2>
      <div className="flex p-5 flex-wrap justify-center">
        {testimonials.map((testimonials, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 py-2">
            <div className="bg-neutral rounded-md p-6 text-md border border-neutral-800 font-thin">
              <p>{testimonials.text}</p>
              <div className="flex mt-8  items-center">
                <img className="w-12 h-12 mr-6 rounded-full border border-neutral-300" src={testimonials.image} alt="imges" />
                <p>{testimonials.user}</p>
              </div>
              <span className="text-sm font-normal italic text-neutral-600">{testimonials.company}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
