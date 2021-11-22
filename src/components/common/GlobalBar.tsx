import { ReactComponent as Hamburger } from "@src/assets/img/hamburger.svg";
import { Link } from "react-router-dom"
import styled from 'styled-components'

const GlobalBarWrap = styled.div`
  text-align: left;
  padding: 15px;
  position: relative;
`
const LogoBar = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  &:hover {
    cursor: pointer;
  }

`
const LogoTitle = styled.p`
  font-family: 'Anton', sans-serif;
  font-size: 18px;
  margin: 0;
  position: relative;
`


const LocalTitle = styled.div`
  margin: 0 0 5px;
  font-weight: bold;
  font-size: 1.8rem;
`

const GlobalBar = () => {
  return (
    <>
      <GlobalBarWrap>
        {/* not logged in? */}
        <LogoBar>
          <Link to="/">
            <LogoTitle>BROWN BOX</LogoTitle>
          </Link>
          <Hamburger/>
        </LogoBar>

        {/* logged in */}
        <LocalTitle>
          <p>택배 LIST</p>
        </LocalTitle>
      </GlobalBarWrap>
    </>
  );
}

export default GlobalBar;
 