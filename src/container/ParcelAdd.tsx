import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux"
import Lottie from 'react-lottie-player'
import meditationlottie from '../assets/lottie/meditation.json'
import TrackingInput from "@src/components/parcel/TrackingInput";
  

const ParcelList = () => {
  return (
    <>
      <Lottie
        loop
        animationData={meditationlottie}
        style={{ height: 200 }}
        play
      />
      
      <TrackingInput
      />
    </>
  );
}

export default ParcelList;
 