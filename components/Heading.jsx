export function Heading(props) {
  return (
    <div>
      <h2 className="headingTitle heading ">
        {props.title}
        <hr className="line" />
      </h2>
      <h1 className="headingDescription heading">{props.description}</h1>
    </div>
  );
}
