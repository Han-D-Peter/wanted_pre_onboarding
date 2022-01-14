import { useEffect, useState } from "react";

export const wait = timeToDelay =>
  new Promise(resolve => setTimeout(resolve, timeToDelay));

function getWindowWidth() {
  const { innerWidth: width } = window;
  return width;
}

export default function useWindowReduction() {
  const [widthReduction, setWidthReduction] = useState(1200 - getWindowWidth());

  useEffect(() => {
    function handleResize() {
      setWidthReduction(1200 - getWindowWidth());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return widthReduction;
}
