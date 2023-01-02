import { CSSProperties, useCallback, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';

let silverCoin = "/img/silver_coin.svg";

const SilverCoinKey = keyframes`
    0% {right: 0px; opacity: 0;}
    50% {right: 10px; opacity: 0%;}
    70% {opacity: 0%; top: 0px;}
    90% {opacity: 100%; top: -10px;}
    100% {right: 70px; rotate: -23deg; opacity: 100%; top: 0px;}
  `
const SilverCoinStyle = styled.div`
  display: ${(props) => props.display || "none"};
  position: absolute;
  left: -6rem;
  z-index: 1;
  animation: ${SilverCoinKey} 1.3s ease;
  animation-fill-mode: forwards;
  /* 하위요소 */
  #silverCoin1{
    position: relative; 
    top: 10rem;
    left: 12rem;
    width: 75px;
  }
  #silverCoin2{
    position: relative; 
    top: 6rem;
    left: 9rem;
    width: 80px;
  }
  `
const SilverCoins = ({ display }: CSSProperties) => {
  return (
    <SilverCoinStyle
      display={display}
    >
      <img id='silverCoin1' src={silverCoin}></img>
      <img id='silverCoin2' src={silverCoin}></img>
    </SilverCoinStyle>
  )
}

export default SilverCoins;