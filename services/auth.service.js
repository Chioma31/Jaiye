
import axios from "axios";


const API_URL = "https://tickeneft.onrender.com/api/";

export const Register = (
  name,
  email,
  password,
) => {
  return axios.post(API_URL + "partners/signup", {
    name,
    email,
    password,
  });
};


export const Login = (email ,password) => {
  return axios
    .post(API_URL + "partners/login", {
      email,
      password,
    })
};






