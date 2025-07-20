import { motion } from "framer-motion";
import Avatar2 from "../../components/Avatar2";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";
import Image from "next/image";

const About = () => {
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left about-container">
      <Circles />

      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar2 />
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
            As the Co-Founder and Director of multiple successful
            ventures—including Guru Builders, Gen-Z builders, MustStartup, and
            Brikchain—Afnan has established himself as a visionary leader
            committed to innovation and empowering aspiring entrepreneurs. His
            latest venture, Guru Homes, is a Dubai-registered real estate and
            marketing company focused on reshaping property experiences across
            the UAE. Guru Homes reflects Afnan’s dedication to excellence,
            trust, and forward-thinking leadership in the real estate sector.
          </motion.p>
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="flex flex-row gap-x-4 items-center my-4 logo-mobile"
          >
            <Image
              src="/t-avt-1.png"
              alt="Afnan 1"
              width={60}
              height={60}
              className="rounded-full"
            />
            <Image
              src="/t-avt-2.png"
              alt="Afnan 2"
              width={60}
              height={60}
              className="rounded-full"
            />
            <Image
              src="/t-avt-3.png"
              alt="Afnan 3"
              width={60}
              height={60}
              className="rounded-full"
            />
            <Image
              src="/t-avt-4.jpeg"
              alt="Afnan 4"
              width={60}
              height={60}
              className="rounded-full"
            />
            <Image
              src="/t-avt-5.jpeg"
              alt="Afnan 5"
              width={60}
              height={60}
              className="rounded-full"
            />
          </motion.div>
        </div>

        <motion.p
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          animate="show"
          className="max-w-[500px] xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
        >
          Afnan holds an MBA and MPhil (2022) with certifications
          in Big Data, Hadoop, Oracle Fusion, and Microsoft Technologies. He
          brings a strong blend of academic achievement and practical skills in
          entrepreneurship, marketing, sales, and leadership.
        </motion.p>
      </div>
    </div>
  );
};

export default About;
