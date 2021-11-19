import { ReactComponent as Hamburger } from "@src/assets/img/hamburger.svg";
import styled from 'styled-components'

const GlobalBarWrap = styled.div`
  text-align: left;
  border-bottom: 1px solid #ddd;
  padding: 15px;
  position: relative;
`

const LogoTitle = styled.p`
  font-family: 'Anton', sans-serif;
  font-size: 20px;
  margin: 0;
`

const HamburgerWrap = styled.div`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  &:hover {
    cursor: pointer;
  }
`

const GlobalBar = () => {
  return (
    <>
      <GlobalBarWrap>
        <LogoTitle>BROWN BOX</LogoTitle>
        <HamburgerWrap>
          <Hamburger/>
        </HamburgerWrap>
      </GlobalBarWrap>
    </>
  );
}

export default GlobalBar;
 