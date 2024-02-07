"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Heading } from "./Heading";

export default function Testimonial() {
  const items = [
    {
      discription:
        "Proin iaculis purus digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
      pic: "images/testimonials/testimonials-1.jpg",
      name: "Saul Goodman",
      role: "Ceo Founder",
    },
    {
      discription:
        "Export tempor illum tamen irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
      pic: "images/testimonials/testimonials-2.jpg",
      name: "Sara Wilsson",
      role: "Designer",
    },
    {
      discription:
        " Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
      pic: "images/testimonials/testimonials-3.jpg",
      name: "Jena Karlis",
      role: "Store Owner",
    },
    {
      discription:
        "Fugiat enim eram quae amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
      pic: "images/testimonials/testimonials-4.jpg",
      name: "Matt Brandon",
      role: "Freelancer",
    },
    {
      discription:
        "Quis quorum aliqua  fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
      pic: "images/testimonials/testimonials-5.jpg",
      name: "John Larson",
      role: "Entrepreneur",
    },
  ];
  return (
    <div className="testimonialEventHeader">
      <div className="eventHeader">
        <Heading
          title={"TESTIMONIALS"}
          description={"What they're saying about us"}
        />
      </div>
      <div className="testimonialBody">
        <Swiper
          className="testimonialSwiper"
          modules={[Navigation, Pagination]}
          slidesPerView={3}
          spaceBetween={10}
          // loop={true}
          autoplay={{ delay: 1000 }}
          pagination={{ clickable: true }}
        >
          <div className="TestimonialInner">
            <div className="Testimonial">
              <div className="TesimonialCarousel">
                {items.map((item) => (
                  <>
                    <SwiperSlide>
                      <div className="testimonial-carousel-item">
                        <div className="testimonial-carousel-item1">
                          {item.discription}
                        </div>
                        <div className="testimonial-carousel-item2">
                          <img
                            className="testimonial-carousel-img"
                            src={item.pic}
                            alt="testimonials_photo"
                          />
                        </div>
                        <div className="testimonial-carousel-item3">
                          <h3 className="testimonial-carousel-name">
                            {item.name}
                          </h3>
                          <h4 className="testimonial-carousel-role">
                            {item.role}
                          </h4>
                        </div>
                      </div>
                    </SwiperSlide>
                  </>
                ))}
              </div>
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
}
