export function MenuItem(props) {
  return (
    <div className="MenuItem">
      <div className="ItemImgBox" id="MenuItemImg">
        <img src={props.img} alt="MenuItems" className="ItemImg"></img>
      </div>

      <div className="MenuItemHeader" id="MenuItemHead">
        <h3>{props.name} .....</h3>
        <p className="Price"> {props.price}</p>
      </div>

      <div className="MenuItemDesc" id="MenuItemDesc">
        <p className="MenuItemDesc">{props.ingredients}</p>
      </div>
    </div>
  );
}
