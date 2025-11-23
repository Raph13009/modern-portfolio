import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  FaFigma,
} from "react-icons/fa";
import {
  SiNotion,
  SiSupabase,
  SiNextdotjs,
  SiFirebase,
  SiVercel,
} from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

//  data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Product & Strategy",
        stage: "Product Strategy • MVP Development • User Insight & Fast Prototyping • Digital Consulting",
        icons: [],
      },
      {
        title: "Tech & Automation",
        stage: "AI-augmented workflows • Automations (Zapier / Make / Supabase) • Web Platform Development • Integrations & APIs",
        icons: [],
      },
      {
        title: "Tools",
        stage: "Notion • Figma • Supabase • Next.js (Cursor-assisted) • Firebase • Vercel",
        icons: [SiNotion, FaFigma, SiSupabase, SiNextdotjs, SiFirebase, SiVercel],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "BoostAi Consulting - Digital Strategy Consultant & Founder",
        stage: "Mar 2025 - Present (London)",
      },
      {
        title: "Lazo Startup - Product Manager",
        stage: "Mar 2024 - Jan 2025 (Paris)",
      },
      {
        title: "Business Development - Le marché Cezanne",
        stage: "Sept 2023 - Mar 2024 (San Francisco)",
      },
      {
        title: "Project Event Coordinator - Jeux Spin",
        stage: "Mar 2023 - Aug 2023 (Montreal)",
      },
    ],
  },
  {
    title: "graduation",
    info: [
      {
        title: "University of Hertfordshire - BBA, Finance - Digital Marketing",
        stage: "Sept 2021 - May 2024 (London, UK)",
      },
      {
        title: "Kedge Business School - International Business",
        stage: "Sept 2021 - May 2026",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Building Smart Digital Products.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="hidden md:block max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            I help founders and modern companies turn ideas into structured,
            scalable, and user-focused digital products. From product vision to
            execution, I combine strategy, design, and emerging technologies to
            build solutions that actually move the needle.
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* years */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[120px]">
                  Years building
                </div>
              </div>

              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={15} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[120px]">
                  Projects delivered
                </div>
              </div>

              {/* users */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={100} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[120px]">
                  users acquired
                </div>
              </div>

              {/* satisfaction */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={100} duration={5} />%
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[120px]">
                  satisfaction
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-4 xl:gap-y-6 items-center xl:items-start">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex-1 flex flex-col max-w-max gap-y-2 text-center xl:text-left"
              >
                {/* title */}
                <div className="font-semibold text-white mb-1">{item.title}</div>
                <div className="text-white/60 text-sm leading-relaxed">{item.stage}</div>

                {/* icons */}
                {item.icons && item.icons.length > 0 && (
                  <div className="flex gap-x-4 mt-2">
                    {item.icons.map((Icon, iconI) => (
                      <div key={iconI} className="text-2xl text-white">
                        <Icon />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
