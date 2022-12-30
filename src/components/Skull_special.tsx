import { CSSProperties, useCallback, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';

  let skullSpecial = "/img/skull_special.svg";

  const SkullKey = keyframes`
    0% {right: 0px; opacity: 0;}
    50% {right: 10px; opacity: 0%;}
    70% {opacity: 0%; top: 0px;}
    90% {opacity: 100%; top: -10px;}
    100% {right: 70px; rotate: -23deg; opacity: 100%; top: 0px;}
  `
  const SkullStyle = styled.img`
    display: ${(props) => props.display || "none"};
    position: relative;
    width: 100px;
    top: 1rem;
    left: 2.5rem;
    animation: ${SkullKey} 1.5s ease;
    animation-fill-mode: forwards;
    transition: 0.3s;
    `
const SkullSpecial = ({ display }: CSSProperties) => {
  return (
      <SkullStyle
        display={display}
        src={skullSpecial}
      ></SkullStyle>
  )
}

export default SkullSpecial;