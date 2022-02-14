import { useState } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { login } from "@src/services/auth.service";
import { useNavigate } from 'react-router';

const AuthLoginWrap = styled.div`
  .loginbox {
    /* display: flex;
    flex-direction: column;
    align-items: center; */
    width: 60%;
    min-width: 300px;
    max-width: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* p {
      width: inherit;
      padding-left: 10px;
      text-transform: uppercase;
    } */
    .MuiFormControl-root {
      width: 100%;
      margin-top: 20px;
    }
    button {
      margin: 50px 0;
      width: 100%;
      height: 55px;
      font-weight: bold;
      font-size: 15px;
    }
    .loginguide {
      font-size: 11px;
      opacity: .8;
      word-break: keep-all;
      .loginguide-logo {
        font-weight: bold;
      }
      .loginguide-privacy {
        display: inline-block;
        border-bottom: 1px solid gray;
        padding-bottom: 1px;
      }
    }
  }
`

const AuthLogin = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  })

  const handleInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }
  const handleLogin = () => {
    login(form.email, form.password).then(
      () => {
        navigate("/");
        window.location.reload();
      }
    )
  }

  return (
    <>
      <AuthLoginWrap>
        <div className="loginbox">
          <TextField 
            id="outlined-basic" 
            label="Email" 
            variant="outlined" 
            name="email" 
            value={form.email} 
            onChange={handleInput} 
            placeholder="Type Any Text"
          />
          <TextField 
            id="outlined-basic" 
            label="Password" 
            variant="outlined" 
            name="password" 
            type="password" 
            value={form.password} 
            onChange={handleInput}
            placeholder="Type Any Text"
          />
          <Button 
            onClick={() => handleLogin()} 
            variant="contained" 
            color="primary"
          >Login</Button>
          <p className="loginguide">
            <span className="loginguide-logo">BrownBox</span>를 사용하면 <span className="loginguide-privacy">개인정보처리방침</span>에 동의하는 것으로 간주됩니다.</p>
        </div>
      </AuthLoginWrap>
    </>
  );
}

export default AuthLogin;
 