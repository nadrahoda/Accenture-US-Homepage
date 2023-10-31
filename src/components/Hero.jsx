import React, { useEffect, useState } from "react";

const Hero = () => {
  const [animationPlayed, setAnimationPlayed] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimationPlayed(true);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  const [hoverCount, setHoverCount] = useState(0);

  const handleHover = () => {
    setHoverCount(hoverCount + 1);
  };

  const handleReset = () => {
    setHoverCount(0);
  };

  return (
    <>
      <div className="hover-effect text-center">
        <div
          className="text-container"
          onMouseEnter={handleHover}
          onMouseLeave={handleReset}
        >
          <p
            className={`text-9xl font-bold transition cursor-pointer duration-300 ease-in-out transform translate-x-0 uppercase ${
              animationPlayed ? "" : "animate-slideInRight"
            }`}
          >
            Reinvent what your
          </p>
        </div>
        <div
          className="text-container ml-36"
          onMouseEnter={handleHover}
          onMouseLeave={handleReset}
        >
          <p
            className={`text-9xl font-bold transition cursor-pointer duration-300 ease-in-out transform translate-x-0 uppercase ${
              animationPlayed ? "" : "animate-slideInLeft"
            }`}
            style={{ transform: `translateX(${hoverCount * 10}px)` }}
          >
            business could be
          </p>
        </div>
      </div>
      <div class="container">
        <p class="text-4xl font-semibold my-10 text-center cursor-pointer">
          Let there be change <span class="arrow">&gt;</span>
        </p>
      </div>
    </>
  );
};

export default Hero;
