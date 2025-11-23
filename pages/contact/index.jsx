import { motion } from "framer-motion";
import { HiEnvelope, HiPhone } from "react-icons/hi2";

import { fadeIn } from "../../variants";

const Contact = () => {
  const email = "raphaellevy027@gmail.com";
  const phone = "+33702617329";

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[800px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-6"
          >
            Let's <span className="text-accent">connect.</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-center mb-12 text-white/60 max-w-[500px] mx-auto"
          >
            Ready to build something great? Get in touch and let's discuss your
            project.
          </motion.p>

          {/* contact buttons */}
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            {/* Email Button */}
            <a
              href={`mailto:${email}`}
              className="group relative w-full sm:w-auto min-w-[280px] bg-[rgba(65,47,123,0.15)] hover:bg-[rgba(89,65,169,0.25)] border border-white/10 hover:border-accent/50 rounded-lg px-8 py-6 transition-all duration-300 backdrop-blur-sm overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex flex-col items-center sm:items-start gap-3">
                <div className="text-accent text-3xl mb-2">
                  <HiEnvelope />
                </div>
                <div className="text-sm text-white/60 uppercase tracking-wider mb-1">
                  Email
                </div>
                <div className="text-white font-semibold text-lg group-hover:text-accent transition-colors duration-300">
                  {email}
                </div>
              </div>
            </a>

            {/* Phone Button */}
            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="group relative w-full sm:w-auto min-w-[280px] bg-[rgba(65,47,123,0.15)] hover:bg-[rgba(89,65,169,0.25)] border border-white/10 hover:border-accent/50 rounded-lg px-8 py-6 transition-all duration-300 backdrop-blur-sm overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex flex-col items-center sm:items-start gap-3">
                <div className="text-accent text-3xl mb-2">
                  <HiPhone />
                </div>
                <div className="text-sm text-white/60 uppercase tracking-wider mb-1">
                  Phone
                </div>
                <div className="text-white font-semibold text-lg group-hover:text-accent transition-colors duration-300">
                  {phone}
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
