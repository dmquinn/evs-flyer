import { useState } from "react";

const useFontSize = () => {
  const [fontSelector, setFontSelector] = useState("");
  const [fontSizes, setFontSizes] = useState({});
  const handleFocus = (e: string) => {
    setFontSelector(e);
  };
  return {
    handleFocus,
    fontSizes,
    fontSelector,
    setFontSizes,
  };
};

export default useFontSize;
