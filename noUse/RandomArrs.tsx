import { CSSProperties, JSXElementConstructor, ReactElement, useRef, useState } from 'react';
import GoldCoin from '../src/components/GoldCoin';
import SkullSpecial from '../src/components/Skulls';
import SilverCoins from '../src/components/SilverCoin';

const RandomArrs = ({ arr }:any) => {
  const randomDisplay = Math.floor(Math.random() * arr.length);
  let randomResult = arr[randomDisplay];
  console.log(randomResult);
  return randomResult;
}
export default RandomArrs;