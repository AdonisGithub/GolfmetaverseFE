import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  //timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});
