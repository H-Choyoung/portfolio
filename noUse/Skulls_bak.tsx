import { CSSProperties, useCallback, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';

  let skullSpecial = "/img/skull_special.svg";
  let skull1 = "/img/skull_1.svg";
  let skull2 = "/img/skull_2.svg";
  let skull3 = "/img/skull_3.svg";
  let skulls = [skullSpecial, skull1, skull2, skull3];
  
  const RandomArrs = () => {
    const randomDisplay = Math.floor(Math.random() * skulls.length);
    let randomResult = skulls[randomDisplay];
    console.log(randomResult);
    return randomResult;
  }

  const SkullKey = keyframes`
    0% {right: 0px; opacity: 0;}
    50% {right: 10px; opacity: 0%;}
    70% {opacity: 0%; top: 0px;}
    90% {opacity: 100%; top: -10px;}
    100% {right: 70px; rotate: -23deg; opacity: 100%; top: 0px;}
  `
  const SkullStyle = styled.img`
    display: ${(props) => props.display || "none"};
    position: absolute;
    z-index: 1;
    width: 95px;
    top: 1rem;
    left: 2.5rem;
    animation: ${SkullKey} 1.5s ease;
    animation-fill-mode: forwards;
    transition: 0.3s;
    `

const Skulls = ({ display }: CSSProperties) => {
  return (
    <SkullStyle
      display={display}
      src={RandomArrs()}
    ></SkullStyle>
  )
}
export default Skulls;