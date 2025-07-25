import { motion } from "framer-motion";
import Avatar2 from "../../components/Avatar2";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";
import Image from "next/image";
import { RiYoutubeLine } from "react-icons/ri";

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
              src="/guruHome.jpg"
              alt="Afnan 1"
              width={60}
              height={60}
              className="rounded-full"
            />
            <Image
              src="/genZ.jpg"
              alt="Afnan 2"
              width={60}
              height={60}
              className="rounded-full"
            />
            <Image
              src="/guru.jpg"
              alt="Afnan 3"
              width={60}
              height={60}
              className="rounded-full"
            />
          </motion.div>
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Afnan holds an MBA and MPhil (2022) with certifications in Big Data,
            Hadoop, Oracle Fusion, and Microsoft Technologies. He brings a
            strong blend of academic achievement and practical skills in
            entrepreneurship, marketing, sales, and leadership.
            <span>
              <br />
              <br />
              Afnan Ahmed Siddique runs two engaging YouTube channels focused on
              real estate, entrepreneurship, and success-driven mindset
              development for the modern generation. The Property Spy, founded
              by Afnan, is a go-to platform for discovering Pakistan’s top real
              estate opportunities, market insights, and smart investment
              strategies. School for Entrepreneurs is Afnan’s passion project to
              empower youth and aspiring founders with real-world business
              skills, mentorship, and tools to build impactful ventures.
            </span>
          </motion.p>
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="flex flex-row gap-x-4 items-center logo-mobile"
          >
            <a
              href="https://www.youtube.com/@SchoolForEntrepreneurs"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block"
            >
              <Image
                src="/sfeLogo.png"
                alt="School for Entrepreneurs YouTube"
                width={110}
                height={90}
                className="rounded"
              />
              <span className="absolute top-1 right-1 bg-white rounded-full p-1 shadow-md">
                <RiYoutubeLine
                  size={20}
                  color="#FF0000"
                  aria-label="YouTube"
                  title="Visit YouTube Channel"
                />
              </span>
            </a>
            <a
              href="https://www.youtube.com/@ThePropertySpy"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block"
            >
              <Image
                src="/tpsLogo.png"
                alt="The Property Spy YouTube"
                width={120}
                height={100}
                className="rounded"
              />
              <span className="absolute top-1 right-1 bg-white rounded-full p-1 shadow-md">
                <RiYoutubeLine
                  size={20}
                  color="#FF0000"
                  aria-label="YouTube"
                  title="Visit YouTube Channel"
                />
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
