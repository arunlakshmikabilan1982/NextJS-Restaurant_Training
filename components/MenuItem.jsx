export function MenuItem(props) {
  return (
    <div className="MenuItem">
      <div className="ItemImgBox">
        <img src={props.img} alt="MenuItems" className="ItemImg"></img>
      </div>

      <div>
        <h3 className="MenuItemHeader">
          {props.name} .....................
          <span> </span>
          <span className="Price"> {props.price}</span>
        </h3>
        <p className="MenuItemDesc">{props.ingredients}</p>
      </div>
    </div>
  );
}
