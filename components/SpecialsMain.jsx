"use client";
import SpecailItems from "./SpecailItems";
import { useState } from "react";
import SpecialComponent from "./SpecialComponent";
import data1 from "@/data/Specials";

let data = data1;

function SpecialsMain() {
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

  const TitleStyle = {
    color: "white",
    display: "flex",
    flexDirection: "column",
  };

  return (
    <div className="MainSpecials">
      <div style={TitleStyle} className="SpecaialsDishes">
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
      <div>
        <SpecialComponent type={type} />
      </div>
    </div>
  );
}

export default SpecialsMain;
