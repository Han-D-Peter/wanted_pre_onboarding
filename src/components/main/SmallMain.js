import styled, { css, keyframes } from "styled-components";
import { slideInfo } from "../../slideInfo";
import { useEffect, useRef, useState } from "react";
import { wait } from "../../utility";
import { DIRECTION } from "../../constants";
import SmallSlideCard from "../SmallSlideCard";

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
  width: ${props => props.length * (1120 - props.widthReduction)}px;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  transform: translate3d(${props => props.moveRealTime}px, 0, 0);
  ${props =>
    props.count !== 0
      ? css`
          animation-duration: 0.5s;
          animation-timing-function: ease-out;
          animation-name: ${slideCardMove(
            props.direction,
            props.moveDistance,
            props.width
          )};
        `
      : null}
`;

const Slider = styled.div``;

const SmallMain = ({ widthReduction }) => {
  const [data, setData] = useState([...slideInfo]);
  const [cursorOn, setCursorOn] = useState(false);
  const [mouseDownPosition, setMouseDownPosition] = useState(0);
  const [mouseUpPosition, setMouseUpPosition] = useState(0);
  const [onMouseMoveValue, setOnMouseMoveValue] = useState(0);
  const [moveDistance, setMoveDistance] = useState(0);
  const [direction, setDirection] = useState(DIRECTION.stop);
  const scrollRef = useRef();

  const moveRight = async moveLength => {
    setDirection(DIRECTION.right);
    await wait(490);
    const firstNode = data.shift();
    setData([...data, firstNode]);
    setMoveDistance(0);
    setDirection(DIRECTION.stop);
  };

  const moveLeft = async moveLength => {
    setDirection(DIRECTION.left);
    await wait(490);
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
  }, [mouseUpPosition]);

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
            moveRealTime={onMouseMoveValue}
            direction={direction}
            moveDistance={moveDistance}
            ref={scrollRef}
            width={1120 - widthReduction}
            widthReduction={widthReduction}
            id="wrapper"
          >
            {data.map((data, idx) => (
              <SmallSlideCard
                key={idx}
                data={data}
                idx={idx}
                windowWidth={1120 - widthReduction}
              />
            ))}
          </Wrapper>
        </Slider>
        <div>{widthReduction}</div>
      </Container>
    </div>
  );
};

export default SmallMain;
