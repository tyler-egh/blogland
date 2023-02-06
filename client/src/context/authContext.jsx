import axios from "axios";

import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    //check if user is logged in
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")|| null ))

    const login = async(Inputs) => {
       const res =  await axios.post("/auth/login", inputs);
       setCurrentUser(res.data);
    };
    
    const logout = async(Inputs) => {
        const res =  await axios.post("/auth/logout", inputs);
        setCurrentUser(null);
     };

     useEffect(()=>{
localStorage.setItem("user", JSON.stringify(currentUser))
     },[currentUser])

     return<AuthContext.Provider value={{currentUser, login , logout}}>{children}</AuthContext.Provider>
}