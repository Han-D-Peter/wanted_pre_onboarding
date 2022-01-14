import styled from "styled-components";

const ImgFrame = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  margin: 0 10px 0 10px;
  width: ${props => props.windowWidth}px;
  height: 300px;
  border-radius: 5px;
  overflow: hidden;
`;

const InfoBox = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 330px;
  height: 150px;
  border-radius: 4px;
`;

const Title = styled.div`
  font-size: 17px;
  margin-top: 20px;
`;

const Description = styled.div`
  margin-top: 8px;
  font-size: 12px;
  color: #757575;
`;

const LinkBox = styled.div`
  margin-top: 15px;
  margin-left: 20px;
  color: #3366ff;
`;

const SmallSlideCard = ({ data, windowWidth }) => {
  return (
    <ImgFrame key={data.id} windowWidth={windowWidth}>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "230px",
          overflow: "hidden",
          borderRadius: "4px",
        }}
      >
        <img
          src={data.img}
          alt="banner"
          width={1100}
          style={{
            WebkitUserDrag: "none",
            position: "absolute",
            top: "-65px",
          }}
        />
      </div>
      <InfoBox>
        <Title>{data.title}</Title>
        <Description>{data.description}</Description>
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

export default SmallSlideCard;
