import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { useState } from "react";

const serviceData = [
  {
    Icon: RxCrop,
    title: "Sitara-e-Pakistan (2023) for outstanding contributions to business",
    description:
      "Pakistan's first cricket-themed high-rise, offering 5-star amenities, luxury living, and a unique blend of sports and modern architecture.",
  },
  {
    Icon: RxPencil2,
    title: "Digital Entrepreneur of the Year at SAPS 2023 (Maldives)",
    description:
      "A visionary blend of luxury stays, serene lake & dancing fountain views. Crafted to inspire dreamers, doers, and tomorrow's entrepreneurs.",
  },
  {
    Icon: RxDesktop,
    title:
      "Multiple national awards, such as the First Young Entrepreneur Summit Award (2019)",
    description:
      "A flagship project combining tech-driven retail spaces with premium residential options.",
  },
  {
    Icon: RxReader,
    title: "National Entrepreneur Challenge Winner (2019 & 2021)",
    description:
      "A revolutionary platform connecting entrepreneurs with investors, fostering innovation and business growth.",
  },
  {
    Icon: RxRocket,
    title: "Consecutive IQRA University Entrepreneur Awards (2019-2022",
    description:
      "Transforming real estate globally with Al, AGI, tokenization & metaverse assets. A halal fintech revolution for smart investors.",
  },
];

export const aboutData = [
  {
    title: "awards",
    info: [
      {
        title: "Sitara-e-Pakistan for outstanding contributions to business.",
        stage: "2023",
      },
      {
        title: "Digital Entrepreneur of the Year at SAPS",
        stage: "2023 (Maldives)",
      },
      {
        title: "National Entrepreneur Challenge Winner ",
        stage: "2019 - 2020",
      },
    ],
  },
];

const ServiceSlider = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
    
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

        <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
          {aboutData[index].info.map((item, itemI) => (
            <div
              key={itemI}
              className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-center text-white/60"
            >
              <div
                className="w-72 truncate overflow-hidden whitespace-nowrap cursor-default"
                title={item.title}
              >
                {item.title}
              </div>

              {item.stage && (
                <>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                </>
              )}

              <div className="flex gap-x-4">
                {item.icons?.map((Icon, iconI) => (
                  <div key={iconI} className="text-2xl text-white">
                    <Icon />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceSlider;
