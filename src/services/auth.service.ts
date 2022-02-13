import axios from "axios";
const baseUrl = `${process.env.REACT_APP_API_URL}`;

export const login = (email: string, password: string) => {
  return axios
    .post(`${baseUrl}`, {
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