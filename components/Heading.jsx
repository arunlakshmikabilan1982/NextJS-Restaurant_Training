export function Heading(props) {
  return (
    <div className="HeadingMain">
      <h2 className="headingTitle heading ">
        {props.title}
        <hr className="line" />
      </h2>
      <h1 className="headingDescription">{props.description}</h1>
    </div>
  );
}
