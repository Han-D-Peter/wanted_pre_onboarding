import { GlobalStyles } from "./styles";
import Header from "./components/header/Header";
import Separator from "./components/Separator";
import { useMediaQuery } from "react-responsive";
import DesktopHeader from "./components/header/DesktopHeader";
import TabletHeader from "./components/header/TabletHeader";
import WideMobileHeader from "./components/header/WideMobileHeader";
import MobileWidthHeader from "./components/header/MobileWidthHeader";
import "./App.css";
import Main from "./components/main/Main";
import useWindowDimensions from "./utility";
import SmallMain from "./components/main/SmallMain";
import { Helmet } from "react-helmet";

function App() {
  const widthReduction = useWindowDimensions();
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

  return (
    <>
      <Helmet>
        <title>커리어 여정을 행복하게, 원티드</title>
      </Helmet>
      <GlobalStyles />
      {isWideDesktopWidth ? <Header /> : null}
      {isDesktopWidth ? <DesktopHeader /> : null}
      {isTabletWidth ? <TabletHeader /> : null}
      {isWideMobileWidth ? <WideMobileHeader /> : null}
      {isMobileWidth ? <MobileWidthHeader /> : null}
      <Separator />
      {isWideDesktopWidth ? (
        <Main width={1060} />
      ) : (
        <SmallMain widthReduction={widthReduction} />
      )}
    </>
  );
}

export default App;
