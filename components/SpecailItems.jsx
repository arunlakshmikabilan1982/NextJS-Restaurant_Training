"use client";
function SpecailItems(props) {
  return (
    <div
      className={`${props.open ? "ItemOpen" : "Item"}`}
      onClick={() => props.handleOpen(props.id)}
    >
      <p>{props.title}</p>
    </div>
  );
}

export default SpecailItems;
