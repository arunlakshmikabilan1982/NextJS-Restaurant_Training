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
                  <span className="material-symbols-outlined">
                    check_circle
                  </span>
                  <i></i> {about.list1}
                </li>
                <li>
                  <span className="material-symbols-outlined">
                    check_circle
                  </span>
                  <i></i> {about.list2}
                </li>
                <li>
                  <span className="material-symbols-outlined">
                    check_circle
                  </span>
                  <i></i> {about.list2}
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
