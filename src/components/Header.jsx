import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { auth } from "../utils/firebase";
import { removeUser, setUser } from "../utils/userSlice";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { displayName } = useSelector((store) => store.user.user);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        console.log(user);
        // User is signed in, redirect to the home page
        dispatch(setUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        // User is signed out, redirect to the login page
        console.log("User is signed out");
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("Sign-out successful.");
        // dispatch(removeUser());
        // navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log("An error happened.");
      });
    console.log(auth.currentUser);
  };
  return (
    <div className="absolute top-0 left-0 p-14 w-full h-16 bg-gradient-to-b from-black flex items-center justify-between">
      <img
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix logo"
        className="w-44"
      />
      {auth.currentUser && (
        <span className="flex items-center gap-2">
          <FaUserCircle className="text-white text-3xl cursor-pointer" />
          <span className="text-white">{displayName}</span>
          <span
            className="text-white text-sm cursor-pointer hover:text-gray-400 transition duration-200 ease-in-out"
            onClick={handleSignOut}
          >
            "Sign Out"
          </span>
        </span>
      )}
    </div>
  );
};

export default Header;
