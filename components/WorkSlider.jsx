import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/achievement_1.jpeg",
          link: "http://example.com",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/achievement_2.jpeg",
          link: "http://example.com",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/achievement_3.jpeg",
          link: "http://example.com",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/achievement_4.jpeg",
          link: "http://example.com",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/achievement_5.jpeg",
          link: "http://example.com",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/achievement_6.jpeg",
          link: "http://example.com",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/achievement_7.jpeg",
          link: "http://example.com",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/achievement_8.jpeg",
          link: "http://example.com",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div className="grid grid-cols grid-rows-2 gap-4">
            {slide.images.map((image, imageI) => (
              <div
                className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                key={imageI}
              >
                <div className="flex items-center justify-center relative overflow-hidden group">
                  {/* image */}
                  <Image
                    src={image.path}
                    alt={image.title}
                    width={0}
                    height={0}
                    sizes="(max-width: 768px) 280px, 500px"
                    className="w-[280px] md:w-[500px] h-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
