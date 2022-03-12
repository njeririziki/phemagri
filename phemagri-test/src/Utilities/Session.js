
 export const createCookie =(user)=> {
       const key='user'
        const expire = (new Date(Date.now()+ 3600*1000)).toUTCString();

         document.cookie= key + "=" + user + ";" + expire + "; path=/";
         console.log(document.cookie)
    }


