import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux"
import Lottie from 'react-lottie-player'
import meditationlottie from '../assets/lottie/meditation.json'
import TrackingInput from "@src/components/parcel/TrackingInput";
import styled from "styled-components";
import { pallete, common } from "@src/assets/css/pallete";

const Component = styled.div`
  background: ${pallete.tangleBack};
  min-height: ${common.emitHead};
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const ParcelList = () => {
  return (
    <Component>
      <Lottie
        loop
        animationData={meditationlottie}
        style={{ height: 200 }}
        play
      />
      <TrackingInput
      />
    </Component>
  );
}

export default ParcelList;
 