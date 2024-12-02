import { useState } from "react";

// Define the return type for the useInputs hook
interface UseInputsReturn {
  colorTheme: string;
  setColorTheme: React.Dispatch<React.SetStateAction<string>>;
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  topImage: string;
  setTopImage: React.Dispatch<React.SetStateAction<string>>;
  infoAndAdviceTitle: string;
  setInfoAndAdviceTitle: React.Dispatch<React.SetStateAction<string>>;
  infoSection: string;
  setInfoSection: React.Dispatch<React.SetStateAction<string>>;
  infoSectionFontSize: number;
  setInfoSectionFontSize: React.Dispatch<React.SetStateAction<number>>;
  tipSectionFontSize: number;
  setTipSectionFontSize: React.Dispatch<React.SetStateAction<number>>;
  tipTitle: string;
  setTipTitle: React.Dispatch<React.SetStateAction<string>>;
  tipText: string;
  setTipText: React.Dispatch<React.SetStateAction<string>>;
}

export const useInputs = (): UseInputsReturn => {
  const [colorTheme, setColorTheme] = useState<string>("pinkish");
  const [title, setTitle] = useState<string>("TORNADO TEDDY");
  const [topImage, setTopImage] = useState<string>(
    "https://static.wixstatic.com/media/d4d1f4_aa0fc0b21c444ad8be19d3fd85d193eb~mv2.jpeg/v1/fill/w_640,h_480,fp_0.50_0.30,q_80,usm_1.20_1.00_0.01,enc_auto/d4d1f4_aa0fc0b21c444ad8be19d3fd85d193eb~mv2.jpeg"
  );
  const [infoAndAdviceTitle, setInfoAndAdviceTitle] =
    useState<string>("INFO AND ADVICE");
  const [infoSection, setInfoSection] = useState<string>(
    "Puppies can tip over from calm to over-threshold very quickly indeed - if not checked, they can really go berserk!</br></br>When your pup sees something that fixates them - really focuses their attention - let them look and wait to see if they will lose interest - remember this is HABITUATION.</br></br>If they don't lose interest - interrupt the dog's focus. Make yourself exciting,get some treats out.</br></br>Engage the puppy in a wee bit of training. This will help your dog's level of arousal (just excitement) to recede.</br></br>They can investigate the exciting thing IF APPROPRIATE but only when they are calm."
  );
  const [infoSectionFontSize, setInfoSectionFontSize] = useState<number>(13);
  const [tipSectionFontSize, setTipSectionFontSize] = useState<number>(13);

  const [tipTitle, setTipTitle] = useState<string>("TOP TIP");
  const [tipText, setTipText] = useState<string>(
    "An over-excited puppy will literally not be able to think/hear you/remember anything! That makes them vulnerable - and we don't want that!"
  );

  return {
    colorTheme,
    setColorTheme,
    title,
    setTitle,
    topImage,
    setTopImage,
    infoAndAdviceTitle,
    setInfoAndAdviceTitle,
    infoSection,
    setInfoSection,
    infoSectionFontSize,
    setInfoSectionFontSize,
    tipSectionFontSize,
    setTipSectionFontSize,
    tipTitle,
    setTipTitle,
    tipText,
    setTipText,
  };
};

export default useInputs;
