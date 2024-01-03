import axios from "axios";
import { json } from "react-router-dom";
const BASE_URL = "http://localhost:7000/api/";

// if (localStorage.getItem("infiniteScrollEnabled") != null) {

  var Token =JSON.parse(JSON.parse(localStorage.getItem('persist:Futuradata')).user).userData[0] &&
  JSON.parse(JSON.parse(localStorage.getItem('persist:Futuradata')).user).userData[0].accesstoken
// }

console.log('finaly Token**',Token );

export const publicRequest = axios.create({
    baseURL: BASE_URL,
    // auth: BASE_URL,
  }); 

  export const userRequest= axios.create({
    baseURL:BASE_URL,
    headers: { token: `Bearer ${Token}` }, 
  })