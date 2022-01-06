import axios from "axios";
const baseUrl = `${process.env.REACT_APP_API_URL}`;

export const login = (username: string, password: string) => {
  return axios
    .post(`${baseUrl}/signin`, {
      username,
      password,
    })
    .then ((res) => {
      if (res.data.accessToken) {
        localStorage.setItem("user", res.data);
      }

      return res.data;
    })
}

export const logout = () => {
  localStorage.removeItem("user");
}

export const getCurrentUser = () => {
  const userStatus = localStorage.getItem("user");
  if (userStatus) return JSON.parse(userStatus);

  return null;
}