import React from "react";

function List({ title, txt }) {
  return (
    <div className="list-data">
      <i>Icon</i>
      <h3>{title}</h3>
      <p>{txt}</p>
    </div>
  );
}

export default List;
