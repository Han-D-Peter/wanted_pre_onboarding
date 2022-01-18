import styled, { css, keyframes } from "styled-components";
import Separator from "./Separator";

const ImgFrame = styled.div`
  background-color: black;
  position: relative;
  margin: 0 10px 0 10px;
  width: ${props => props.windowWidth}px;
  height: 300px;
  border-radius: 5px;
  overflow: hidden;
`;

const ImgBox = styled.img`
  webkituserdrag: "none";
  opacity: ${props => (props.selectedBox ? 1.0 : 0.5)};
`;

const fadeInMotion = keyframes`
  from{
    opacity:0;
  }
  to{
    opcity:1;
  }
`;

const InfoBox = styled.div`
  ${props =>
    props.selectedBox
      ? css`
          display: block;
          animation-duration: 0.2s;
          animation-timing-function: ease-out;
          animation-name: ${fadeInMotion};
        `
      : "display:none;"}

  opacity: 1;
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

const SlideCard = ({ data, idx, windowWidth, selected }) => {
  return (
    <ImgFrame key={data.id} windowWidth={windowWidth}>
      <ImgBox
        src={data.img}
        alt="banner"
        width={1060}
        selectedBox={idx === 5}
      />
      <InfoBox id={idx} selectedBox={idx === 5}>
        <Title>{data.title}</Title>
        <Description>{data.description}</Description>
        <Separator />
        <LinkBox>
          <span>바로가기</span>
          <span>{selected ? "selected" : "no"}</span>
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
