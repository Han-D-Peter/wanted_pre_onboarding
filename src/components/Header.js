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
import { useMediaQuery } from "react-responsive";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
`;

const Navigation = styled.nav`
  font-family: 윤고딕330;
  width: 1070px;
  height: 50px;
  display: flex;
  justify-content: space-between;
`;

const LeftSide = styled.div`
  font-size: 23px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Ul = styled.ul`
  display: flex;
  list-style: none;
`;

const CenterUl = styled(Ul)`
  width: 533px;
  justify-content: space-around;
  align-items: center;
`;

const Aside = styled.aside`
  width: 270px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AsideUl = styled(Ul)`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ListIcon = styled.li`
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Header() {
  const isWideDesktopWidth = useMediaQuery({ query: "(min-width:1200px)" });
  const isDesktopWidth = useMediaQuery({
    query: "(min-width:1100px) and (max-width:1199px)",
  });
  const isTabletWidth = useMediaQuery({
    query: "(min-width:992px) and (max-width:1099px)",
  });
  const isWideMobileWidth = useMediaQuery({
    query: "(min-width:768px) and (max-width:991px)",
  });
  const isMobileWidth = useMediaQuery({
    query: "(max-width:767px)",
  });
  const [mid, setMid] = useState(false);
  return (
    <HeaderContainer>
      <div style={{ maxWidth: "1080px" }}>
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
                <ListIconNew icon={<VscBell size={19} />} newable={true} />
              </ListIcon>
              <ListIcon style={{ marginRight: "25px" }}>
                <ListIconNew icon={<CgProfile size={19} />} newable={true} />
              </ListIcon>
              <div
                style={{
                  marginLeft: "-5px",
                  width: "118px",
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <SeparatorVerti />
                <li
                  style={{
                    fontFamily: "YoonGodic320",
                    width: "82px",
                    height: "30px",
                    border: "1px solid #E0E2E3",
                    borderRadius: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <a href="*" style={{ color: "#828282", fontSize: "13px" }}>
                    기업 서비스
                  </a>
                </li>
              </div>
              {mid ? (
                <ListIcon>
                  <button>
                    <FontAwesomeIcon icon={faEllipsisH} />
                  </button>
                </ListIcon>
              ) : null}
            </AsideUl>
          </Aside>
        </Navigation>
      </div>
    </HeaderContainer>
  );
}

export default Header;
