"use client";
import { Heading } from "./Heading";
import SpecailsSample from "./SpecailsSample";
import { Underline } from "./Underline";

function Specials() {
  return (
    <div id="Specials">
      <Heading title="SPECAILS" description="Check Out Tasty Menu" />
      <SpecailsSample />
      <div className="center">{/* <Underline /> */}</div>
    </div>
  );
}

export default Specials;
