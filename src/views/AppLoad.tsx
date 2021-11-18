import React, { useEffect,useState } from 'react';
import styled from 'styled-components'
import Lottie from 'react-lottie-player'
import apploadlottie from '../assets/lottie/app-load.json'

const AppLoadDiv = styled.div`
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: fixed;
  z-index: 1;
  text-align: center;
  background-color: white;
  animation: 5.5s appload-fadeout;
`
const AppLoadDivCenter = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
`
const AppLoadText = styled.p`
  word-break: keep-all;
  strong {
    font-size: 30px;
  }
`

const AppLoad = () => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(false)
    }, (5000));
  }, [])

  return (
    <>
    {show && (
      <AppLoadDiv>
        <AppLoadDivCenter>
          <Lottie
            loop
            animationData={apploadlottie}
            style={{ height: 300 }}
            play
          />
          <AppLoadText>
            <p>내 택배는 어디에?</p>
            <strong>브라운박스</strong>
          </AppLoadText>
        </AppLoadDivCenter>
      </AppLoadDiv>
    )}
    </>
  );
}

export default AppLoad;
 