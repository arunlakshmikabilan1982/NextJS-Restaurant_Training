"use client";
import { Heading } from "./Heading";
import SpecialsMain from "./SpecialsMain";
import { Underline } from "./Underline";

function Specials() {
  return (
    <div className="Specials" id="Specials">
      <Heading title="SPECAILS" description="Check Out Tasty Menu" />
      <SpecialsMain />
      <div className="center">
        <Underline />
      </div>
    </div>
  );
}

export default Specials;
