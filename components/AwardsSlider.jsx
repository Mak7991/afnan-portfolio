import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const awardsData = [
  {
    image: "/award_1.jpeg",
    name: "Sitara-e-Pakistan - 2023",
    link: "/T20 Tower - Presentation.pdf",
    message:
      "Pakistan's first cricket-themed high-rise, offering 5-star amenities, luxury living, and a unique blend of sports and modern architecture.",
  },
  {
    image: "/award_2.jpeg",
    name: "South Asian Business Excellence Award - 2023 (Malé, Maldives)",
    link: "/Lakeview BNB presentation.pdf",
    message:
      "A visionary blend of luxury stays, serene lake & dancing fountain views. Crafted to inspire dreamers, doers, and tomorrow's entrepreneurs.",
  },
  {
    image: "/award_3.jpeg",
    name: "National Entrepreneurship Competition - 2022,2021,2020,2019",
    link: "/Al Mirha Galaxy Investor Proposal.pdf",
    message:
      "A flagship project combining tech-driven retail spaces with premium residential options.",
  },
  {
    image: "/award_4.jpeg",
    name: "Young Entrepreneurship Summit - 2019",
    link: "/MUSTSTARTUP.pdf",
    message:
      "A revolutionary platform connecting entrepreneurs with investors, fostering innovation and business growth.",
  }
];

const AwardsSlider = () => {
  return (
    <Swiper
      navigation
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      className="h-[400px] md:h-[500px]"
      spaceBetween={30}
      slidesPerView={1}
    >
      {awardsData.map((person, i) => (
        <SwiperSlide key={i}>
          <div className="flex flex-col items-center justify-center h-full w-full">
            {/* Image */}
            <div className="w-full flex justify-center mb-6">
              <div className="relative w-[220px] h-[220px] md:w-[300px] md:h-[300px]">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-2xl shadow-lg"
                  sizes="(max-width: 768px) 220px, 300px"
                />
              </div>
            </div>
            {/* Text content */}
            <div className="flex flex-col items-center text-center px-2">
              <div className="text-xl md:text-2xl font-semibold mb-2">{person.name}</div>
              {/* <a
                className="mb-2 underline text-accent hover:text-white transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
                href={person.link}
              >
                Detailed Overview
              </a>
              <div className="flex items-center justify-center mb-2">
                <FaQuoteLeft className="text-lg text-white/30 mr-2" />
                <span className="text-sm md:text-base text-white/80 font-light">{person.message}</span>
              </div> */}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default AwardsSlider;
