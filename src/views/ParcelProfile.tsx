import Lottie from 'react-lottie-player'
import profilelottie from '../assets/lottie/profile.json'
import styled from 'styled-components'

const ParcelListWrap = styled.div`

`

const ParcelList = () => {
  return (
    <>
      <ParcelListWrap>
        <Lottie
          loop
          animationData={profilelottie}
          style={{ height: 300 }}
          play
        />
        <strong>쟁구</strong>님의 정보는 엄격히<br/> <strong>SECURE</strong>하게 보관 중입니다.
      </ParcelListWrap>
    </>
  );
}

export default ParcelList;
 