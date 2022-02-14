import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux"
import Lottie from 'react-lottie-player'
import meditationlottie from '../assets/lottie/meditation.json'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components'
import { useNavigate } from 'react-router';
import { addTracking } from '@src/modules/trackings'
  
  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

const ParcelListWrap = styled.div`

`

const ParcelList = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const navigate = useNavigate();
  // const onAdd = useCallback(() => dispatch(addTracking()), [dispatch]);

  const [tracking, setTracking] = useState<string>("");
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setTracking(e.target.value);
  }

  const addNewParcel = () => {
    dispatch(addTracking(tracking));
    navigate(`/detail/${tracking}`)
  }
  
  return (
    <>
    {/* 스타일 관련 태그들 components로 빼기  */}
      <ParcelListWrap>
        <Lottie
          loop
          animationData={meditationlottie}
          style={{ height: 300 }}
          play
        />
        <form className={classes.root} noValidate autoComplete="off">
          <TextField 
            onChange={handleChange}
            id="outlined-basic" 
            label="Tracking No" 
            variant="outlined"
          />
        </form>
        <Button
          variant="contained" 
          color="primary"
          onClick={addNewParcel}
        >등록하기</Button>
      </ParcelListWrap>
    </>
  );
}

export default ParcelList;
 