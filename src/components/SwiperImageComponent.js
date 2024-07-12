import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules"; //Navigation , Autoplay
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import ThreeSixtyIcon from "./icons/ThreeSixtyIcon";

const SwiperImageComponent = ({ imageUrls, auction }) => {
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
          className="max-w-[320px] w-auto h-60 overflow-hidden"
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
              <div className="swiper-slide-content flex items-center absolute m-2  font-bold text-gray-500 ">
                <span className="text-sm p-1  bg-white rounded-full shadow-sm shadow-dark-700">
                  {auction.price_category.name}
                </span>
                {auction.has_360 ? (
                  <span className="rounded-full p-1 bg-black bg-opacity-25 ml-40">
                    <ThreeSixtyIcon />
                  </span>
                ) : null}
              </div>

              {/* <img src={url} alt="Car image" className="w-full h-full object-cover" /> */}
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={goToPreviousSlide}
          >
            Previous
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={goToNextSlide}
          >
            Next
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default SwiperImageComponent;
