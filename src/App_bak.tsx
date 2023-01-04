import { useCallback, useEffect, useRef, useState } from 'react';
import styled,{ keyframes } from 'styled-components';
import "./App.css";
import Coffins from './components/Coffins';

const App = () => {
  const [selectItem, setSelectItem]= useState<any>("");
  const getSelectItem =(val:any):void=> {
    setSelectItem(val);
  }
  console.log(selectItem);
  
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
      background-size: 90%;
      background-repeat: no-repeat;
      background-position: center bottom;
    }
    #itemContainer {
      transform: translate(-50%, -50%);
      position: absolute;
      top: 22.5vh;
      left: 34vw;
    }
    #sideContainer {
      width: 10vw;
    }
    #web_left {
      position: absolute;
      z-index: 0;
      width: 15vw;
    }
    #web_right {
      position: absolute;
      z-index: 0;
      width: 17vw;
      right: 0vw;
      top: 0vw;
    }
    #web_right_round {
      position: absolute;
      z-index: 0;
      width: 10vw;
      right: 17vw;
      top: -7vh;
    }
  `
  return (
    <BackContainer>
      <div id='menuContainer'>
        {/* <SelectedItem /> */}
        <img id='web_left' src='/img/web_left.svg'></img>
      </div>
      <div id='mainContainer'>
        <div id='itemContainer'>
          {/* 첫째줄 */}
          <Coffins setSelectItem={getSelectItem} left={"0"} rotate={"-1deg"} ></Coffins>
          <Coffins setSelectItem={getSelectItem} left={"10vw"} rotate={"18deg"}></Coffins>
          <Coffins setSelectItem={getSelectItem} left={"20vw"} rotate={"12deg"}></Coffins>
          <Coffins setSelectItem={getSelectItem} left={"30vw"} rotate={"-1deg"}></Coffins>
          <Coffins setSelectItem={getSelectItem} left={"38vw"} rotate={"4deg"}></Coffins>
          {/* 둘째 setSelectItem={getSelectItem}줄 */}
          <Coffins setSelectItem={getSelectItem} top={"9vw"} left={"0"} rotate={"1deg"}></Coffins>
          <Coffins setSelectItem={getSelectItem} top={"9vw"} left={"11vw"} rotate={"10deg"}></Coffins>
          <Coffins setSelectItem={getSelectItem} top={"11vw"} left={"20vw"} rotate={"-6deg"}></Coffins>
          <Coffins setSelectItem={getSelectItem} top={"9vw"} left={"30vw"} rotate={"10deg"}></Coffins>
          <Coffins setSelectItem={getSelectItem} top={"9vw"} left={"40vw"} rotate={"24deg"}></Coffins>
          {/* 셋째 setSelectItem={getSelectItem}줄 */}
          <Coffins setSelectItem={getSelectItem} top={"19vw"} left={"1vw"} rotate={"10deg"}></Coffins>
          <Coffins setSelectItem={getSelectItem} top={"19vw"} left={"10vw"} rotate={"27deg"}></Coffins>
          <Coffins setSelectItem={getSelectItem} top={"20.5vw"} left={"15vw"} rotate={"-13deg"}></Coffins>
          <Coffins setSelectItem={getSelectItem} top={"18vw"} left={"28vw"} rotate={"21deg"}></Coffins>
          <Coffins setSelectItem={getSelectItem} top={"19vw"} left={"38vw"} rotate={"17deg"}></Coffins>
        </div>
      </div>
      <div id='sideContainer'>
        <img id='web_right' src='/img/web_right.png'></img>
        <img id='web_right_round' src='/img/web_right_round.svg'></img>
      </div>
    </BackContainer>
  )
}
export default App;