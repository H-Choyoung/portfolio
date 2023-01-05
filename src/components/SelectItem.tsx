// import { Children, useCallback, useRef, useState } from 'react';
// import styled, { keyframes } from 'styled-components';
// import Coffins from './Coffins';

// const GetSelectItem = (val: any): any => {
//   // const selectItems = useRef<any>("");
//   // selectItems.current = val;
//   console.log(val);
//   switch (val) {
//     case "GoldCoin":
//       return console.log("골드코인만");
//     case "SilverCoins":
//       return console.log("실버코인만");
//     case "Skulls":
//       return console.log("해골만");
//     case "Booms":
//       return console.log("꽝");
//     }

//   const BackContainer = styled.div`
//     display: flex;
//     width: 100vw;
//     height: 100vh;
//     /* 하위요소 */
//     #menuContainer {
//       width: 25vw;
//     }
//     #mainContainer {
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       width: 65vw;
//       background-image: url("/img/background.svg");
//       background-size: 90%;
//       background-repeat: no-repeat;
//       background-position: center bottom;
//     }
//     #itemContainer {
//       transform: translate(-50%, -50%);
//       position: absolute;
//       top: 22.5vh;
//       left: 34vw;
//     }
//     #sideContainer {
//       width: 10vw;
//     }
//     #web_left {
//       position: absolute;
//       z-index: 0;
//       width: 15vw;
//     }
//     #web_right {
//       position: absolute;
//       z-index: 0;
//       width: 17vw;
//       right: 0vw;
//       top: 0vw;
//     }
//     #web_right_round {
//       position: absolute;
//       z-index: 0;
//       width: 10vw;
//       right: 17vw;
//       top: -7vh;
//     }
//   `
//   return (
//     <BackContainer>
//       <div id='menuContainer'>
//         <img id='web_left' src='/img/web_left.svg'></img>
//         <span>{val}</span>
//         {console.log(val)}
//       </div>
//       <div id='mainContainer'>
//         <div id='itemContainer'>
//           {/* 첫째줄 */}
//           <Coffins GetSelectItem={GetSelectItem} left={"0"} rotate={"-1deg"} ></Coffins>
//           <Coffins GetSelectItem={GetSelectItem} left={"10vw"} rotate={"18deg"}></Coffins>
//           <Coffins GetSelectItem={GetSelectItem} left={"20vw"} rotate={"12deg"}></Coffins>
//           <Coffins GetSelectItem={GetSelectItem} left={"30vw"} rotate={"-1deg"}></Coffins>
//           <Coffins GetSelectItem={GetSelectItem} left={"38vw"} rotate={"4deg"}></Coffins>
//           {/* 둘째 GetSelectItem={GetSelectItem} setSelectItem={GetSelectItem}줄 */}
//           <Coffins GetSelectItem={GetSelectItem} top={"9vw"} left={"0"} rotate={"1deg"}></Coffins>
//           <Coffins GetSelectItem={GetSelectItem} top={"9vw"} left={"11vw"} rotate={"10deg"}></Coffins>
//           <Coffins GetSelectItem={GetSelectItem} top={"11vw"} left={"20vw"} rotate={"-6deg"}></Coffins>
//           <Coffins GetSelectItem={GetSelectItem} top={"9vw"} left={"30vw"} rotate={"10deg"}></Coffins>
//           <Coffins GetSelectItem={GetSelectItem} top={"9vw"} left={"40vw"} rotate={"24deg"}></Coffins>
//           {/* 셋째 GetSelectItem={GetSelectItem} setSelectItem={GetSelectItem}줄 */}
//           <Coffins GetSelectItem={GetSelectItem} top={"19vw"} left={"1vw"} rotate={"10deg"}></Coffins>
//           <Coffins GetSelectItem={GetSelectItem} top={"19vw"} left={"10vw"} rotate={"27deg"}></Coffins>
//           <Coffins GetSelectItem={GetSelectItem} top={"20.5vw"} left={"15vw"} rotate={"-13deg"}></Coffins>
//           <Coffins GetSelectItem={GetSelectItem} top={"18vw"} left={"28vw"} rotate={"21deg"}></Coffins>
//           <Coffins GetSelectItem={GetSelectItem} top={"19vw"} left={"38vw"} rotate={"17deg"}></Coffins>
//         </div>
//       </div>
//       <div id='sideContainer'>
//         <img id='web_right' src='/img/web_right.png'></img>
//         <img id='web_right_round' src='/img/web_right_round.svg'></img>
//       </div>
//     </BackContainer>
//   )
// }
// export default GetSelectItem;