import styled from "styled-components";

const Separator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    width: 1px;
    height: 12px;
    background-color: #e5e5e5;
    margin-right: 10px;
  }
`;

function SeparatorVerti() {
  return (
    <Separator>
      <div></div>
    </Separator>
  );
}
export default SeparatorVerti;
