import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, Outlet, RouterProvider, useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { removeUser, setUser } from "../utils/userSlice";
import { useDispatch } from 'react-redux';

const Body = () => {
    const dispatch = useDispatch();
  const navigate = useNavigate();
useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const{uid,email,displayName} = user;
      console.log(user)
      // User is signed in, redirect to the home page
      dispatch(setUser({uid,email,displayName}));
      // navigate("/browse");
    } else {
      // User is signed out, redirect to the login page
      console.log("User is signed out");
      dispatch(removeUser());
      // navigate("/");
    }
  })
},[])
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default Body