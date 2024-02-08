"use client";
function SpecailItems(props) {
  return (
    <div
      className={`p-2 ${props.open ? "ItemOpen" : "Item"}`}
      onClick={() => props.handleOpen(props.id)}
    >
      {props.title}
    </div>
  );
}

export default SpecailItems;
