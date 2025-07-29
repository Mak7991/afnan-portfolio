import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const awardsData = [
  {
    image: "/award_4.jpeg",
    name: "Pakistan Corporate Award 2024",
  },
  {
    image: "/award_1.jpeg",
    name: "Sitara-e-Pakistan 2023",
  },
  {
    image: "/award_3.jpeg",
    name: "SSDG Summit 2023",
  },
  {
    image: "/award_2.jpeg",
    name: "South Asian Bussiness Excellence Awards Maldives 2023",
  },
  {
    image: "/award_6.jpeg",
    name: "National entrepreneurship competition 2022",
  },
  {
    image: "/award_9.jpeg",
    name: "Published in Iqra University Official Magazine 2021",
  },
  {
    image: "/award_5.jpeg",
    name: "National Entrepreneurship Competition 2021",
  },
  {
    image: "/award_7.jpeg",
    name: "National Entrepreneurship Competition 2020",
  },
  {
    image: "/award_8.jpeg",
    name: "National Entrepreneurship Competition 2019",
  },
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
                  style={{ objectFit: "cover" }}
                  className="rounded-2xl shadow-lg"
                  sizes="(max-width: 768px) 220px, 300px"
                />
              </div>
            </div>
            {/* Text content */}
            <div className="flex flex-col items-center text-center px-2">
              <div className="text-xl md:text-2xl font-semibold mb-2">
                {person.name}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default AwardsSlider;
