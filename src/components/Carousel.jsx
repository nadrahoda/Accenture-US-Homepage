import React, { useState } from "react";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState("");

  const slides = [
    {
      id: 1,
      imageURL: "card4.jpg",
      title: "Prada personalizes a cult classic",
      description:
        "Prada leveraged innovative digital twin technology, offering new experiences in luxury product personalization.",
    },
    {
      id: 2,
      imageURL: "card5.jpg",
      title: "Prada personalizes a cult classic",
      description:
        "Prada leveraged innovative digital twin technology, offering new experiences in luxury product personalization.",
    },
    // Add more slides as needed
  ];

  const totalSlides = slides.length;

  const goToPrevSlide = () => {
    setSlideDirection("slide-right");
    setTimeout(() => {
      setCurrentSlide((currentSlide - 1 + totalSlides) % totalSlides);
      setSlideDirection("");
    }, 500);
  };

  const goToNextSlide = () => {
    setSlideDirection("slide-left");
    setTimeout(() => {
      setCurrentSlide((currentSlide + 1) % totalSlides);
      setSlideDirection("");
    }, 500);
  };

  return (
    <>
      <div className="pt-40 text-center">
        <p className="text-9xl font-bold text-center uppercase">360 VALUE</p>
        <p className="text-4xl mx-60 font-normal pt-10">
          Every day, we embrace change and create value for all our
          stakeholders, in every part of the world.
        </p>
      </div>
      <div className="carousel-container">
        <div className={`slide ${slideDirection}`}>
          <div className="image">
            <img
              src={slides[currentSlide].imageURL}
              alt={`Slide ${currentSlide + 1}`}
            />
          </div>
          <div className="carousel-text">
            <h2>{slides[currentSlide].title}</h2>
            <p>{slides[currentSlide].description}</p>
            <button className="flex justify-start text-xl font-bold pt-20">
              Read more <span className="read-more ml-3">&gt;</span>
            </button>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          marginTop: "20px",
          marginLeft: "50px",
        }}
      >
        <button
          onClick={goToPrevSlide}
          style={{ width: "50px", height: "50px", fontSize: "24px" }}
        >
          &#8592;
        </button>
        <button
          onClick={goToNextSlide}
          style={{ width: "50px", height: "50px", fontSize: "24px" }}
        >
          &#8594;
        </button>
      </div>
    </>
  );
};

export default Carousel;
