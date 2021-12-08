// import { ReactComponent as Hamburger } from "@src/assets/img/hamburger.svg";
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router"
import { Link } from "react-router-dom"
import { MdKeyboardBackspace } from "react-icons/md";
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
  height: 30px;
  &:hover {
    cursor: pointer;
  }
  .back {
    width: 20px;
  }
`
const LogoBack = styled.div`
  font-size: 25px;
`
const LogoTitle = styled.span`
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
  const location = useLocation();
  const navigate = useNavigate();
  const [current, setCurrent] = useState("");
  const [backBtn, handleBackBtn] = useState(false);

  useEffect(() => {
    console.log("locaiton", location)

    setCurrent(mapCurrent(location.pathname.split("/")[1]))
    if (location.pathname.split("/")[2]) {
      handleBackBtn(true)
    } else {
      handleBackBtn(false)
    }

  }, [location])

  const mapCurrent = (val: any) => {
    switch (val) {
      case "detail":
        return "택배 STATUS"

      case "add":
        return "택배 ADD"

      case "event":
        return "EVENT"
        
      case "profile":
        return "나의 PROFILE"
    
      default:
        return "택배 LIST"
    }
  }

  const goUpPage = () => {
    navigate(-1);
  }

  return (
    <>
      <GlobalBarWrap>
        {/* not logged in? */}
        <LogoBar>
          <LogoBack onClick={goUpPage}>
            {backBtn && (
              <MdKeyboardBackspace/>
            )}
          </LogoBack>
          <Link to="/">
            <LogoTitle>BROWN BOX</LogoTitle>
          </Link>
          {/* <Hamburger/> */}
        </LogoBar>

        {/* logged in */}
        <LocalTitle>
          <p>{current}</p>
        </LocalTitle>
      </GlobalBarWrap>
    </>
  );
}

export default GlobalBar;
 