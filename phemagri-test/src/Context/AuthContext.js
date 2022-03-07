import React,{useEffect,useState} from 'react';
// import {projectAuth} from '../Firebase/config'

const AuthContext = React.createContext();

const AuthProvider = ({children})=>{
    
    const [user,setUser] = useState(null);
    const [admin, setAdmin]= useState(false)

    useEffect (()=>{
    //   projectAuth.onAuthStateChanged(setUser)
     if(user){
        // const email = projectAuth.currentUser.email
    //     if(email==='admin@sellamoment.com'){
    //         setAdmin(true);
    //  }
     }

        
    },[user,admin]);
    return (
        <AuthContext.Provider value={{user,admin}}>
            {children}
        </AuthContext.Provider>
    )
    }
 export default AuthContext;
 export {AuthProvider}