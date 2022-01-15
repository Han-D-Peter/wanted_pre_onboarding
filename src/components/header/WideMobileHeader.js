import React from "react";
import Emtext from "../Emtext";
import ListElement from "../ListElement";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineSearch } from "react-icons/ai";
import { VscBell } from "react-icons/vsc";
import styled from "styled-components";
import ListIconNew from "../ListIconNew";

const HeaderContainer = styled.header`
  display: flex;
  margin-left: 1%;
`;

const Navigation = styled.nav`
  font-family: 윤고딕330;
  margin-left: 3%;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const LeftSide = styled.div`
  width: 100%;
  height: 60px;
  font-size: 23px;
  display: flex;
  align-items: center;
`;

const Ul = styled.ul`
  display: flex;
  list-style: none;
`;

const CenterUl = styled(Ul)`
  width: 480px;
  height: 50px;
  justify-content: space-evenly;
  align-items: center;
`;

const Aside = styled.aside`
  width: 270px;
  display: flex;
  align-items: center;
  justify-content: right;
`;

const AsideUl = styled(Ul)`
  width: 89px;
  margin-left: 0px;
  display: flex;
  justify-content: space-around;
`;

const ListIcon = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function WideMobileHeader() {
  return (
    <HeaderContainer>
      <Navigation>
        <LeftSide>
          <div>
            <button style={{ marginRight: "11px" }}>
              <GiHamburgerMenu size={21} />
            </button>
          </div>
          <div style={{ fontFamily: "아름" }}>wanted</div>
        </LeftSide>
        <CenterUl>
          <ListElement text="채용" />
          <ListElement text="이벤트" />
          <ListElement text="직군별 연봉" />
          <ListElement text="이력서" />
          <ListElement text="커뮤니티" emMark={<Emtext text="New" />} />
          <ListElement text="프리랜서" />
          <ListElement text="AI 합격예측" emMark={<Emtext text="Beta" />} />
        </CenterUl>
        <Aside>
          <AsideUl>
            <ListIcon>
              <ListIconNew icon={<AiOutlineSearch size={21} />} />
            </ListIcon>
            <ListIcon>
              <ListIconNew icon={<VscBell size={19} />} />
            </ListIcon>
            <ListIcon>
              <button>
                <FontAwesomeIcon icon={faEllipsisH} />
              </button>
            </ListIcon>
          </AsideUl>
        </Aside>
      </Navigation>
    </HeaderContainer>
  );
}

export default WideMobileHeader;
