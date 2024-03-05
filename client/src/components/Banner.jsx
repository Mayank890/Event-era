import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Banner = () => {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1604160450925-0eecf551fa86?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1504463120465-f45e69860948?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1502517787199-e68205b0c811?q=80&w=2338&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const previSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div className="h-96 w-full m-auto relative group overflow-hidden">
      <div
        className="w-full h-full flex transition-transform duration-1000"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            style={{
              backgroundImage: `url(${slide.url})`,
              width: "100%",
              flex: "0 0 auto",
            }}
            className="w-full h-full bg-center bg-cover rounded-b-3xl"
          ></div>
        ))}
      </div>
      <div className="flex absolute bottom-4 text-white inset-x-0 justify-center py-1">
        {slides.map((slide, slideIndex) => (
          <div key={slideIndex} className="text-2xl cursor-pointer ">
            <RxDotFilled
              size={30}
              onClick={() => setCurrentIndex(slideIndex)}
              className={`${
                currentIndex === slideIndex
                  ? "text-primary-500 transform-1"
                  : "text-white/50"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Banner;

{
  /* <div className="hidden group-hover:block absolute top-[50%] -translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
  <BsChevronCompactLeft onClick={previSlide} size={30} />
</div>
<div className="hidden group-hover:block absolute top-[50%] -translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
  <BsChevronCompactRight onClick={nextSlide} size={30} />
</div> */
}
