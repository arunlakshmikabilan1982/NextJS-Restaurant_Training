import React from "react";

export function Carousel(props) {
  return (
    <div className="carousel-item">
      <img className="carousel-img" src="./public/images/event1.png" alt="" />
      <div className="carousel-item-text">
        <p> {props.item.title}</p>
        <br />
        <span>
          <b>${props.item.price}</b>
        </span>
        <br />
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul>
            <li>
              <i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</i>
            </li>
            <li>
              <i> Duis aute irure dolor in reprehenderit in voluptate velit.</i>
            </li>
            <li>
              <i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</i>
            </li>
          </ul>
          <p>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur
          </p>
        </div>
      </div>
    </div>
  );
}
