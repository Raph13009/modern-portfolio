import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-12"
            >
              My work <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              This portfolio section is currently under construction.
            </motion.p>
          </div>

          {/* content */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%] flex items-center justify-center"
          >
            <div className="bg-[rgba(65,47,123,0.15)] rounded-lg px-8 py-12 max-w-[600px] text-center border border-white/10 backdrop-blur-sm">
              <motion.div
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                animate="show"
                className="mb-6"
              >
                <div className="inline-block px-4 py-2 bg-accent/20 rounded-full mb-6">
                  <span className="text-sm text-accent font-semibold tracking-wider uppercase">
                    Coming Soon
                  </span>
                </div>
                <p className="text-white/80 text-lg leading-relaxed mb-8">
                  I'm curating my best work to showcase here. In the meantime,
                  You can explore all my recent projects and real-world work directly on my agency website.                </p>
              </motion.div>
              <motion.div
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                animate="show"
              >
                <Link
                  href="https://www.boostaiconsulting.com/realisations"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-x-3 bg-accent hover:bg-accent/80 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 group shadow-lg shadow-accent/20 hover:shadow-accent/40"
                >
                  <span>View My Work</span>
                  <HiArrowRight className="text-xl group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
