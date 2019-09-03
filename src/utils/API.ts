import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3000",
  // baseURL: "http://dummy.restapiexample.com/api/v1",
  responseType: "json"
});
