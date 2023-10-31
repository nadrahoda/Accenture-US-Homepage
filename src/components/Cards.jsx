import React, { useState } from "react";
import Image from "next/image";

const Cards = () => {
  const [showNextSet, setShowNextSet] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);

  const cardsSet1 = [
    {
      id: 1,
      image: "./card1.jpg",
      title: "RESEARCH REPORT",
      description: "Accenture Life Trends 2024",
      expandedContent: "41%",
    },

    {
      id: 2,
      image: "./card2.avif",
      title: "RESEARCH REPORT",
      description: "Resiliency in the making",
      expandedContent: "50%",
    },

    {
      id: 3,
      image: "./card3.jpg",
      title: "Case Study",
      description: "Be our guest: Marriott's new global HR hub",
      expandedContent: "41%",
    },
    {
      id: 4,
      image: "./card4.jpg",
      title: "RESEARCH REPORT",
      description: "Refocus your talent lens",
      expandedContent: "40%",
    },
  ];

  const cardsSet2 = [
    {
      id: 5,
      image: "./card5.jpg",
      title: "Card Title 5",
      description: "This is a card description.",
      expandedContent: "8%",
    },
    {
      id: 6,
      image: "./card6.jpeg",
      title: "Card Title 1",
      description: "This is a card description.",
      expandedContent: "10%",
    },
    {
      id: 7,
      image: "./card7.jpg",
      title: "Card Title 1",
      description: "This is a card description.",
      expandedContent: "51%",
    },
    {
      id: 8,
      image: "./card8.png",
      title: "Card Title 1",
      description: "This is a card description.",
      expandedContent: "51%",
    },
  ];

  const cardsSet3 = [
    {
      id: 9,
      image: "/card9.jpg",
      title: "Card Title 9",
      description: "This is a card description.",
      expandedContent: "67%",
    },
    {
      id: 10,
      image: "./card10.jpg",
      title: "Card Title 1",
      description: "This is a card description.",
      expandedContent: "49%",
    },

    {
      id: 11,
      image: "./card11.jpg",
      title: "Card Title 1",
      description: "This is a card description.",
      expandedContent: "56%",
    },
    {
      id: 12,
      image: "./card12.jpg",
      title: "Card Title 1",
      description: "This is a card description.",
      expandedContent: "76%",
    },
  ];

  const cardsSet4 = [
    {
      id: 13,
      image: "./card13.jpg",
      title: "Card Title 13",
      description: "This is a card description.",
      expandedContent: "78%",
    },
    {
      id: 14,
      image: "./card14.jpg",
      title: "Card Title 1",
      description: "This is a card description.",
      expandedContent: "66%",
    },
    {
      id: 15,
      image: "./card15.jpeg",
      title: "Card Title 1",
      description: "This is a card description.",
      expandedContent: "86%",
    },
    {
      id: 16,
      image: "./card16.jpg",
      title: "Card Title 1",
      description: "This is a card description.",
      expandedContentx: "45%",
    },
  ];

  const handleForwardClick = () => {
    setShowNextSet(!showNextSet);
  };

  const handleBackwardClick = () => {
    setShowNextSet(!showNextSet);
  };

  const handleCardHover = (cardId) => {
    setExpandedCard(cardId);
  };
  const handleCardLeave = () => {
    setExpandedCard(null);
  };

  const determineCardSet1 = showNextSet ? cardsSet3 : cardsSet1;

  const determineCardSet2 = showNextSet ? cardsSet4 : cardsSet2;

  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center" }}
        className="cardSection"
      >
        <div style={{ display: "flex", flexWrap: "wrap" }} className="">
          {determineCardSet1.map((card) => (
            <div
              key={card.id}
              className={`card ${expandedCard === card.id ? "expanded" : ""}`}
              onMouseEnter={() => handleCardHover(card.id)}
              onMouseLeave={handleCardLeave}
            >
              {expandedCard !== card.id ? (
                <div
                  className="card-image"
                  style={{
                    backgroundImage: `url(${card.image})`,
                    backgroundSize: "cover",

                    width: "100%",
                    height: "100%",
                    position: "relative",
                  }}
                >
                  <div
                    className="card-text"
                    style={{
                      position: "absolute",
                      color: "white",
                      zIndex: 1,
                    }}
                  >
                    <h2 className="uppercase text-white text-xl font-semibold pl-5 pt-8 ">
                      {card.title}
                    </h2>
                    <p className="pl-5 text-3xl font-bold">
                      {card.description}
                    </p>
                  </div>
                </div>
              ) : (
                <div
                  className="card-expanded"
                  style={{
                    backgroundImage:
                      "linear-gradient(to bottom, #7c6f79, #7e7080, #7e7288, #7b7591, #75789a, #6e7fa5, #6587ae, #588fb6, #499dbe, #3daac2, #3cb7c0, #4ac3bb)",
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    color: "white",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <div style={{ flex: "1", paddingRight: "12px" }}>
                      <h2 className="uppercase text-white text-xl font-semibold pl-5 pt-8">
                        {card.title}
                      </h2>
                      <p className="pl-5 text-2xl font-bold flex">
                        {card.description}
                      </p>
                      <p className="pl-5 text-8xl pt-32 font-bold">
                        {card.expandedContent}
                      </p>
                      <p className="text-white text-md font-semibold w-[86%] pl-5">
                        of survey respondents find the speed of new technology
                        overwhelming
                      </p>
                    </div>
                    <div style={{ flex: "1", paddingLeft: "4px" }}>
                      <p className="flex flex-col pt-14 pr-5 text-md ">
                        We're in a state of flux, but there's hope and
                        unparalleled opportunity. Five trends explore people's
                        evolving relationships with businesses and technology.
                        What do you need to know to navigate the coming year and
                        beyond?
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }} className="">
        {determineCardSet2.map((card) => (
          <div
            key={card.id}
            className={`card ${expandedCard === card.id ? "expanded" : ""}`}
            onMouseEnter={() => handleCardHover(card.id)}
            onMouseLeave={handleCardLeave}
          >
            {expandedCard !== card.id ? (
              <div
                className="card-image"
                style={{
                  backgroundImage: `url(${card.image})`,
                  backgroundSize: "cover",

                  width: "100%",
                  height: "100%",
                  position: "relative",
                }}
              >
                <div
                  className="card-text"
                  style={{
                    position: "absolute",
                    color: "white",
                    zIndex: 1,
                  }}
                >
                  <h2 className="uppercase text-white text-xl font-semibold pl-5 pt-8 ">
                    {card.title}
                  </h2>
                  <p className="pl-5 text-3xl font-bold">{card.description}</p>
                </div>
              </div>
            ) : (
              <div
                className="card-expanded"
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom, #7c6f79, #7e7080, #7e7288, #7b7591, #75789a, #6e7fa5, #6587ae, #588fb6, #499dbe, #3daac2, #3cb7c0, #4ac3bb)",
                  width: "100%",
                  height: "100%",
                  position: "relative",
                  color: "white",
                }}
              >
                <div style={{ display: "flex" }}>
                  <div style={{ flex: "1", paddingRight: "12px" }}>
                    <h2 className="uppercase text-white text-xl font-semibold pl-5 pt-8">
                      {card.title}
                    </h2>
                    <p className="pl-5 text-2xl font-bold flex">
                      {card.description}
                    </p>
                    <p className="pl-5 text-8xl pt-32 font-bold">
                      {card.expandedContent}
                    </p>
                    <p className="text-white text-md font-semibold w-[86%] pl-5">
                      of survey respondents find the speed of new technology
                      overwhelming
                    </p>
                  </div>
                  <div style={{ flex: "1", paddingLeft: "4px" }}>
                    <p className="flex flex-col pt-14 pr-5 text-md ">
                      We're in a state of flux, but there's hope and
                      unparalleled opportunity. Five trends explore people's
                      evolving relationships with businesses and technology.
                      What do you need to know to navigate the coming year and
                      beyond?
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
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
          onClick={handleBackwardClick}
          style={{ width: "50px", height: "50px", fontSize: "24px" }}
        >
          &#8592;
        </button>
        <button
          onClick={handleForwardClick}
          style={{ width: "50px", height: "50px", fontSize: "24px" }}
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Cards;
