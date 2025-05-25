import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { auth } from "../utils/firebase";
import { removeUser, setUser } from "../utils/userSlice";
import { Netflix_Logo_Url } from "../utils/constants";
import { clearGPTMovies, clearGPTSearch, setGPTSearch } from "../utils/gptSlice";
const Header = () => {
  const dispatch = useDispatch();
  const isGPTSearch = useSelector(store=>store.gpt.isGPTSearch)
  const navigate = useNavigate();
  const { displayName } = useSelector((store) => store.user.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
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
        dispatch(clearGPTMovies())
        dispatch(clearGPTSearch())
        navigate("/");
      }
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
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

  const handleGPTSearchToggle = () => {
    dispatch(setGPTSearch())
  }
  return (
    <div className="absolute top-0 left-0 p-14 w-full h-16 bg-gradient-to-b from-black flex items-center justify-between z-10">
      <img src={Netflix_Logo_Url} alt="Netflix logo" className="w-44" />
      {auth.currentUser && (
        <span className="flex items-center gap-2">
          <button className="p-2 text-white bg-gray-500 hover:bg-gray-400 cursor-pointer rounded-lg" onClick={handleGPTSearchToggle}>
            {isGPTSearch?"Home":"GPT Search"}
          </button>
          <FaUserCircle className="text-white text-3xl cursor-pointer" />
          <span className="text-white">{displayName}</span>
          <span
            className="text-white text-sm cursor-pointer hover:text-gray-400 transition duration-200 ease-in-out"
            onClick={handleSignOut}
          >
            Sign Out
          </span>
        </span>
      )}
    </div>
  );
};

export default Header;
