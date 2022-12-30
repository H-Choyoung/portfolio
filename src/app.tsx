import { useCallback, useRef, useState } from 'react';
import styled,{ keyframes } from 'styled-components';
import "./App.css";
import Coffins from './Coffins';
import Coffins2 from './Coffins_test';

const App = () => {

  return (
    <>
      <Coffins></Coffins>
      <Coffins2></Coffins2>
    </>
  )
}
export default App;