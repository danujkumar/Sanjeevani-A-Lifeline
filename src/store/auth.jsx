import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
export const AuthContext = createContext();
import Login from "../components/login/Login";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { action } from "../store";
import { io } from 'socket.io-client'

export const AuthProvider = ({ children }) => {

  const dispatch  = useDispatch()

  const storeToken = (serverToken) => {
    return localStorage.setItem("token", serverToken);
  };

  const socket = io("http://localhost:3000")

  const twoWay = () => {
    console.log("Two way communication...")
    
  }
  



  useEffect(()=>{
    console.log("fetching the profile from redux")
    // twoWay();
    socket.on("connect", ()=>{
      console.log("connected", socket.id)
    })

    socket.on("Testing", (res)=>{console.log(res)})
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