import API from "../utils/API";

export const login = (email, password) =>
  API.post("users/login", {
    email: email,
    password: password,
    password_confirmation: password
  });
export const getStuff = () => API.get("/employees");

export default {
  login,
  getStuff
};
