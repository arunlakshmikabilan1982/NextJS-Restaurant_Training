// import "@/app/components.css";
function Information(props) {
  return (
    <div className="Information">
      <div className="InfoImgdiv">
        <img src={props.img} alt="infoImg" className="InformationImg"></img>
      </div>
      <div>
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}

export default Information;
