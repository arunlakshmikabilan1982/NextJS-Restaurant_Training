"use client";
import React, { useState } from "react";

export default function HoverProfile() {
  let open = false;

  function toggleFunction() {
    open = !open;
  }

  return (
    <div>
      <img
        src="http://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png"
        alt="profile"
        className="ProfileImage"
        onMouseEnter={() => toggleFunction}
      ></img>

      <div className={`${open ? "sub-menu-wrapopen" : "sub-menu-wrap"}`}>
        <div className="sub-menu">
          <div className="user-info">
            <p>Name:Jhon Comapny</p>
            <p>EMail: jhon@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
