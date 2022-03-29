import axios from "axios";

export const getList = () =>
  axios.get(`https://jsonplaceholder.typicode.com/posts`);

export const getUsers = (id) =>
  axios.get(`https://jsonplaceholder.typicode.com/users`);