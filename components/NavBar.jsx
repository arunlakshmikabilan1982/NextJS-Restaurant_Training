import React from "react";
import App from "@/components/Modal";

export default function NavBar(props) {
  return (
    <div className="NavBar">
      <h1 className="NavBarHeading">{props.title}</h1>
      <div className="NavBarItems">
        {props.items.map((item) => (
          <a className="NavBarItem" href={item.link} key={item.name}>
            {item.name}
          </a>
        ))}
      </div>
      <div>
        <App />
      </div>
    </div>
  );
}
