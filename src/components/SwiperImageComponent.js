import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules"; //Navigation , Autoplay
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import ThreeSixtyIcon from "./icons/ThreeSixtyIcon";

const SwiperImageComponent = ({ imageUrls, item }) => {
  console.log("Item:", item);
  const [activeIndex, setActiveIndex] = useState(0);

  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  // const goToPreviousSlide = () => {
  //   swiperRef.current.swiper.slidePrev();
  // };

  // const goToNextSlide = () => {
  //   swiperRef.current.swiper.slideNext();
  // };

  return (
    <div className="container mx-auto">
      <div className="relative">
        <Swiper
          modules={[Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          pagination={{ clickable: true }}
          ref={swiperRef}
          onSlideChange={handleSlideChange}
          className="max-w-[340px] w-auto h-60 overflow-hidden"
        >
          {imageUrls.map((url, index) => (
            <SwiperSlide
              key={index}
              style={{
                backgroundImage: `url(${url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100%",
                width: "100%",
              }}
            >
              <div className="swiper-slide-content flex items-center mx-2 p-2  font-bold text-gray-500 ">
                <span className="text-sm p-1  bg-white rounded-full shadow-sm shadow-dark-700">
                  {item.price_category.name}
                </span>
                {item.has_360 ? (
                  <span className="rounded-full p-1 bg-black bg-opacity-25 ml-40">
                    <ThreeSixtyIcon />
                  </span>
                ) : null}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperImageComponent;
