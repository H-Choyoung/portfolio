import { useCallback, useRef, useState } from 'react';
import styled,{ keyframes } from 'styled-components';
import "./App.css";
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const CoffinsBody = () => {
  const [clicked, setClicked] = useState<any>("");
  const [display, setDisplay] = useState<any>("none");
  const [items, setItems] = useState<any>("");

  let coffinCloseB = "/img/coffin_close_black.svg";
  let coffinOpenB = "/img/coffin_open_black.svg";
  let coffinCloseW = "/img/coffin_close_white.svg";
  let coffinOpenW = "/img/coffin_open_white.svg";

  const OpenCoffinStyle = styled.img`
    position: absolute; 
    z-index: 0; 
  `
  return (
    <OpenCoffinStyle src={coffinOpenB}></OpenCoffinStyle>
  )
}
export default CoffinsBody;