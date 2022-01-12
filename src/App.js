import { GlobalStyles } from "./styles";
import Header from "./components/Header";
import "./App.css";
import Separator from "./components/Separator";
import { useMediaQuery } from "react-responsive";
import DesktopHeader from "./components/DesktopHeader";
import TabletHeader from "./components/TabletHeader";
import WideMobileHeader from "./components/WideMobileHeader";
import MobileWidthHeader from "./components/MobileWidthHeader";

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
    </>
  );
}

export default App;
