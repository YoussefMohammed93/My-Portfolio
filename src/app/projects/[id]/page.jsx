"use client";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Navbar } from "@/components/navbar";
import BackButton from "@/components/back-button";

export default function Project({ params }) {
  const { id } = params;

  const projects = [
    {
      id: 1,
      src: "/ecommecre.png",
      alt: "react-ecommerce",
      title: "Sneakers E-Commerce",
      category: "Front End",
      description: "A detailed description of the Sneakers E-Commerce project.",
    },
    {
      id: 2,
      src: "/ecommerce2.png",
      alt: "javascript-ecommerce",
      title: "JavaScript E-Commerce",
      category: "Front End",
      description:
        "A detailed description of the JavaScript E-Commerce project.",
    },
    {
      id: 3,
      src: "/dashboard-bootstrap.png",
      alt: "dashboard",
      title: "Bootstrap Dashboard",
      category: "Front End",
      description: "A detailed description of the Bootstrap Dashboard project.",
    },
    {
      id: 4,
      src: "/slack.png",
      alt: "slack-clone",
      title: "Slack Clone",
      category: "Full Stack",
      description: "A detailed description of the Slack Clone project.",
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
          <p className="text-lg font-medium text-[#6f6f6f]">
            • {project.category}
          </p>
          <h2 className="text-4xl font-sans font-black tracking-wide leading-tight text-white pb-8">
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
        </div>
      </div>
    </article>
  );
}
