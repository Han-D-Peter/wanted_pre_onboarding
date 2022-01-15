const ListElement = ({ text, emMark }) => {
  return (
    <li style={{ display: "flex", alignItems: "center", position: "relative" }}>
      <div>
        <a href="*" style={{ color: "#333333", fontSize: "13px" }}>
          {text}
        </a>
      </div>
      <div style={{ position: "absolute", right: "-20px" }}>
        {emMark ? emMark : null}
      </div>
    </li>
  );
};

export default ListElement;
