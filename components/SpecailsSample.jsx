"use client";
import React from "react";
import SpecailItems from "./SpecailItems";
import { useState } from "react";
import data1 from "@/data/Specials";

let data = data1;

export default function SpecailsSample() {
  const [type, settype] = useState(data[0]);

  function handleEvent(e) {
    data = data.map((index) => {
      if (index.id === e) {
        return { ...index, open: true };
      }

      return { ...index, open: false };
    });
    settype(data.filter((index) => index.id === e)[0]);
    console.log(type);
  }

  return (
    <div className="SpecailsMain">
      <div className="ItemTitles">
        {data.map((item) => (
          <SpecailItems
            key={item.id}
            title={item.title}
            id={item.id}
            handleOpen={handleEvent}
            open={item.open}
          />
        ))}
      </div>
      <div className="ItemHeader">
        <h1>{type.title}</h1>
      </div>
      <div className="ItemDesc">
        <p>{type.ing}</p>
      </div>
      <div className="ItemMatter">
        <p>{type.desc}</p>
      </div>
      <div className="ItemImage">
        <img
          src={type.img}
          alt="imageofCooking"
          className="SpecailsImage"
        ></img>
      </div>
    </div>
  );
}
