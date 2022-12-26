import React from "react";
import "./Testimonial.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Geneva Law",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto optio vitae dignissimos ducimus neque dicta assumenda nemo ipsa maiores libero?",
  },
  {
    avatar: AVTR2,
    name: "Ronald Benson",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti consequatur, deserunt a eligendi esse numquam incidunt. Distinctio, doloremque porro voluptates qui quae expedita ad molestias quisquam maiores architecto. Quaerat, consectetur consequatur ipsam sunt aspernatur ullam.",
  },
  {
    avatar: AVTR3,
    name: "Dane Stevenson",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, veniam quis maiores saepe laboriosam mollitia impedit sed!",
  },
  {
    avatar: AVTR4,
    name: "Maria Valdez",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum quia distinctio similique iste culpa voluptatem aliquid quo veritatis voluptates vitae exercitationem expedita molestiae, corporis repellat laborum nobis voluptate, natus nihil.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
        data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar 1" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
