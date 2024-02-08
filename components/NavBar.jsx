import React from "react";
import App from "@/components/Modal";
import Link from "next/link";

export default function NavBar(props) {
  return (
    <div className="NavBar">
      <h1 className="NavBarHeading">{props.title}</h1>
      <div className="NavBarItems">
        {props.items.map((item) => (
          <Link className="NavBarItem" href={item.href} key={item.name}>
            {item.name}
          </Link>
        ))}
      </div>
      <div>
        <App />
      </div>
    </div>
  );
}
