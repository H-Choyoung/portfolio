import { useCallback, useRef, useState } from 'react';
import styled,{ keyframes } from 'styled-components';
import "../App.css";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import GoldCoin from './GoldCoin';
import SkullSpecial from './Skull_special';
import SilverCoins from './SilverCoin';

const Coffins = () => {
  const [clicked, setClicked] = useState<any>("");
  const [display, setDisplay] = useState<any>("none");
  const [items, setItems] = useState<any>("");

  let coffinCloseB = "/img/coffin_close_black.svg";
  let coffinOpenB = "/img/coffin_open_black.svg";
  let coffinCloseW = "/img/coffin_close_white.svg";
  let coffinOpenW = "/img/coffin_open_white.svg";

  const Container = styled.div`
    position: absolute; 
  `
  const CoffinKey = keyframes`
    0% {left: 0px;}
    100% {left: 50px; rotate: 23deg;}
  `
  const CoffinStyle = styled.img`
    position: absolute; 
    z-index: 3; 
    animation: ${clicked} 1.3s ease-out;
    animation-fill-mode: forwards;
    `
  const onClicked =()=> {
    if (clicked === "" && display === "none"){
      setClicked(CoffinKey);
      setDisplay("block");
      setItems(items);
    } else {
      setClicked("");
      setDisplay("none");
      setItems("");
    }
  }
  const OpenCoffinStyle = styled.img`
    position: absolute; 
    z-index: 0; 
  `

  return (
    <div>
      <CoffinStyle
        id='coffin'
        src={coffinCloseB}
        onClick={onClicked}
      ></CoffinStyle>
      <GoldCoin display={display}></GoldCoin>
        {/* <SkullSpecial display={display}></SkullSpecial> */}
        {/* <SilverCoins display={display}></SilverCoins> */}
      <OpenCoffinStyle src={coffinOpenB}></OpenCoffinStyle>
    </div>
  )
}
export default Coffins;