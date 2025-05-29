import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";

function Carousel({ slides }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative isolate h-[400px] overflow-hidden select-none md:h-[500px] lg:h-[600px]">
      <Swiper
        keyboard={{ enabled: true }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        modules={[Navigation, Pagination, Autoplay, Keyboard]}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        className="h-full w-full">
        {slides.map((slide, index) => (
          <SwiperSlide key={`slide-${index}`}>
            <div className="relative h-full w-full">
              <img
                className="h-full w-full object-cover"
                src={slide.image}
                alt={slide.title}
              />
              <AnimatePresence>
                {index === activeIndex && (
                  <motion.div
                    key={`motion-${index}`}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -50, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                    className="bg-blue absolute top-1/2 left-0 h-fit w-fit -translate-y-1/2 px-12 py-8 text-white shadow-xl/50 md:w-1/2 md:pl-30">
                    <motion.h3
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="text-2xl font-bold sm:text-4xl">
                      {slide.title}
                    </motion.h3>
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      className="mt-6 line-clamp-3 hidden text-sm text-white/50 md:text-lg lg:line-clamp-6">
                      {slide.content}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <div className="absolute top-0 z-2 hidden h-full w-full items-center justify-between px-10 text-2xl md:flex">
          <button
            ref={prevRef}
            aria-label="previous slide"
            className="bg-gray h-12 w-12 rounded-full text-black hover:bg-white">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            ref={nextRef}
            aria-label="next slide"
            className="bg-gray h-12 w-12 rounded-full text-black hover:bg-white">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </Swiper>
    </div>
  );
}

export default Carousel;
