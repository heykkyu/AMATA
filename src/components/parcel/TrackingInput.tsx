import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux"
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from 'react-router';
import styled from 'styled-components'
import { addTracking } from '@src/modules/trackinglist'

import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    // '& > *': {
    //   margin: theme.spacing(1),
    //   width: '25ch',
    //   display: 'block'
    // },
    // marginBottom: '20px',
    // select: {
    //   textAlign: 'left',
    // }
  },
  button: {
    fontWeight: 'bold',
    width: '27.5ch',
    padding: '15px 0',
  },
}));

const TrackingInput = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();

  interface trackingType {
    carrier: string,
    tracking_no: string
  }
  const [trackingInfo, setTrackingInfo] = useState<trackingType>({
    carrier: "",
    tracking_no: "" 
  });

  const handleCarrier = (e:React.ChangeEvent<{ value: string }>)  => {
    console.log('e', e)
    setTrackingInfo(prev => ({
      ...prev,
      carrier: e.target.value
    }))
  }

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const regex = e.target.value.replace(/[^0-9]/g, "")
    setTrackingInfo(prev => ({
      ...prev,
      tracking_no: String(regex)
    }))
  }

  const addNewParcel = () => {
    if (!trackingInfo.carrier) {
      alert("You missed to choose carrier.");
    } else if (!trackingInfo.tracking_no || trackingInfo.tracking_no.length < 8) {
      alert("Oops! It's unvalide tracking number.")
    } else {
      dispatch(addTracking(trackingInfo.carrier, trackingInfo.tracking_no));
      navigate(`/detail/${trackingInfo.tracking_no}`)
    }
  }

  const addNewEnter = (e:React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addNewParcel();
      e.preventDefault();
    }
  }
  

  return (
    <>
      <form className={classes.root} noValidate autoComplete="off">
        <FormControl sx={{ m: 1, minWidth: 80 }} >
          <InputLabel id="select-carrier-label">Carrier</InputLabel>
            <Select
              labelId="select-carrier-label"
              id="select-carrier-label-select"
              value={trackingInfo.carrier}
              onChange={(e) => setTrackingInfo(prev => ({
                ...prev,
                carrier: e.target.value as string
              }))}
              label="Carrier"
            >
              <MenuItem disabled value="">
                {/* <em> select</em> */}
                선택
              </MenuItem>
              <MenuItem value='cj'>CJ Delivery</MenuItem>
              <MenuItem value='usps'>USPS</MenuItem>
              <MenuItem value='amazon'>Amazon Delivery</MenuItem>
            </Select>
          </FormControl>
          <br/>
            <TextField 
            onChange={handleChange}
            id="outlined-basic" 
            variant="outlined"
            label="type tracking number"
            value={trackingInfo.tracking_no}
            onKeyPress={addNewEnter}
          />
        </form>
          <Button
            variant="contained" 
            color="primary"
            onClick={addNewParcel}
            className={classes.button}
          >등록하기</Button>
    </>
  )

}

export default TrackingInput;