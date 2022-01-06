import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const AuthLoginWrap = styled.div`
  position: relative;
  >div {
    position: absolute;
    top: 50%;
    left: 50%;
    > div {
      margin: 5px 0;
    }
    button {
      display: block;
    }
  }
`

const AuthLogin = () => {

  return (
    <>
      <AuthLoginWrap>
        <div>
          <p>Email account</p>
          <TextField id="outlined-basic" label="id" variant="outlined" />
          <p>Passwords</p>
          <TextField id="outlined-basic" label="password" variant="outlined" />
          <Button variant="contained" color="primary">Login</Button>
        </div>
      </AuthLoginWrap>
    </>
  );
}

export default AuthLogin;
 