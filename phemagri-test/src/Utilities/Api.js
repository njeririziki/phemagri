import axios from "axios";

const instance= axios.create({
     baseURL:'http://52.215.238.240/api/',
    responseType:'json'
});

export default instance;