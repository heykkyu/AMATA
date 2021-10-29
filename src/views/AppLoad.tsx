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
  animation: 5s fadeOut;
`

const AppLoadText = styled.p`
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
        <Lottie
        loop
        animationData={apploadlottie}
        play
      />
        <AppLoadText>
          <p>영수증으로 적립받는 신개념 서비스</p>
          <strong>AMATA</strong>
        </AppLoadText>
      </AppLoadDiv>
    )}
    </>
  );
}

export default AppLoad;
 