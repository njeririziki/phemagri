import React, {useState,useContext,createContext} from 'react'
//import axios from '../Utilities/Api'

// in the create context we pass down a function to allow a child componenent to 
// update the user state in the provider
const RoleContext = createContext({
    user:null,
    updateUser:()=>{},
});

const initUser= {role:'Farmer', email:'njeri@test.com', first_name:'Njeri', role_id:1,
    last_name:'Kari', phone:'07348790', id:93, location:'Kawi'};
// This function provides components with the data stored.
const RoleProvider = ({children})=>{

    const [user, setUser] = useState(initUser);

function updateUser(credentials){
    console.log(credentials);
    setUser(credentials)
}
return(
    <RoleContext.Provider value={{user,updateUser}} >
    {children}
    </RoleContext.Provider>
)
   
}
// This is a custom hook to pass down context
function useUserContext() {
    const { user, updateUser } = useContext(RoleContext);
  
    return { user, updateUser };
  }
export {RoleContext,RoleProvider,useUserContext};