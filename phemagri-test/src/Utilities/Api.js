import axios from "axios";
import { retrieveToken } from "./Session";

// This function creates an instance of axios that will be used everywhere
const instance= axios.create({
     baseURL:'http://52.215.238.240/api/',
    responseType:'json'
});

//this sets the necessary authorization header appending the Bearer token for 
// authorization
instance.interceptors.request.use(function (config) {
    let tokened= retrieveToken;

     config.headers['Authorization'] = tokened? `Bearer ${tokened}`:'' ;
   
    return config;
  }, function (error) {
    return Promise.reject(error);
  });



export default instance;