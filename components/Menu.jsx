import { Heading } from "./Heading";
import { Types } from "./Types";
import { Underline } from "./Underline";

export function Menu() {
  return (
    <div className="MainMenu" id="Menu">
      <Heading title="Menu" description="Check Out Tasty Menu" />
      <Types types={["All", "Starters", "salads", "specality"]} />
      <div className="center">
        <Underline />
      </div>
    </div>
  );
}
