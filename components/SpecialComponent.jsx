"use client";
import React from "react";

export default function SpecialComponent({ type }) {
  return (
    <div className="SpecialComponent" style={{ display: "flex" }}>
      <div
        className="SpecialText"
        style={{
          color: "white",
          width: "400px",
          height: "100%",
          margin: " 5px 50px",
          fontSize: "17px",
          lineHeight: "1.5",
          fontWeight: "200",
        }}
      >
        <h1>{type.title}</h1>
        <p>{type.ing}</p>
        <p>{type.desc}</p>
      </div>
      <div className="SpecailItem">
        <img
          src={type.img}
          alt="imageofCooking"
          style={{ width: "300px", height: "300px" }}
        ></img>
      </div>
    </div>
  );
}
