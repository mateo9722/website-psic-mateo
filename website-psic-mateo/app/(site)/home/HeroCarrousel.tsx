"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import {Autoplay, EffectFade, Pagination} from "swiper/modules";

interface HeroCarouselProps {
    images: string[];
    setCurrentSlideIndex: (index: number) => void;
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({
                                                       images,
                                                       setCurrentSlideIndex,
                                                   }) => {
    return (
        <Swiper
            modules={[Autoplay, EffectFade, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            effect="fade"
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            onSlideChange={(swiper) => setCurrentSlideIndex(swiper.realIndex)}
            pagination={{
                clickable: true,
                bulletClass:
                    "swiper-pagination-bullet w-3 h-3 bg-gray-300 opacity-50 rounded-full mx-1",
                bulletActiveClass:
                    "swiper-pagination-bullet-active bg-brandPeach opacity-100",
            }}
        >
            {images.map((img, i) => (
                <SwiperSlide key={i}>
                    <img
                        src={img}
                        alt={`Slide ${i}`}
                        className="w-full h-auto object-cover rounded-xl"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default HeroCarousel;