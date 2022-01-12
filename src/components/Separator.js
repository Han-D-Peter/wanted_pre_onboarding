import styled from "styled-components";

const SSeparator = styled.div`
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  div {
    width: 100%;
    height: 1.3px;
    background-color: #e5e5e5;
  }
  span {
    margin: 0px 10px;
    font-weight: 600;
    font-size: 12px;
    color: #8e8e8e;
  }
`;

function Separator() {
  return (
    <SSeparator>
      <div></div>
    </SSeparator>
  );
}
export default Separator;
