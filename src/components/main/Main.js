import styled, { css, keyframes } from "styled-components";
import { slideInfo } from "../../slideInfo";
import SlideCard from "../SlideCard";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { useEffect, useRef, useState } from "react";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  padding-top: 26px;
`;

const slideCardMove = (direction, moveDistance) => keyframes`
  from{
    transform:translateX(${moveDistance}px);
  }
  to{
    transform: translateX(${direction * 1060}px);
  }
`;

const Wrapper = styled.div`
  display: flex;
  margin-left: 0px;
  margin-right: 0px;
  width: ${props => props.length * 1060}px;
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
          animation-name: ${slideCardMove(props.count, props.moveDistance)};
        `
      : null}
`;

const RightBtn = styled.button`
  position: absolute;
  right: calc((100% - 1200px) / 2);
  top: 190px;
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
  top: 190px;
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

const Main = () => {
  const [data, setData] = useState([...slideInfo]);
  const [currentNode, setCurrentNode] = useState();
  const [mouseDownPosition, setMouseDownPosition] = useState(0);
  const [mouseUpPosition, setMouseUpPosition] = useState(0);
  const [cursorOn, setCursorOn] = useState(false);
  const [onMouseMoveValue, setOnMouseMoveValue] = useState(0);
  const [moveDistance, setMoveDistance] = useState(0);
  const [count, setCount] = useState(0);
  const scrollRef = useRef();

  const wait = timeToDelay =>
    new Promise(resolve => setTimeout(resolve, timeToDelay));

  const moveRight = async moveLength => {
    const nextCardInfoBox = currentNode.parentNode.nextSibling.childNodes[1];
    nextCardInfoBox.style.display = "none";
    currentNode.parentNode.childNodes[1].style.display = "block";
    setCount(prev => prev - 1);
    await wait(490);
    setMoveDistance(0);
    setCount(0);
    const firstNode = data.shift();
    setData([...data, firstNode]);
  };

  const moveLeft = async moveLength => {
    const previousCardInfoBox =
      currentNode.parentNode.previousSibling.childNodes[1];
    previousCardInfoBox.style.display = "none";
    currentNode.parentNode.childNodes[1].style.display = "none";
    setCount(prev => prev + 1);
    await wait(490);
    currentNode.parentNode.childNodes[1].style.display = "block";
    setMoveDistance(0);
    setCount(0);
    const lastNode = data.pop();
    setData([lastNode, ...data]);
  };

  const onMouseDown = e => {
    setMouseDownPosition(e.clientX);
    setCurrentNode(e.target);
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
    setCursorOn(false);
    setOnMouseMoveValue(0);
  };

  useEffect(() => {
    setCurrentNode(
      document.body.childNodes[3].childNodes[2].childNodes[0].childNodes[0]
        .childNodes[0].childNodes[5].childNodes[0]
    );

    document.body.childNodes[3].childNodes[2].childNodes[0].childNodes[0].childNodes[0].childNodes[5].childNodes[1].style.display =
      "block";
  }, []);

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
            count={count}
            moveDistance={moveDistance}
            ref={scrollRef}
          >
            {data.map((data, idx) => (
              <SlideCard data={data} id={idx} />
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
      <div>{mouseDownPosition}</div>
      <div>{mouseUpPosition}</div>
      <div>{onMouseMoveValue}</div>
      <div>moveDistance:{moveDistance}</div>
      <div>{moveDistance - 1060}</div>
      <div>{count}</div>
      <Slider />
    </div>
  );
};

export default Main;
