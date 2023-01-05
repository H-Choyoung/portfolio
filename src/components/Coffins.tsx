import { CSSProperties, useCallback, useEffect, useRef, useState, forwardRef } from 'react';
import styled,{ keyframes } from 'styled-components';
import "../App.css";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import Randoms from './Randoms';
import GoldCoin from './GoldCoin';
import Skulls from './Skulls';
import SilverCoins from './SilverCoin';
import Booms from './Booms';

const Coffins = (
  { GetSelectItem, top, left, rotate}: { 
  GetSelectItem: (val: any) => void; //부모에게 값을 넘기기 위한 매개변수
  // GetSelectItem:any; //부모에게 값을 넘기기 위한 매개변수
  top?:string | number;
  left: string | number;
  rotate: string | number;
  }) => {
  const [clicked, setClicked] = useState<any>("");
  const [display, setDisplay] = useState<any>("none");
  const RandomItems = useRef<any>();
  const [getSelect, setGetSelect] = useState<any>("");

  const Container = styled.div`
    position: absolute; 
    top: ${top};
    left: ${left};
    rotate: ${rotate};
  `
  const CoffinKey = keyframes`
    0% {left: 0px;}
    100% {left: 2.5vw; rotate: 23deg;}
  `
  const CoffinStyle = styled.img`
    position: absolute; 
    z-index: 3; 
    animation: ${clicked} 1.3s ease-out;
    animation-fill-mode: forwards;
    width: 9vw;
    `
  const OpenCoffinStyle = styled.img`
    position: absolute; 
    z-index: 1; 
    width: 9vw;
  `
  let coffinCloseB = "/img/coffin_close_black.svg";
  let coffinOpenB = "/img/coffin_open_black.svg";
  let coffinCloseW = "/img/coffin_close_white.svg";
  let coffinOpenW = "/img/coffin_open_white.svg";
  let arrs = [coffinCloseB, coffinCloseW];
  let coffinCloseRandom = arrs[Randoms(arrs)]; //뚜껑색 랜덤지정

  const itemList = [
    <GoldCoin display={display} />, <SilverCoins display={display} />, <Skulls display={display} />, <Booms display={display} />
  ]; //랜덤 아이템 배정
  const randomCoffins =()=> {
    //아이템 확률 처리
    // const randomList = Math.floor(Math.random() * itemList.length);
    let rand = Math.random(); //0~1사이의 난수 생성
    if(rand < 0.1) {
      return itemList[0]; //골드
    } else if(rand < 0.3){
      return itemList[1]; //실버
    } else if (rand < 0.5) {
      return itemList[2]; //해골
    } else if (rand > 0.5) {
      return itemList[3]; //꽝
    } else {
      return itemList[3]; //꽝
    }
  }
  RandomItems.current = randomCoffins(); 

  const onClicked =()=> {
    if (clicked === "" && display === "none"){
      setClicked(CoffinKey); //키프레임 효과
      setDisplay("block"); //뚜껑이 열려야 보이게 표시
    } else {
      setClicked("");
      setDisplay("none");
    }
  }
  // const itemDisplay =()=> {
  //   // 아이템은 관이 열리는 이벤트 이후 랜덤으로 배정되어야 함
  //   const randomDisplay = Math.floor(Math.random() * itemList.length);
  //   // console.log(randomDisplay)
  //   let randomResult = itemList[randomDisplay];
  //   RandomItems.current = randomResult; //랜덤 아이템 요소 고정
  //   // console.log(RandomItems.current.type.name); //나오는 아이템 이름
  // }
  // itemDisplay();

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
      {useEffect(() => {
        setGetSelect(RandomItems.current.type.name);
        GetSelectItem(getSelect); //부모에 컴포넌트에 인자값 넘기기
      })}
      {coffinCloseRandom === coffinCloseB
        ? <OpenCoffinStyle src={coffinOpenB}></OpenCoffinStyle>
        : <OpenCoffinStyle src={coffinOpenW}></OpenCoffinStyle>}
    </Container>
    </>
  )
}
export default Coffins;