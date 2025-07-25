import { motion } from "framer-motion";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import WorkSlider from "../../components/WorkSlider";
import { fadeIn } from "../../variants";
import Image from "next/image";
import Avatar from "../../components/Avatar";

const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center work-container">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-y-8 lg:gap-x-8">
          {/* text */}
          <div className="flex-1 text-center lg:text-left mb-4 lg:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-12"
            >
              My Goals & <span className="text-accent">Vision.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              Afnan is committed to expanding into international markets, and
              setting benchmarks for themed developments that offer unparalleled
              experiences. His mission aligns perfectly with the goals of
              countries looking to attract high-impact entrepreneurs, boost job
              creation, and foster economic innovation.
            </motion.p>
          </div>

          {/* image */}
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 1, ease: "easeInOut" }}
            className="flex-1 flex justify-center items-center"
          >
            <Image
              src="/vision_avatar.jpeg"
              alt="Afnan"
              width={350}
              height={350}
              className="rounded-full shadow-lg object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
