import { CSSProperties, useCallback, useEffect, useRef, useState } from 'react';
import styled,{ keyframes } from 'styled-components';
import "../App.css";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import Randoms from './Randoms';
import GoldCoin from './GoldCoin';
import Skulls from './Skulls';
import SilverCoins from './SilverCoin';
import Booms from './booms';

const Coffins = ({ top, left, right, bottom }: CSSProperties) => {
  const [clicked, setClicked] = useState<any>("");
  const [display, setDisplay] = useState<any>("none");
  const [items, setItems] = useState<any>("");
  const RandomItems = useRef<any>();

  let coffinCloseB = "/img/coffin_close_black.svg";
  let coffinOpenB = "/img/coffin_open_black.svg";
  let coffinCloseW = "/img/coffin_close_white.svg";
  let coffinOpenW = "/img/coffin_open_white.svg";
  let arrs = [coffinCloseB, coffinCloseW];
  let coffinCloseRandom = arrs[Randoms(arrs)]; //뚜껑색 랜덤지정

  const Container = styled.div`
    position: absolute; 
    top: ${top};
    left: ${left};
    right: ${right};
    bottom: ${bottom};
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
  const OpenCoffinStyle = styled.img`
    position: absolute; 
    z-index: 0; 
  `
  const onClicked =()=> {
    if (clicked === "" && display === "none"){
      setClicked(CoffinKey); //키프레임 효과
      setDisplay("block"); //뚜껑이 열려야 보이게 표시
      console.log(display)
      setItems(items);
    } else {
      setClicked("");
      setDisplay("none");
      setItems("");
    }
  }
  const itemList = [
    <GoldCoin display={display} />, <Skulls display={display} />, <SilverCoins display={display} />, <Booms display={display} />
  ]; //랜덤 아이템 배정
  const itemDisplay =()=> {
    const randomDisplay = Math.floor(Math.random() * itemList.length);
    let randomResult = itemList[randomDisplay];
    RandomItems.current = randomResult; //랜덤 아이템 요소 고정
    console.log(display);
  }
  itemDisplay();

  return (
    <>
    <Container>
      <CoffinStyle
        onClick={onClicked}
        src={coffinCloseRandom}
      ></CoffinStyle>
      {display !== "none"
        ? RandomItems.current
        : <></>
        }
      {coffinCloseRandom === coffinCloseB
        ? <OpenCoffinStyle src={coffinOpenB}></OpenCoffinStyle>
        : <OpenCoffinStyle src={coffinOpenW}></OpenCoffinStyle>}
    </Container>
    </>
  )
}
export default Coffins;