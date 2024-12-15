import { useEffect, useState } from "react";
import defaults from "../data/defaultValues.json";

export const useInputs = (pageMode) => {
  const [colorTheme, setColorTheme] = useState<string>("pinkish");
  const [topImage, setTopImage] = useState<string>(defaults[pageMode]?.image);
  const [imageStyle, setImageStyle] = useState<boolean>(true);
  useEffect(() => {
    setTopImage(defaults[pageMode]?.image);
  }, [pageMode]);
  return {
    colorTheme,
    setColorTheme,
    topImage,
    setTopImage,
    imageStyle,
    setImageStyle,
  };
};

export default useInputs;
