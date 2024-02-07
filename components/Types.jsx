"use client";
import { MenuItem } from "./MenuItem";
import data from "@/data/Menu";
import { useState } from "react";

export function Types(params) {
  const [value, SetValue] = useState("");
  return (
    <div className="FullBox">
      <div className="TypesOfMenu">
        {params.types.map((name) => (
          <p className="typesNames" key={name} onClick={() => SetValue(name)}>
            {name}
          </p>
        ))}
      </div>
      <MenuItems value={value} SetValue={SetValue} />
    </div>
  );
}

function MenuItems(props) {
  const Items = data.filter((item) => item.type.includes(props.value));

  return (
    <ul className="MenuBox">
      {Items.map((item) => (
        <MenuItem
          name={item.name}
          ingredients={item.ingredients}
          img={item.photoName}
          price={item.price}
          type={item.type}
          key={item.id}
        />
      ))}
    </ul>
  );
}
