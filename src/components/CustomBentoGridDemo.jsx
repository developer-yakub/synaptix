// import React from "react";
// import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
// import {
//   IconArrowWaveRightUp,
//   IconBoxAlignRightFilled,
//   IconBoxAlignTopLeft,
//   IconClipboardCopy,
//   IconFileBroken,
//   IconSignature,
//   IconTableColumn,
//   IconCodeDots,
//   IconWorld,
// } from "@tabler/icons-react";
// import Link from "next/link";

// export function BentoGridDemo() {
//   return (
//     <BentoGrid className="max-w-6xl mx-auto">
//       {items.map((item, i) => (
//         <BentoGridItem
//           key={i}
//           title={item.title}
//           description={item.description}
//           header={item.header}
//           icon={item.icon}
//           href={item.link} // Pass the link as href prop
//           className={
//             i === 2 || i === 5
//               ? "md:row-span-2" // vertical cards
//               : i === 8
//               ? "md:col-span-2" // last card fills the 2-column gap instead of whole row
//               : ""
//           }
//         />
//       ))}
//     </BentoGrid>
//   );
// }

// const Skeleton = () => (
//   <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
//     {items.map((item, i) => (
//       <div
//       key={i}
//       >
//         {item.text}
//       </div>
//     ))}
//   </div>
// );

// const items = [
//   {
//     title: "IOT SOLUTIONS",
//     description: "We design and develop IOT across all engineering domains..",
//     header: <Skeleton />,
//     icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
//     link: "/iot",
//     text:"t"
//   },
//   {
//     title: "3D DESIGING & PROTOTYPING",
//     description:
//       "From Idea to reality share your stl file or project requirements",
//     header: <Skeleton />,
//     icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
//     link: "/3d-designing-prototyping",
//     text:""
//   },
//   {
//     title: "ROBOTICS & AI EDUCATION",
//     description: "We provide comprehensive robotics curriculum, faculty...",
//     header: <Skeleton />,
//     icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
//     link: "/robotics-ai-education",
//   },
//   {
//     title: " ⁠STEM Kits & Trainers for Schools",
//     description: "Understand the impact of effective communication in our..",
//     header: <Skeleton />,
//     icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
//     link: "/stem-kits-trainers",
//   },
//   {
//     title: "DRONE DEVELOPMENT",
//     description: "We design and build custom drones tailored to your unique..",
//     header: <Skeleton />,
//     icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
//     link: "/drone-development",
//   },
//   {
//     title: "SOFTWARE & WEB DEVELOPMENT ",
//     description: "We build Modern, Responsive, and secure digital solutions..",
//     header: <Skeleton />,
//     icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
//     link: "/software-web-development",
//   },
//   {
//     title: "Workshops & Hackathons",
//     description: "We organize innovation driven workshops and hackathons..",
//     header: <Skeleton />,
//     icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
//     link: "/workshops-hackathons",
//   },
//   {
//     title: "Innovation Training for Students",
//     description:
//       "Monitoring and guiding students for state and national level ..",
//     header: <Skeleton />,
//     icon: <IconCodeDots className="h-4 w-4 text-neutral-500" />,
//     link: "/innovation-training",
//   },
//   {
//     title: "Robotics Curriculum",
//     description: "Connecting innovations to change the world.",
//     header: <Skeleton />,
//     icon: <IconWorld className="h-4 w-4 text-neutral-500" />,
//     link: "/robotics-curriculum",
//   },
// ];




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
      className="object-cover w-[210px] h-[180px] rounded-xl"
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
    image:"/images/iot.svg"
  },
  {
    title: "3D DESIGING & PROTOTYPING",
    description:
      "From Idea to reality share your stl file or project requirements",
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    link: "/3d-designing-prototyping",
    image:"/images/threeD.svg"

  },
  {
    title: "ROBOTICS & AI EDUCATION",
    description: "We provide comprehensive robotics curriculum, faculty...",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    link: "/robotics-ai-education",
    image:"/images/robotics.svg"
  },
  {
    title: " ⁠STEM Kits & Trainers for Schools",
    description: "Understand the impact of effective communication in our..",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    link: "/stem-kits-trainers",
    image:"/images/stem.svg"
  },
  {
    title: "DRONE DEVELOPMENT",
    description: "We design and build custom drones tailored to your unique..",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    link: "/drone-development",
    image:"/images/drone.svg"
  },
  {
    title: "SOFTWARE & WEB DEVELOPMENT ",
    description: "We build Modern, Responsive, and secure digital solutions..",
    header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    link: "/software-web-development",
    image:"/images/softwareDev.svg"
  },
  {
    title: "Workshops & Hackathons",
    description: "We organize innovation driven workshops and hackathons..",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    link: "/workshops-hackathons",
    image:"/images/workshop.svg"
  },
  {
    title: "Innovation Training for Students",
    description:
      "Monitoring and guiding students for state and national level ..",
    header: <Skeleton />,
    icon: <IconCodeDots className="h-4 w-4 text-neutral-500" />,
    link: "/innovation-training",
    image:"/images/innovation.svg"
  },
  {
    title: "Robotics Curriculum",
    description: "Connecting innovations to change the world.",
    header: <Skeleton />,
    icon: <IconWorld className="h-4 w-4 text-neutral-500" />,
    link: "/robotics-curriculum",
    image:"/images/robotCurr.svg"
  },
];
