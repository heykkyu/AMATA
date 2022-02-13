import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '@src/state';
import Lottie from 'react-lottie-player'
import meditationlottie from '../assets/lottie/meditation.json'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components'
import { useNavigate } from 'react-router';
  
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
  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(actionCreators, dispatch);
  const amount = useSelector((state: State) => state.bank)
  const classes = useStyles();
  const navigate = useNavigate();

  const [tracking, setTracking] = useState<string>();
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setTracking(e.target.value);
  }
  const addNewParcel = () => {
    console.log('tracking', tracking)
    navigate(`/${tracking}`)
  }
  return (
    <>
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
        <h1>{amount}</h1>
          <button onClick={() => depositMoney(1000)}>Deposit</button>
          <button onClick={() => withdrawMoney(500)}>Withdarw</button>
          <button onClick={() => bankrupt()}>Bankrupt</button>
      </ParcelListWrap>
    </>
  );
}

export default ParcelList;
 