import styled, { css, keyframes } from "styled-components";
import { slideInfo } from "../../slideInfo";
import SlideCard from "../SlideCard";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { useEffect, useState } from "react";
import { wait } from "../../utility";
import { DIRECTION } from "../../constants";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  padding-top: 26px;
`;

const slideCardMove = (direction, moveDistance, screenWidth) => keyframes`
  from{
    transform:translateX(${moveDistance}px);
  }
  to{
    transform: translateX(${direction * screenWidth}px);
  }
`;

const Wrapper = styled.div`
  display: flex;
  margin-left: 0px;
  margin-right: 0px;
  width: ${props => props.length * props.width}px;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  transform: translate3d(${props => props.moveValue}px, 0, 0);
  ${props =>
    props.count !== 0
      ? css`
          animation-duration: 0.4s;
          animation-timing-function: ease-out;
          animation-name: ${slideCardMove(
            props.direction,
            props.moveDistance,
            props.width
          )};
        `
      : null}
`;

const RightBtn = styled.button`
  position: absolute;
  right: calc((100% - 1200px) / 2);
  top: 215px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  opacity: 0.7;
  height: 65px;
  width: 30px;
  border-radius: 10px;
`;

const LeftBtn = styled.button`
  position: absolute;
  left: calc((100% - 1200px) / 2);
  top: 215px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  opacity: 0.7;
  height: 65px;
  width: 30px;
  border-radius: 20px;
`;

const Slider = styled.div``;

const Main = ({ width }) => {
  const [data, setData] = useState([...slideInfo]);
  const [cursorOn, setCursorOn] = useState(false);
  const [mouseDownPosition, setMouseDownPosition] = useState(0);
  const [mouseUpPosition, setMouseUpPosition] = useState(0);
  const [onMouseMoveValue, setOnMouseMoveValue] = useState(0);
  const [moveDistance, setMoveDistance] = useState(0);

  const [direction, setDirection] = useState(DIRECTION.stop);

  const moveRight = async () => {
    setDirection(DIRECTION.right);
    await wait(390);
    const firstNode = data.shift();
    setData([...data, firstNode]);
    setMoveDistance(0);
    setDirection(DIRECTION.stop);
  };

  const moveLeft = async () => {
    let previousCardInfoBox = document.getElementById("5");
    previousCardInfoBox.style.display = "none";
    setDirection(DIRECTION.left);
    await wait(390);
    const lastNode = data.pop();
    setData([lastNode, ...data]);
    setMoveDistance(0);
    setDirection(DIRECTION.stop);
  };

  const onMouseDown = e => {
    setMouseDownPosition(e.clientX);
    setCursorOn(true);
  };

  const onMouseUp = e => {
    setMouseUpPosition(e.clientX);
    setMoveDistance(mouseUpPosition - mouseDownPosition);
    setCursorOn(false);
    setOnMouseMoveValue(0);
  };

  const onMouseMove = e => {
    if (cursorOn) {
      setOnMouseMoveValue(e.clientX - mouseDownPosition);
    }
  };

  const onMouseLeave = e => {
    if (cursorOn) {
      setMouseUpPosition(e.clientX);
      setMoveDistance(mouseUpPosition - mouseDownPosition);
    }
    setCursorOn(false);
    setOnMouseMoveValue(0);
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      moveRight();
    }, 4000);
    return () => {
      clearInterval(slideInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    const dragSpace = Math.abs(mouseDownPosition - mouseUpPosition);

    if (mouseDownPosition !== 0) {
      if (mouseUpPosition < mouseDownPosition && dragSpace > 200) {
        moveRight();
      } else if (mouseUpPosition > mouseDownPosition && dragSpace > 200) {
        moveLeft();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mouseUpPosition]);

  useEffect(() => {
    const centerSlideCardInfo = document.getElementById("5");
    centerSlideCardInfo.style.display = "block";
  }, []);

  return (
    <div>
      <Container>
        <Slider
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          cursorOn={cursorOn}
        >
          <Wrapper
            length={slideInfo.length}
            moveValue={onMouseMoveValue}
            direction={direction}
            moveDistance={moveDistance}
            width={width}
            id="wrapper"
          >
            {data.map((data, idx) => (
              <SlideCard key={idx} data={data} idx={idx} windowWidth={width} />
            ))}
          </Wrapper>
        </Slider>
      </Container>
      <LeftBtn onClick={moveLeft}>
        <span style={{ opacity: "0.5" }}>
          <MdOutlineKeyboardArrowLeft size={25} />
        </span>
      </LeftBtn>
      <RightBtn onClick={moveRight}>
        <span style={{ opacity: "0.5" }}>
          <MdOutlineKeyboardArrowRight size={25} />
        </span>
      </RightBtn>
    </div>
  );
};

export default Main;
