"use client"
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconCodeDots,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
  IconWorld,
} from "@tabler/icons-react";

export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-6xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={<Skeleton image={item.image} />} 
          icon={item.icon}
          href={item.link}
          className={
            i === 2 || i === 5
              ? "md:row-span-2"
              : i === 8
              ? "md:col-span-2"
              : ""
          }
        />
      ))}
    </BentoGrid>
  );
}


const Skeleton = ({ image }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 items-center justify-center overflow-hidden">
    <img
      src={image}
      alt="section visual"
      className="object-cover w-full h-full rounded-xl"
    />


  </div>
);

const items = [
  {
    title: "IOT SOLUTIONS",
    description: "We design and develop IOT across all engineering domains..",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    link: "/iot",
    image:"/images/iotRevised.png"
  },
  {
    title: "3D DESIGING & PROTOTYPING",
    description:
      "From Idea to reality share your stl file or project requirements",
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    link: "/3d-designing-prototyping",
    image:"/images/revisedThreeD.png"

  },
  {
    title: "ROBOTICS & AI EDUCATION",
    description: "We provide comprehensive robotics curriculum, faculty...",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    link: "/robotics-ai-education",
    image:"/images/robotics&AiEducation.png"
  },
  {
    title: " ⁠STEM Kits & Trainers for Schools",
    description: "Understand the impact of effective communication in our..",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    link: "/stem-kits-trainers",
    image:"/images/revisedStemKits.png"
  },
  {
    title: "DRONE DEVELOPMENT",
    description: "We design and build custom drones tailored to your unique..",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    link: "/drone-development",
    image:"/images/revisedDrone.png"
  },
  {
    title: "SOFTWARE & WEB DEVELOPMENT ",
    description: "We build Modern, Responsive, and secure digital solutions..",
    header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    link: "/software-web-development",
    image:"/images/revisedSoftware.png"
  },
  {
    title: "Workshops & Hackathons",
    description: "We organize innovation driven workshops and hackathons..",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    link: "/workshops-hackathons",
    image:"/images/revisedWorkshops.png"
  },
  {
    title: "Innovation Training for Students",
    description:
      "Monitoring and guiding students for state and national level ..",
    header: <Skeleton />,
    icon: <IconCodeDots className="h-4 w-4 text-neutral-500" />,
    link: "/innovation-training",
    image:"/images/revisedInnovation.png"
  },
  {
    title: "Robotics Curriculum",
    description: "Connecting innovations to change the world.",
    header: <Skeleton />,
    icon: <IconWorld className="h-4 w-4 text-neutral-500" />,
    link: "/robotics-curriculum",
    image:"/images/revisedRoboticsCurriculumn.png"
  },
];
