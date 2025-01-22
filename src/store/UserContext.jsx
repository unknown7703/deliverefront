import { createContext, useState , useEffect } from 'react';
import PropTypes from "prop-types";

const UserContext=createContext();

export const UserProvider=({children})=>{

    const [user,setUser]=useState(null);

    const signup = async(signupData)=>{
        try{
            console.log(signupData);
        }catch(error){
            console.error("Signup failed:", error);
            throw error;
        }
    }

    const login = async(loginData)=>{
        try{
            console.log(loginData);
            localStorage.setItem("user",JSON.stringify(user));
        }catch(error){
            console.error("Login failed:", error);
            throw error;
        }
    }

    const logout =()=>{
        setUser(null);  
        localStorage.removeItem("user");
    }

    const initializeUser=()=>{
        const user=localStorage.getItem("user");
        if(user){
            setUser(JSON.parse(user));
        }
    }
    useEffect(() => {
        const hasInitialized = localStorage.getItem("initializeUserRan");
        if (!hasInitialized) {
          initializeUser();
        }
      }, []);

    return (
        <UserContext.Provider value={{ user, signup, login, logout, initializeUser }}>
          {children}
        </UserContext.Provider>
      );
};

UserProvider.propTypes = {
    children: PropTypes.node.isRequired, 
};


