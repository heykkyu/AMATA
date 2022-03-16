import Lottie from 'react-lottie-player'
import profilelottie from '../assets/lottie/profile.json'
import styled from 'styled-components'
import { pallete, common } from "@src/assets/css/pallete";

const Component = styled.div`
  background: ${pallete.tangleBack};
  min-height: ${common.emitHead};
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    margin: 5px;
  }
`

const ParcelListWrap = styled.div`
  line-height: 25px;
  background-color: white;
  margin-top: 15px;
  padding-bottom: 50px;
`

const ParcelList = () => {
  return (
    <Component>
      <Lottie
        loop
        animationData={profilelottie}
        style={{ height: 300 }}
        play
      />
      <div>
        <p>
          <strong>쟁구</strong>님의 정보는 엄격히
        </p>
        <p>
          <strong>SECURE</strong>하게 보관 중입니다.
        </p>
      </div>
    </Component>
  );
}

export default ParcelList;
 