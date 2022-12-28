import { useCallback, useRef, useState } from 'react';
import styled,{ keyframes } from 'styled-components';
import "./App.css";
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const App = () => {
  const [clicked, setClicked] = useState<any>("");
  const [display, setDisplay] = useState<any>("none");
  const [skullKey, setSkullKey] = useState<any>("");

  let skullSpecial = "/img/skull_special.svg";
  let coffinCloseB = "/img/coffin_close_black.svg";
  let coffinOpenB = "/img/coffin_open_black.svg";

  const CoffinKey = keyframes`
    0% {left: 0px;}
    100% {left: 50px; rotate: 23deg;}
  `
  const CoffinStyle = styled.img`
    position: absolute; 
    z-index: 2; 
    animation: ${clicked} 1.3s ease-out;
    animation-fill-mode: forwards;
    `

  const SkullKey = keyframes`
    0% {right: 0px; opacity: 0;}
    50% {right: 10px; opacity: 0%;}
    70% {opacity: 0%;}
    100% {right: 70px; rotate: -23deg; opacity: 100%;}
  `
  const SkullStyle = styled.img`
    display: ${display};
    position: absolute;
    width: 100px;
    top: 1rem;
    left: 2.5rem;
    animation: ${skullKey} 1.5s ease;
    animation-fill-mode: forwards;
    transition: 0.3s;
    `

  const onClicked =()=> {
    if (clicked === "" && display === "none"){
      setClicked(CoffinKey)
      setDisplay("block")
      setSkullKey(SkullKey);
    } else {
      setClicked("");
      setDisplay("none");
      setSkullKey("");
    }
  }

  return (
    <>
    <div>
      <CoffinStyle
        id='coffin'
        src={coffinCloseB}
        onClick={onClicked}
        ></CoffinStyle>
    </div>
      <SkullStyle
        src={skullSpecial}
      ></SkullStyle>
      <img src={coffinOpenB}></img>
      <div>
        {/* <Player
          autoplay
          loop
          src="/img/129232-rewards-with-confetti.json"
          style={{
            width:'300px',
            height:'300px'
          }}
        >
        </Player> */}
      </div>
    </>
  )
}
export default App;