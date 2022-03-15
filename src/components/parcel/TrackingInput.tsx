import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux"
import Select from 'react-select'
import { useNavigate } from 'react-router';
import styled from 'styled-components'
import { addTracking } from '@src/modules/trackinglist'
import Button from '@material-ui/core/Button';

const FormWrap = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .select {
    margin-top: 20px;
    width: 220px;
    text-align: left;
  }
  input {
    border: 1px solid hsl(0, 0%, 80%);
    border-radius: 5px;
    margin-top: 5px;
    width: 220px;
    padding: 10px 10px;
    box-sizing: border-box;
  }
  button {
    margin: 20px 0;
    height: 50px;
    width: 220px;  
    font-weight: bold;
  }
`

type OptionType = {
  value: string;
  label: string;
};

interface trackingType {
  carrier: string,
  tracking_no: string
}

const options: OptionType[] = [
  { value: "amazon", label: "Amazon" },
  { value: "usps", label: "USPS" },
  { value: "cj", label: "CJ Delivery" }
];

const TrackingInput = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  const [trackingInfo, setTrackingInfo] = useState<trackingType>({
    carrier: "",
    tracking_no: "" 
  });

  const [selectedOption, setSelectedOption] = useState<OptionType>();
  const handleChangeSelect = (selectedOption:any) => {
    console.log(selectedOption)
    setTrackingInfo(prev => ({
      ...prev,
      carrier: selectedOption.value
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
      <FormWrap>
        <Select 
          className="select"
          defaultValue={{value: '', label: '택배사 선택'}}
          value={selectedOption}
          onChange={handleChangeSelect}
          options={options}
        />
        <input
          onChange={handleChange}
          value={trackingInfo.tracking_no}
          onKeyPress={addNewEnter}
          placeholder="운송장 번호"
        >
        </input>
        <Button
          variant="contained" 
          color="primary"
          onClick={addNewParcel}
        >등록하기</Button>
      </FormWrap>
    </>
  )

}

export default TrackingInput;