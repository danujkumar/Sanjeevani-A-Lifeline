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

  useEffect(()=>{
    console.log("fetching the profile from redux")
    dispatch(action.getDocInfo())
  }, [])

  return (
    <AuthContext.Provider>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};