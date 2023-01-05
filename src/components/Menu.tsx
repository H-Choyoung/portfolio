import { useCallback, useEffect, useRef, useState } from 'react';
import styled,{ keyframes } from 'styled-components';
import "../App.css";

const Menu = () => {
  const MenuStyle = styled.div`
    display: flex;
    width: 90%;
    padding-left: 2rem;
    // height: 100vh;
    font-family: 'Annie Use Your Telescope', cursive;
    font-size: ${props => props.fontSize || "2rem"};;
    color: ${props => props.color || "white"};
    wh1ite-space: nowrap;
    /* 하위요소 */
    
  `
  const Title = styled.div`
    font-family: 'Cabin Sketch', cursive;
    font-size: 4.5rem;
    wh1ite-space: nowrap;
    color: white;
  `
  return (
    <div style={{padding: "15vh 0 0 7vw"}}>
      <Title>FIND THE SECRET</Title>
      <div style={{paddingTop:"2vh"}}>
        <MenuStyle fontSize={"2.5rem"} >
        ✱ TRESURES ✱</MenuStyle>
        <MenuStyle color={"#F5D111"}>GOLD COIN (10%)</MenuStyle>
        <MenuStyle>SILVER COIN (30%)</MenuStyle>
        <MenuStyle>SKULLS</MenuStyle>
        <MenuStyle>TRASH</MenuStyle>
      </div>
    </div>
  )
}
export default Menu;