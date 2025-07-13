import { motion } from "framer-motion";
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

const About = () => {

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
            Entrepreneur{" "}
            <span className="text-accent">Director & Co-Founder </span>
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            As the Co-Founder and Director of multiple successful ventures,
            including Guru Builders, Gen-Z, MustStartup & Brikchain, Afnan has
            established himself as a visionary leader and empowering aspiring
            entrepreneurs.
          </motion.p>
        </div>

        <motion.p
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          animate="show"
          className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
        >
          With an MBA and MPhiI (completed in 2022) and certifications in Big
          Data, Hadoop, Oracle Fusion Applications, and Microsoft Technologies,
          Afnan combines academic excellence with practical expertise. His core
          skills include entrepreneurial mindset, marketing, sales, and
          leadership, enabling him to drive growth and innovation across his
          ventures.
        </motion.p>
      </div>
    </div>
  );
};

export default About;
