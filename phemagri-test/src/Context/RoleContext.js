import React, {useState,useEffect,createContext} from 'react'

const RoleContext = createContext();

const RoleProvider = ({children})=>{

    const [creds, setCreds] = useState({})
    useEffect(() => {
    const registered= localStorage.getItem("creds");
    const credentials= JSON.parse(registered);
    const  user =  credentials.username;
    const  role =  credentials.role;
     console.log(credentials)
  
    if (user && role){
     setCreds(credentials)
     }

}, [])
 
console.log(creds);
return(
    <RoleContext.Provider value={{creds}} >
    {children}
    </RoleContext.Provider>
)
   
}

export {RoleContext,RoleProvider};