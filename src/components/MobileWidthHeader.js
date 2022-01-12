import React, { useState } from "react";
import Emtext from "./Emtext";
import ListElement from "./ListElement";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { VscBell } from "react-icons/vsc";
import styled from "styled-components";
import SeparatorVerti from "./SeparatorVerti";
import ListIconNew from "./ListIconNew";

const HeaderContainer = styled.header`
  display: flex;
  // justify-content: center;
  margin: 0 auto;
`;

const Navigation = styled.nav`
  padding: 0 25px 0 10px;
  font-family: 윤고딕330;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const LeftSide = styled.div`
  padding-left: 13px;
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
  width: 142px;
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

function MobileWidthHeader() {
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
          <ListElement text="홈" />
          <ListElement text="채용" />
          <ListElement text="이벤트" />
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

export default MobileWidthHeader;
