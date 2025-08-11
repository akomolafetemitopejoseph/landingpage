import React from "react";

const Footer = () => {
  const footer1 = [
    { href: "#", text: "Getting Started" },
    { href: "#", text: "Documentation" },
    { href: "#", text: "Tutorial" },
    { href: "#", text: "API Reference" },
    { href: "#", text: "Community Forums" },
  ];
  const footer2 = [
    { href: "#", text: "Features" },
    { href: "#", text: "Supported" },
    { href: "#", text: "System Requirements" },
    { href: "#", text: "Downloads" },
    { href: "#", text: "Release Notes" },
  ];
  const footer3 = [
    { href: "#", text: "Events" },
    { href: "#", text: "Meetups" },
    { href: "#", text: "Conferences" },
    { href: "#", text: "Hackathons" },
    { href: "#", text: "Jobs" },
  ];
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500"
        className="grid grid-cols-2 lg:grid-cols-3 gap-2 p-5"
      >
        <div>
          <h3 className="text-md font-semibold mb-4 capitalize text-xl">
            resources
          </h3>
          <ul>
            {footer1.map((links, index) => (
              <li key={index}>
                <a
                  className="text-neutral-300 hover:text-white"
                  href={links.href}
                >
                  {links.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          {" "}
          <ul>
            <h3 className="text-md font-semibold mb-4 capitalize text-xl">
              plafform
            </h3>
            {footer2.map((footer2, index) => (
              <li key={index}>
                <a
                  className="text-neutral-300 hover:text-white"
                  href={footer2.href}
                >
                  {footer2.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul>
            <h3 className="text-md font-semibold mb-4 capitalize text-xl">
              community
            </h3>
            {footer3.map((footer3, index) => (
              <li key={index}>
                <a
                  className="text-neutral-300 hover:text-white"
                  href={footer3.href}
                >
                  {footer3.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
