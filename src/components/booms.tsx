import { CSSProperties, useCallback, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';

let boom_blood = "/img/boom_blood.svg";
let boom_leaf = "/img/boom_leaf.svg";
let boom = "/img/boom.svg";
let boomPaper = "/img/boom_paper.png";
let booms = [boom_blood, boom_leaf, boom, boomPaper];
  
  const RandomArrs = () => {
    const randomDisplay = Math.floor(Math.random() * booms.length);
    let randomResult = booms[randomDisplay];
    // console.log(randomResult);
    return randomResult;
  }

  const BoomKey = keyframes`
    0% {right: 0px; opacity: 0;}
    50% {right: 10px; opacity: 0%;}
    70% {opacity: 0%; top: 0px;}
    90% {opacity: 100%; rotate: 0deg; top: -10px;}
    100% {right: 70px; rotate: 10deg; opacity: 100%; top: 0px;}
  `
  const BoomStyle = styled.img`
    display: ${(props) => props.display || "none"};
    position: absolute;
    z-index: 2;
    width: ${(props) => props.width || "95px"};
    margin: ${(props) => props.margin || "0"};
    left: ${(props) => props.left || "2.5rem"};
    animation: ${BoomKey} 1.5s ease;
    animation-fill-mode: forwards;
    transition: 0.3s;
    `

const Booms = ({ display }: CSSProperties) => {
  switch(RandomArrs()){
    case boom_blood :
      return (
        <BoomStyle
          display={display}
          src={boom_blood}
          left={"6.5rem"}
          margin={"1rem 0"}
        ></BoomStyle>
        )
    case boom_leaf:
      return (
        <BoomStyle
          display={display}
          src={boom_leaf}
          left={"4.5rem"}
          margin={"3rem 0"}
        ></BoomStyle>
      )
    case boomPaper:
      return (
        <BoomStyle
          display={display}
          src={boomPaper}
          width={"90px"}
          left={"2.5rem"}
          margin={"3rem 0"}
        ></BoomStyle>
      )
      default:
        return (
          <BoomStyle
          display={display}
          src={boom}
          width={"62px"}
          left={"6.5rem"}
          margin={"6rem 0"}
        ></BoomStyle>
      )
  }
}
export default Booms;