import { useCallback, useRef, useState } from 'react';
import styled,{ keyframes } from 'styled-components';
import "./App.css";
import Coffins from './components/Coffins';

const App = () => {
  const BackContainer = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    /* 하위요소 */
    #menuContainer {
      width: 25vw;
    }
    #mainContainer {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 65vw;
      background-image: url("/img/background.svg");
      background-size: 100%;
      background-repeat: no-repeat;
      background-position: 0 100%;
    }
    #itemContainer {
      position: absolute;
      top: 50%;
      left: 50%;
    }
    #sideContainer {
      width: 10vw;
    }
  `

  return (
    <BackContainer>
      <div id='menuContainer'></div>
      <div id='mainContainer'>
        <div id='itemContainer'>
          <Coffins left={"0rem"}></Coffins>
          <Coffins left={"18rem"}></Coffins>
          <Coffins left={"36rem"}></Coffins>
          <Coffins top={"22rem"} left={"0rem"}></Coffins>
          <Coffins top={"22rem"} left={"18rem"}></Coffins>
          <Coffins top={"22rem"} left={"36rem"}></Coffins>
        </div>
      </div>
      <div id='sideContainer'></div>
    </BackContainer>
  )
}
export default App;