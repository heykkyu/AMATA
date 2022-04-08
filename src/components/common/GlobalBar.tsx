// import { ReactComponent as Hamburger } from "@src/assets/img/hamburger.svg";
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router"
import { Link } from "react-router-dom"
import { MdKeyboardBackspace } from "react-icons/md";
import { pallete } from "@src/assets/css/pallete"
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import { logout } from "@src/modules/auth";
import { RootState } from '@src/modules';

const GlobalBarWrap = styled.div`
  text-align: left;
  padding: 10px;
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

const Title = styled.div`
  display: flex;
  > a {
    margin-left: 10px;
    display: table;
    span {
      display:table-cell;
      vertical-align:middle;
    }
    &:hover {
      opacity: .5;
    }
  }
`
const LogoTitle = styled.span`
  font-family: 'Anton', sans-serif;
  font-size: 18px;
  margin: 0;
  position: relative;
`
const LoginTitle = styled.span`
  position: relative;
  font-weight: bold;
  text-transform: uppercase; 
`


const LocalTitle = styled.div`
  background-color: ${pallete.tangleBack};
  border-radius: 20px;
  margin: 10px 0 5px;
  padding: 5px 15px;
  font-weight: bold;
  font-size: 20px;
`

const GlobalBar = () => {
  const { isLogedIn } = useSelector((state: RootState) => state.auth);
  const location = useLocation();
  const navigate = useNavigate();
  const [current, setCurrent] = useState("");
  const [backBtn, handleBackBtn] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0,0);

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
    
      case "login":
        return "Login"
        
      default:
        return "택배 LIST"
    }
  }

  const goUpPage = () => {
    navigate("/");
  }

  return (
    <>
      <GlobalBarWrap>
          <LogoBar>
            <LogoBack onClick={goUpPage}>
              {backBtn && (
                <MdKeyboardBackspace/>
              )}
            </LogoBack>
            <Title>
              <Link to="/">
                <LogoTitle>BROWN BOX</LogoTitle>
              </Link>
              {!isLogedIn ? (
                <Link to="/login">
                  <LoginTitle>Log In</LoginTitle>
                </Link>
              ) : (
                <a onClick={() => logout()}>
                  <LoginTitle>Log Out</LoginTitle>
                </a>
              ) }
            </Title>
          </LogoBar>
        {isLogedIn && (
          <LocalTitle>
            <p>{current}</p>
          </LocalTitle>
        )}
      </GlobalBarWrap>
    </>
  );
}

export default GlobalBar;
 