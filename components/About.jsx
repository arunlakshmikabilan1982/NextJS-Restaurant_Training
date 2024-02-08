import about from "@/data/About";
import { Underline } from "./Underline";

export function About() {
  return (
    <div className="AboutMain">
      <div className="about" id="About">
        {about.map((about) => (
          <div className="aboutRow" key={about.heading}>
            <div className="aboutContent">
              <h3>{about.heading} </h3>
              <p>{about.content1} </p>
              <ul>
                <li>
                  <span className="inline-flex">
                    <img
                      className=" flex w-8 h-8  "
                      src="images/check_circle.png"
                      alt="checkCircle"
                    />
                    <span className="pl-3">{about.list1}</span>
                  </span>
                </li>
                <li>
                  <span className="inline-flex">
                    <img
                      className=" flex w-8 h-8  "
                      src="images/check_circle.png"
                      alt="checkCircle"
                    />
                    <span className="pl-3">{about.list2}</span>
                  </span>{" "}
                </li>
                <li>
                  <span className="inline-flex">
                    <img
                      className=" flex w-8 h-8  "
                      src="images/check_circle.png"
                      alt="checkCircle"
                    />
                    <span className="pl-3">{about.list3}</span>
                  </span>
                </li>
              </ul>
              <p>{about.content2} </p>
            </div>
            <div className="about-img">
              <img src={about.imageURL} alt="" />
            </div>
          </div>
        ))}
      </div>
      <div className="center">
        <Underline />
      </div>
    </div>
  );
}
