import axios from "axios";
const baseUrl = `${process.env.REACT_APP_API_URL}`;

const SIGNIN = 'auth/LOGIN';

export const doSignin = (email: string, password: string) => ({
  type: SIGNIN,
  payload: {
    email,
    password,
  }
});

type AuthAction =
  | ReturnType<typeof doSignin>

// export type AuthType = {
//   email: string,
//   password: string,
//   loading: false,
//   isLogedIn: false,
// };
type AuthState = {
  email: string,
  password: string,
  loading: boolean,
  isLogedIn: boolean,
};

const initialState: AuthState = {
  email: "",
  password: "",
  loading: false,
  isLogedIn: false,
};

export default function auth(state: AuthState = initialState, action: AuthAction): AuthState {
  switch (action.type) {
    case SIGNIN: 
      login(action.payload.email, action.payload.password);
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
        loading: false,
        isLogedIn: true
      };
    default:
      return state;
  }
}

export async function login(email: string, password: string) {
  return await axios.post(`${baseUrl}`, {
      email,
      password,
    })
    .then ((res) => {
      if (res.data.accessToken) {
        localStorage.setItem("user", res.data);
      }

      res.data = {
        email: email,
        username: "w쟁구",
        password: "****",
      }
      localStorage.setItem("user", JSON.stringify(res.data));

      return res.data;
    })
}

export const logout = () => {
  localStorage.removeItem("user");
  window.location.href = "/";
}

export const getCurrentUser = () => {
  const userStatus = localStorage.getItem("user");
  console.log("userStatus", userStatus)
  if (userStatus) return JSON.parse(userStatus);

  return null;
}

