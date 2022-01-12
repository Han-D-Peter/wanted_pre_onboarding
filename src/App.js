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

function App() {
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
      <GlobalStyles />
      {isWideDesktopWidth ? <Header /> : null}
      {isDesktopWidth ? <DesktopHeader /> : null}
      {isTabletWidth ? <TabletHeader /> : null}
      {isWideMobileWidth ? <WideMobileHeader /> : null}
      {isMobileWidth ? <MobileWidthHeader /> : null}
      <Separator />
      <Main />
    </>
  );
}

export default App;
