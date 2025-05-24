import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, Outlet, RouterProvider, useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { removeUser, setUser } from "../utils/userSlice";
import { useDispatch } from 'react-redux';

const Body = () => {
    
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default Body