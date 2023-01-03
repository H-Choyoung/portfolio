import { Children, useCallback, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Coffins from './Coffins';

const SelectedItem = () => {
  const [data, setData] = useState("");

  const getData = (data: any)=> {
    setData(data);
  }

  return (
    <>
      <div>테스트: {data}</div>
      <Coffins data={data} getData={getData}></Coffins>
    </>
  )
}
export default SelectedItem;