
import { CSSProperties, useCallback, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';

let light = "/img/light_yellow.svg";
let goldCoin = "/img/gold_coin.svg";
let boomPaper = "/img/boom_paper.png";
let goldItems = [goldCoin, boomPaper];

const RandomArrs = () => {
  const randomDisplay = Math.floor(Math.random() * goldItems.length);
  let randomResult = goldItems[randomDisplay];
  // console.log(randomResult);
  return randomResult;
}

  /* 빛 효과 스타일 */
const LightKey1 = keyframes`
  0% {opacity: 0%;}
  50% {opacity: 0%;}
  70% {opacity: 0%;}
  90% {width: 120px; rotate: 90deg; opacity: 92%;}
  100% {width: 100px; rotate: -120deg; opacity: 95%;}
`
const LightKey2 = keyframes`
  0% {opacity: 0%;}
  50% {opacity: 0%;}
  70% {opacity: 0%;}
  90% {width: 65px; rotate: -35deg; opacity: 75%;}
  100% {width: 63px; rotate: -105deg; opacity: 95%;}
`
const LightKey3 = keyframes`
  0% {opacity: 0%;}
  50% {opacity: 0%;}
  70% {opacity: 0%;}
  90% {width: 40px; rotate: 30deg; opacity: 85%;}
  100% {width: 30px; rotate: 35deg; opacity: 95%;}
  `
const LightStyle = styled.div`
  display: ${(props) => props.display || "none"};
  position: absolute;
  /* 하위요소 */
  #Light1 {
    position: absolute;
    left: 4rem;
    z-index: 3;
    width: 100px;
    top: -2rem;
    animation: ${LightKey1} 1.5s ease infinite;
    animation-fill-mode: forwards;
  }
  #Light2 {
    position: absolute;
    top: 5rem;
    left: 3rem;
    z-index: 3;
    width: 63px;
    animation: ${LightKey2} 1.9s ease infinite;
    animation-fill-mode: forwards;
  }
  #Light3 {
    position: absolute;
    top: 14rem;
    left: 4rem;
    z-index: 3;
    width: 30px;
    animation: ${LightKey3} 1.3s ease infinite;
    animation-fill-mode: forwards;
  }
  `
  /* 금화 스타일 */
const GoldCoinKey = keyframes`
  0% {right: 0px; opacity: 0%;}
  50% {right: 10px; opacity: 0%;}
  70% {opacity: 0%; top: 0px;}
  90% {opacity: 100%; top: -10px;}
  100% {right: 70px; opacity: 100%; top: 0px;}
  `
const GoldCoins = styled.div`
  display: ${(props) => props.display || "none"};
  position: absolute;
  left: 1rem;
  z-index: 2;
  animation: ${GoldCoinKey} 1.3s ease;
  animation-fill-mode: forwards;
  /* 하위요소 */
  #GoldCoin1{
    position: absolute; 
    top: 6rem;
    left: 7rem;
    width: 70px;
  }
  #GoldCoin2{
    position: absolute; 
    top: 2rem;
    left: 5rem;
    width: 80px;
  }
  #GoldCoin3{
    position: absolute; 
    top: 8rem;
    left: 3rem;
    width: 71px;
  }
  #GoldCoin4{
    position: absolute; 
    top: 11rem;
    left: 4rem;
    width: 70px;
  }
  `
/* 캐치문구 */
const CatchTextStyle = styled.span`
  display: ${(props) => props.display || "none"};
  position: absolute;
  z-index: 4;
  left: 2rem;
  font-family: 'East Sea Dokdo', cursive;
  color: white;
  white-space: nowrap;
  font-size: 2rem;
  padding: 9rem 0;
  rotate: -8deg;
  box-shadow: rgba(0, 0, 0, 0.5) 1.95px 1.95px 2.6px;
  animation: ${GoldCoinKey} 2s ease;
  animation-fill-mode: forwards;
  `

/* 꽝 종이 */
const BoomPaper = styled.img`
  width: 9rem;
  display: ${(props) => props.display || "none"};
  position: absolute;
  z-index: 2;
  left: 3rem;
  margin: 3rem 0;
  rotate: -7deg;
  animation: ${GoldCoinKey} 1.3s ease;
  animation-fill-mode: forwards;
`

const GoldCoin = ({ display }:CSSProperties)=> {
  switch (RandomArrs()) {
    case goldCoin:
      return (
        <div id='GoldCoins'>
          <CatchTextStyle display={display}>YOU GET THE TREASURE!</CatchTextStyle>
          <LightStyle display={display}>
            <img id='Light1' src={light}></img>
            <img id='Light2' src={light}></img>
            <img id='Light3' src={light}></img>
          </LightStyle>
          <GoldCoins display={display}> 
            <img id='GoldCoin1' src={goldCoin}></img>
            <img id='GoldCoin2' src={goldCoin}></img>
            <img id='GoldCoin3' src={goldCoin}></img>
            <img id='GoldCoin4' src={goldCoin}></img>
          </GoldCoins>
        </div>
      )
    case boomPaper:
      return(
        <BoomPaper display={display} src={boomPaper}></BoomPaper>
      )
  }
}

export default GoldCoin;