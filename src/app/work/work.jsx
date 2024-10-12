"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Work = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      src: "/E-Commerce.png",
      alt: "react-ecommerce",
      title: "Sneakers E-Commerce",
      category: "Front End",
    },
    {
      src: "/E-Commerce-js.png",
      alt: "javascript-ecommerce",
      title: "JavaScript E-Commerce",
      category: "Front End",
    },
    {
      src: "/dashboard-bootstrap.png",
      alt: "dashboard",
      title: "Bootstrap Dashboard",
      category: "Front End",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <div className="main-padding py-12 bg-[#1a191d]" id="work">
      <div className="text-center" data-aos="fade-down">
        <h2 className="text-5xl lg:text-6xl xl:text-[90px] font-black tracking-wide leading-tight text-white pb-8">
          My Work
        </h2>
      </div>
      <div className="flex flex-col items-center mt-5">
        <Tabs defaultValue="front-end" className="w-full">
          <TabsList className="flex justify-center items-center mx-auto mb-8">
            <div data-aos="fade-right">
              <TabsTrigger value="front-end">Front End</TabsTrigger>
            </div>
            <span className="mx-3 text-white">/</span>
            <div data-aos="fade-left">
              <TabsTrigger value="full-stack">Full Stack</TabsTrigger>
            </div>
          </TabsList>
          <TabsContent value="front-end" className="w-full flex justify-center">
            <div className="grid grid-cols-1 custom-md:grid-cols-3 gap-6 mt-5 w-full max-w-7xl">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="col-span-1 rounded-lg bg-[#201f23] group overflow-hidden"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  data-aos="flip-down"
                >
                  <Link href="/">
                    <Image
                      src={project.src}
                      alt={project.alt}
                      className={`h-[200px] sm:h-[250px] lg:h-[300px] object-cover object-center rounded-lg rounded-b-none transition-transform duration-300 ease-in-out ${
                        hoveredIndex === index ? "scale-105" : "scale-100"
                      }`}
                      width={1000}
                      height={300}
                    />
                    <div className="p-5">
                      <h2 className="name text-xl sm:text-2xl font-semibold text-white">
                        {project.title}
                      </h2>
                      <p
                        className={`category flex items-center gap-x-2 text-md sm:text-lg text-white/70 mt-3 transition-transform duration-500 ease-in-out ${
                          hoveredIndex === index
                            ? "translate-x-4"
                            : "translate-x-0"
                        }`}
                      >
                        {hoveredIndex === index ? <ArrowRight /> : ""}
                        {hoveredIndex === index
                          ? "Show Project"
                          : project.category}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent
            value="full-stack"
            className="w-full flex justify-center"
          >
            <div className="w-full flex items-center justify-center mt-5">
              <div
                className="relative overflow-hidden rounded-lg bg-[#201f23] group"
                onMouseEnter={() => setHoveredIndex(3)}
                onMouseLeave={() => setHoveredIndex(null)}
                data-aos="flip-down"
              >
                <Link href="/">
                  <Image
                    src="/slack.png"
                    alt="slack-clone"
                    className={`object-cover object-center rounded-lg rounded-b-none transition-transform duration-300 ease-in-out ${
                      hoveredIndex === 3 ? "scale-105" : "scale-100"
                    }`}
                    width={950}
                    height={400}
                  />
                  <div className="p-5">
                    <h2 className="name text-xl sm:text-2xl font-semibold text-white">
                      Slack Clone
                    </h2>
                    <p
                      className={`category flex items-center gap-x-2 text-md sm:text-lg text-white/70 mt-3 transition-transform duration-500 ease-in-out ${
                        hoveredIndex === 3 ? "translate-x-4" : "translate-x-0"
                      }`}
                    >
                      {hoveredIndex === 3 ? <ArrowRight /> : ""}
                      {hoveredIndex === 3 ? "Show Project" : "Full Stack"}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
