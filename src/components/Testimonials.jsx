import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Lucide icons

const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="custom-arrow absolute top-[50%] left-0 z-10 -translate-y-[50%] rounded-full shadow-md bg-gray-300 shadow-slate-500 p-1"
  >
    <ChevronLeft size={24} className="text-white transition-300" />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="custom-arrow absolute top-[50%] z-10 right-0 -translate-y-[50%]  rounded-full shadow-md bg-gray-300 shadow-slate-500 p-1"
  >
    <ChevronRight size={24} className="text-white transition-300" />
  </button>
);

var settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />,
  responsive: [
    {
      breakpoint: 2000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const Testimonials = () => {
  return (
    <div className="my-16">
      <h2 className="text-center mb-4 ">Testimonials</h2>
      <h4 className="my-2 font-bold text-center">
        Let's see what our client speaks
      </h4>
      <div className="slider-container relative">
        <Slider {...settings} className="p-2">
        <div className=" text-center rounded-md p-2  ">
            <div className="border border-gray-300 rounded-md p-2 ">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                className="size-28 rounded-full mx-auto"
                alt=""
              />
              <h3 className="text-gray-900 font-bold text-xl py-2">
                Maria Smantha
              </h3>
              <h4 className="text-gray-800 font-bold">Web Developer</h4>
              <p className="py-1">
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid commodi. Previous
              </p>
            </div>
          </div>
        <div className=" text-center rounded-md p-2  ">
            <div className="border border-gray-300 rounded-md p-2 ">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                className="size-28 rounded-full mx-auto"
                alt=""
              />
              <h3 className="text-gray-900 font-bold text-xl py-2">
                Maria Smantha
              </h3>
              <h4 className="text-gray-800 font-bold">Web Developer</h4>
              <p className="py-1">
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid commodi. Previous
              </p>
            </div>
          </div>
        <div className=" text-center rounded-md p-2  ">
            <div className="border border-gray-300 rounded-md p-2 ">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                className="size-28 rounded-full mx-auto"
                alt=""
              />
              <h3 className="text-gray-900 font-bold text-xl py-2">
                Maria Smantha
              </h3>
              <h4 className="text-gray-800 font-bold">Web Developer</h4>
              <p className="py-1">
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid commodi. Previous
              </p>
            </div>
          </div>
        <div className=" text-center rounded-md p-2  ">
            <div className="border border-gray-300 rounded-md p-2 ">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                className="size-28 rounded-full mx-auto"
                alt=""
              />
              <h3 className="text-gray-900 font-bold text-xl py-2">
                Maria Smantha
              </h3>
              <h4 className="text-gray-800 font-bold">Web Developer</h4>
              <p className="py-1">
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid commodi. Previous
              </p>
            </div>
          </div>
        <div className=" text-center rounded-md p-2  ">
            <div className="border border-gray-300 rounded-md p-2 ">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                className="size-28 rounded-full mx-auto"
                alt=""
              />
              <h3 className="text-gray-900 font-bold text-xl py-2">
                Maria Smantha
              </h3>
              <h4 className="text-gray-800 font-bold">Web Developer</h4>
              <p className="py-1">
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid commodi. Previous
              </p>
            </div>
          </div>
        <div className=" text-center rounded-md p-2  ">
            <div className="border border-gray-300 rounded-md p-2 ">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                className="size-28 rounded-full mx-auto"
                alt=""
              />
              <h3 className="text-gray-900 font-bold text-xl py-2">
                Maria Smantha
              </h3>
              <h4 className="text-gray-800 font-bold">Web Developer</h4>
              <p className="py-1">
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid commodi. Previous
              </p>
            </div>
          </div>
        
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
