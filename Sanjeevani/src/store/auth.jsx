import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
export const AuthContext = createContext();
import Login from "../components/login/Login";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { action } from "../store";

export const AuthProvider = ({ children }) => {

  const dispatch  = useDispatch()

  const storeToken = (serverToken) => {
    return localStorage.setItem("token", serverToken);
  };

  useEffect(()=>{
    console.log("fetching the profile from redux")
    dispatch(action.getDocInfo())
    dispatch(action.getUserInfo());
  }, [])

  return (
    <AuthContext.Provider value={{storeToken}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};