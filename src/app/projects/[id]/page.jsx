"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/navbar";
import BackButton from "@/components/back-button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export default function Project({ params }) {
  const { id } = params;

  const projects = [
    {
      id: 1,
      img1: "/ecommecre.png",
      img2: "/ecommecre2.png",
      img3: "/ecommecre3.png",
      alt: "react-ecommerce",
      title: "Sneakers E-Commerce",
      category: "Front End",
      description:
        "This is an e-commerce website for sneakers, developed by Eng. Youssef Mohammed. I used Tailwind CSS utility classes for styling, and the website is fully responsive on all devices. I also used React.js as the JavaScript framework. There are many features on this website—go ahead and discover them!",
      client: "Emily Davis",
      technologies: "HTML, Tailwind CSS, ReactJs",
      href: "https://react-ecommerce-project-matrix.vercel.app",
    },
    {
      id: 2,
      img1: "/ecommerce2.png",
      img2: "/ecommerce22.png",
      img3: "/ecommerce23.png",
      alt: "javascript-ecommerce",
      title: "JavaScript E-Commerce",
      category: "Front End",
      description:
        "This is an e-commerce website for clothes, developed by Eng. Youssef Mohammed. I used Tailwind CSS utility classes for styling, and the website is fully responsive on all devices. I also used JavaScript for functionality. There are many features on this website—go ahead and discover them!",
      client: "Adam Carter",
      technologies: "HTML, Tailwind CSS, JavaScript",
      href: "https://e-commerce-javascript-matrix.vercel.app",
    },
    {
      id: 3,
      img1: "/dashboard-bootstrap.png",
      img2: "/dashboard1.png",
      img3: "/dashboard2.png",
      alt: "dashboard",
      title: "Bootstrap Dashboard",
      category: "Front End",
      description:
        "This is an dashboard website , developed by Eng. Youssef Mohammed. I used Bootstrap for styling, and the website is fully responsive on all devices. There are many features on this website—go ahead and discover them!",
      client: "Ronald Anderson",
      technologies: "HTML, BootStrap, JavaScript",
      href: "https://dashboard-bootstrap-matrix.vercel.app",
    },
    {
      id: 4,
      img1: "/slack.png",
      img2: "/slack2.png",
      img3: "/slack3.png",
      alt: "slack-clone",
      title: "Slack Clone",
      category: "Full Stack",
      description:
        "This chat app is a Slack clone built with Next.js and Convex as the database. It provides real-time messaging and collaboration features using modern libraries for seamless communication. However, the app is not responsive and may not display optimally on different screen sizes, making it best suited for desktop usage.",
      client: "For Training",
      technologies: "Tailwind CSS, NextJs, Convex, Libraries",
      href: "https://slack-clone-matrix.vercel.app",
    },
  ];

  const project = projects.find((project) => project.id === Number(id));

  if (!project) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-3xl font-bold text-white bg-[#1a191d]">
        Project not found
      </div>
    );
  }

  return (
    <article className="w-full min-h-screen bg-[#1a191d]">
      <Navbar />
      <BackButton />
      <div className="main-padding pt-24 pb-12 bg-[#1a191d]">
        <div>
          <p className="text-lg font-medium text-white/70">
            • {project.category}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-black tracking-wide leading-tight text-white pb-8">
            {project.title}
          </h2>
          <div className="mt-5">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{project.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-20 mt-12">
            <div className="col-span-1">
              <p className="text-base md:text-lg text-white/80">
                <q>{project.description}</q>
              </p>
            </div>
            <div className="col-span-1">
              <div className=" flex items-center gap-x-5">
                <div className="p-1 border-t border-white/30">
                  <div className="pt-2">
                    <b className="text-white">Client</b>
                    <p className="text-white/70 font-light">{project.client}</p>
                  </div>
                </div>
                <div className="p-1 border-t border-white/30">
                  <div className="pt-2">
                    <b className="text-white">Technologies</b>
                    <p className="text-white/70 font-light">
                      {project.technologies}
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-5">
                <Link
                  href={project.href}
                  target="_blank"
                  className="flex items-center gap-x-2 text-white/70 group"
                >
                  <p>Open project</p>
                  <ArrowRight className="group-hover:translate-x-3 transition-all duration-300" />
                </Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 custom-md:grid-cols-3 gap-y-5 gap-x-5 w-full my-12">
            {["img1", "img2", "img3"].map((img, idx) => (
              <div key={idx} data-aos="flip-up">
                <Dialog>
                  <DialogTrigger>
                    <div className="w-full col-span-1 cursor-pointer">
                      <Image
                        src={project[img]}
                        alt={project.title}
                        width={800}
                        height={800}
                        className="w-full custom-md:h-[250px] bg-center bg-cover"
                      />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="fixed flex items-center justify-center p-5">
                    <div className="w-full max-w-sm sm:max-w-md md:max-w-full h-auto flex items-center justify-center">
                      <Image
                        src={project[img]}
                        alt={project.title}
                        width={800}
                        height={800}
                        className="object-cover w-full h-auto"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            ))}
          </div>
          <p className="text-white/80">
            © {new Date().getFullYear()}, Made with love by Youssef Mohammed,
            All rights reserved.
          </p>
        </div>
      </div>
    </article>
  );
}
