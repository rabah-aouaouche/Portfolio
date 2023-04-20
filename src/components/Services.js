import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const services = [
  {
    name: "UI/UX Design",
    description:
      "Creating visually appealing and user-friendly interfaces that prioritize the needs and goals of the end user.",
    link: " Learn more",
  },
  {
    name: "Development",
    description:
      "Building software solutions using programming languages and tools to meet user and business requirements. ",
    link: " Learn more",
  },
  {
    name: "Digital Marketing",
    description:
      "Using online channels to promote products/services, build brand awareness, and engage with target audiences to drive conversions.",
    link: " Learn more",
  },
  {
    name: "Product Branding",
    description:
      "Creating a unique identity and perception of a product to differentiate it from competitors and resonate with target consumers.",
    link: " Learn more",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row ">
          {/* {text & image} */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat
          mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6 ">What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I'm a Junior Full-stack developper with over 5 months of
              experience.
            </h3>
            <Link to="work">
              <button className="btn btn-sm">See my work </button>
            </Link>
          </motion.div>
          {/* {services} */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 "
          >
            {/* {service list} */}
            <div>
              {services.map((service, index) => {
                // destruture service
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight ">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className=" text-gradient text-sm ">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
