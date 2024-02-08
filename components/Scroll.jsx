"use client";
import { useState } from "react";
import { Carousel } from "./Carousel";
import { Heading } from "./Heading";

export function Scroll() {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      title: "Birthday Parties",
      photoName: "images/scroll/event1.png",
      price: "23",
    },
    {
      title: "Coustom Parties",
      photoName: "images/scroll/event2.png",
      price: "11",
    },
    {
      title: "private Parties",
      photoName: "images/scroll/event3.png",
      price: "19",
    },
  ];

  function app(newIndex) {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }
    console.log(newIndex);
    setActiveIndex(newIndex);
  }
  return (
    <div className="scroll-bg-img" id="Events">
      <div className="eventHeader">
        <Heading
          title="EVENTS"
          description="Organize Your Events in our Restaurant"
        />
      </div>

      <div className="carousel">
        <div
          className="inner"
          style={{ transform: `translate(-${activeIndex * 100}%)` }}
        >
          {items.map((item) => {
            return <Carousel item={item} width={"100%"} key={item} />;
          })}
        </div>
        <div className="carousel-buttons">
          <div className="indicators">
            {items.map((item, index) => {
              return (
                <button
                  key={item.index}
                  className="indicator-buttons"
                  onClick={() => {
                    app(index);
                  }}
                >
                  <span
                    className={`${
                      index === activeIndex
                        ? "indicator-symbol-active"
                        : "indicator-symbol"
                    }`}
                  >
                    <span className="inline-flex mt-4">
                      <img
                        className=" flex w-6 h-6  "
                        src="images/circle_Icon.png"
                        alt="checkCircle"
                      />
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
