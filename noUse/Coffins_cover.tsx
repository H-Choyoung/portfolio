import { CSSProperties, useState } from 'react';
import styled,{ keyframes } from 'styled-components';
import "./App.css";
import GoldCoin from './GoldCoin';
import SilverCoins from './SilverCoin';
import SkullSpecial from './Skull_special';

const CoffinsCover = () => {
  const [clicked, setClicked] = useState<any>("");
  const [display, setDisplay] = useState<any>("none");
  const [items, setItems] = useState<any>("");

  let coffinCloseB = "/img/coffin_close_black.svg";
  let coffinOpenB = "/img/coffin_open_black.svg";
  let coffinCloseW = "/img/coffin_close_white.svg";
  let coffinOpenW = "/img/coffin_open_white.svg";

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
  const testFunc =()=> {
    let arrs = [`GoldCoin`, `SilverCoins`, `SkullSpecial`];
    arrs.forEach(item => {
      let tests = `<${item} display={display}></${item}>`
      return tests;
    })
  }
  console.log(testFunc)

  return (
    <>
    <CoffinStyle
      src={coffinCloseB}
      onClick={onClicked}
    ></CoffinStyle>
    </>
  )
}
export default CoffinsCover;