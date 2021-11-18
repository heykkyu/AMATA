import React, { useEffect,useState } from 'react';
import { ReactComponent as Hamburger } from "@src/assets/img/hamburger.svg";
import styled from 'styled-components'

const GlobalNavWrap = styled.div`
  text-align: left;
  border-bottom: 1px solid #ddd;
  padding: 15px;
`

const LogoTitle = styled.p`
  font-family: 'Anton', sans-serif;
  font-size: 20px;
  margin: 0;
`

const GlobalNav = () => {
  return (
    <>
      <GlobalNavWrap>
        <LogoTitle>BROWN BOX</LogoTitle>
        <Hamburger/>
      </GlobalNavWrap>
    </>
  );
}

export default GlobalNav;
 