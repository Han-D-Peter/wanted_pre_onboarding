import styled from "styled-components";

const MarkBox = styled.div`
  position: absolute;
  top: -8px;
  right: -8px;
  height: 13px;
  width: 13px;
  background-color: #3366ff;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MarkText = styled.span`
  font-size: 5px;
  font-weight: 800;
  color: white;
`;

const NewMark = () => {
  return (
    <MarkBox>
      <MarkText>N</MarkText>
    </MarkBox>
  );
};

export default NewMark;
