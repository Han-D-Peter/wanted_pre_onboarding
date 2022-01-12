import { useState } from "react";
import styled from "styled-components";
import { slideInfo } from "../../slideInfo";
import Separator from "../Separator";
import SlideCard from "../SlideCard";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  padding-top: 26px;
`;

const Wrapper = styled.div`
  display: flex;
  width: ${props => props.length * 1060}px;
`;

const Main = () => {
  const size = [1060, 300];
  return (
    <Container>
      <Wrapper length={slideInfo.length}>
        {slideInfo.map(data => (
          <SlideCard data={data} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Main;
