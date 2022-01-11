import React from "react";

const ListElement = ({ text, emMark }) => {
  return (
    <li>
      <a href="*" style={{ color: "#333333", fontSize: "13px" }}>
        {text}
      </a>
      {emMark ? emMark : null}
    </li>
  );
};

export default ListElement;
