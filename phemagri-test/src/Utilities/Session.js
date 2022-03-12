import jwtDecode from 'jwt-decode'

let retrieveToken=""
const createCookie =(token)=> {
       const key='token'
        const expire = (new Date(Date.now()+ 3600*1000)).toUTCString();
         document.cookie= key + "=" + token + ";" + expire + "; path=/";
         console.log(document.cookie)
         retrieveToken=token;
         console.log(retrieveToken)
    }



    export {createCookie,retrieveToken}