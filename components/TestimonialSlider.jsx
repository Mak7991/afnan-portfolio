import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "T20 Tower",
    link: "/T20 Tower - Presentation.pdf",
    message:
      "Pakistan's first cricket-themed high-rise, offering 5-star amenities, luxury living, and a unique blend of sports and modern architecture.",
  },
  {
    image: "/t-avt-2.png",
    name: "Lakeview BnB",
    link: "/Lakeview BNB presentation.pdf",
    message:
      "A visionary blend of luxury stays, serene lake & dancing fountain views. Crafted to inspire dreamers, doers, and tomorrow's entrepreneurs.",
  },
  {
    image: "/t-avt-3.png",
    name: "Al Mirha Galaxy Mobile Mall & Residency",
    link: "/Al Mirha Galaxy Investor Proposal.pdf",
    message:
      "A flagship project combining tech-driven retail spaces with premium residential options.",
  },
  {
    image: "/t-avt-4.jpeg",
    name: "MustStartup",
    link: "/MUSTSTARTUP.pdf",
    message:
      "A revolutionary platform connecting entrepreneurs with investors, fostering innovation and business growth.",
  },
  {
    image: "/t-avt-5.jpeg",
    name: "Brikchain",
    link: "/Brikchain Presntation.pdf",
    message:
      "Transforming real estate globally with Al, AGI, tokenization & metaverse assets. A halal fintech revolution for smart investors.",
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {testimonialData.map((person, i) => (
        <SwiperSlide key={i}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
            {/* avatar, name, position */}
            <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
              <div className="flex flex-col justify-center text-center">
                {/* avatar */}
                <div className="mb-2 mx-auto">
                  <Image
                    src={person.image}
                    width={100}
                    height={100}
                    alt={person.name}
                  />
                </div>
                <a className="mb-2 mx-auto underline" target="_blank" rel="noopener noreferrer" href={person.link}>Detailed Overview</a>
                {/* name */}
                <div className="text-lg">{person.name}</div>
              </div>
            </div>

            {/* quote & message */}
            <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
              {/* quote icon */}
              <div className="mb-4">
                <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
              </div>

              {/* message */}
              <div className="xl:text-lg text-center md:text-left">
                {person.message}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
