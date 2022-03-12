import axios from "axios";
import { retrieveToken } from "./Session";
import jwtDecode from "jwt-decode";


const instance= axios.create({
     baseURL:'http://52.215.238.240/api/',
    responseType:'json'
});

instance.interceptors.request.use(function (config) {
    let tokened= retrieveToken;

     config.headers['Authorization'] = tokened? `Bearer ${tokened}`:'' ;
   
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

  

export default instance;