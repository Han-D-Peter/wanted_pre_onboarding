import NewMark from "./NewMark";

const ListIconNew = ({ icon, newable }) => {
  return (
    <button style={{ position: "relative" }}>
      {icon}
      {newable ? <NewMark /> : null}
    </button>
  );
};

export default ListIconNew;
