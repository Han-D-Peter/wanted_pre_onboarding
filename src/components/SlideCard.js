import styled from "styled-components";
import Separator from "./Separator";

const ImgFrame = styled.div`
  position: relative;
  margin: 0 10px 0 10px;
  width: 1060px;
  height: 300px;
  border-radius: 5px;
  overflow: hidden;
`;

const InfoBox = styled.div`
  display: none;
  position: absolute;
  left: 20px;
  bottom: 30px;
  background-color: #ffffff;
  width: 330px;
  height: 150px;
  border-radius: 4px;
`;

const Title = styled.h2`
  margin-top: 26px;
  margin-left: 20px;
  font-size: 19px;
`;
const Description = styled.h3`
  margin-left: 20px;
  margin-top: 12px;
  height: 40px;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
`;
const LinkBox = styled.div`
  margin-top: 18px;
  margin-left: 20px;
  color: #3366ff;
`;

const SlideCard = ({ data, id }) => {
  return (
    <ImgFrame key={id}>
      <img
        src={data.img}
        alt="banner"
        width={1060}
        style={{ WebkitUserDrag: "none" }}
      />
      <InfoBox>
        <Title>{data.title}</Title>
        <Description>{data.description}</Description>
        <Separator />
        <LinkBox>
          <span>바로가기</span>
          <span
            style={{
              fontSize: "12px",
              color: "#5C83FF",
              marginLeft: "6px",
            }}
          >
            {">"}
          </span>
        </LinkBox>
      </InfoBox>
    </ImgFrame>
  );
};

export default SlideCard;
