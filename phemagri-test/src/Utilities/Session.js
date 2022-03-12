
// this variable is used to pass down the token to the Api for authorization
let retrieveToken=""
// This function creates a cookie to create a session and store the token 
const createCookie =(token)=> {
     //   const key='token'
     //    const expire = (new Date(Date.now()+ 3600*1000)).toUTCString();
     //     document.cookie= key + "=" + token + ";" + expire + "; path=/";
        
         retrieveToken=token;
       
    }



    export {createCookie,retrieveToken}