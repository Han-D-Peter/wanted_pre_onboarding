import React from "react";
import Emtext from "./Emtext";
import ListElement from "./ListElement";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
`;

const Navigation = styled.nav`
  font-family: 윤고딕330;
  width: 1080px;
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
  justify-content: space-between;
  align-items: center;
`;

function Header() {
  return (
    <HeaderContainer>
      <div style={{ maxWidth: "1080px" }}>
        <Navigation>
          <LeftSide>
            <div>
              <button style={{ marginRight: "11px" }}>
                <FontAwesomeIcon icon={faBars} size="2x" />
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
          <aside>
            <Ul>
              <li>
                <button>
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </li>
              <li>
                <button>
                  <FontAwesomeIcon icon={faBell} />
                </button>
              </li>
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
                <a href="*" style={{ color: "#666666" }}>
                  기업 서비스
                </a>
              </li>
              <li>
                <button>프로필</button>
              </li>
              <li>
                <button>
                  <FontAwesomeIcon icon={faEllipsisH} />
                </button>
              </li>
            </Ul>
          </aside>
        </Navigation>
      </div>
    </HeaderContainer>
  );
}

export default Header;
