import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { auth } from "../utils/firebase";
import { removeUser, setUser } from "../utils/userSlice";
import { Netflix_Logo_Url } from "../utils/constants";
import {
  clearGPTMovies,
  clearGPTSearch,
  setGPTSearch,
} from "../utils/gptSlice";
import { setIsSearchMovie } from "../utils/moviesSlice";
import useSearchMovies from "../hooks/useSearchMovies";
// import useSearchSingleMovieById from "../hooks/useSearchSingleMovieById";
const Header = ({ isWatchPage }) => {
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [isSearchbarFull, setIsSearchbarFull] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState("");
  const isGPTSearch = useSelector((store) => store.gpt.isGPTSearch);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { displayName } = useSelector((store) => store.user.user);
  useSearchMovies(searchInputValue)

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       const { uid, email, displayName } = user;
  //       console.log(user);
  //       // User is signed in, redirect to the home page
  //       dispatch(setUser({ uid, email, displayName }));
  //       navigate("/browse");
  //     } else {
  //       // User is signed out, redirect to the login page
  //       console.log("User is signed out");
  //       dispatch(removeUser());
  //       dispatch(clearGPTMovies());
  //       dispatch(clearGPTSearch());
  //       navigate("/");
  //     }
  //   });

  //   return () => unsubscribe(); // Cleanup subscription on unmount
  // }, []);

  // useEffect(()=>{
  //   console.log(searchInputValue)
  // },[searchInputValue])
  const handleSearch=(query)=>{
  console.log(searchInputValue)
}
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
    dispatch(setGPTSearch());
  };
  // const handleUserAvatarHover = () => {};
  return (
    <div className="absolute top-0 left-0 p-14 w-full h-16 bg-gradient-to-b from-black flex items-center justify-between z-10">
      <a href="/">
        <img
          src={Netflix_Logo_Url}
          alt="Netflix logo"
          className="w-44 cursor-pointer"
        />
      </a>
      {auth.currentUser && (
        <span className="flex items-center gap-2">
          {isWatchPage ? (
            <Link
              to={"/browse"}
              className="p-2 text-white bg-amber-800 hover:bg-amber-900 cursor-pointer rounded-lg"
            >
              Home
            </Link>
          ) : (
            <>
              <span
                className="text-white cursor-pointer p-2 flex items-center gap-2"
                onClick={() => {}}
              >
                <input
                  type="text"
                  value={searchInputValue}
                  className={` transition-all delay-75 ease-in-out ${
                    isSearchbarFull
                      ? "w-[500px] border border-amber-800 rounded-lg p-2"
                      : "w-0"
                  }`}
                  // onBlur={() => {
                  //   setIsSearchbarFull(false);
                  //   dispatch(setIsSearchMovie(false));
                  // }}
                  onFocus={() => dispatch(setIsSearchMovie(true))}
                  onChange={(e)=>{
                    setSearchInputValue(e.target.value)
                    
                    // dispatch()
                  }}
                />

                {isSearchbarFull ? (
                  <FaXmark
                    className=" text-xl"
                    onClick={() => {
                      setIsSearchbarFull(false);
                      dispatch(setIsSearchMovie(false));
                    }}
                  />
                ) : (
                  <FaSearch
                    className=" text-xl"
                    onClick={() => {
                      setIsSearchbarFull(true);
                      dispatch(setIsSearchMovie(true));
                    }}
                  />
                )}
              </span>

              <button
                className="p-2 text-white bg-amber-800 hover:bg-amber-900 cursor-pointer rounded-lg"
                onClick={handleGPTSearchToggle}
              >
                {isGPTSearch ? "Home" : "GPT Search"}
              </button>
              <ul>
                <li>
                  <FaUserCircle
                    className="text-white text-3xl cursor-pointer relative"
                    onMouseOver={() => setShowUserDetails(true)}
                    onMouseOut={() => setShowUserDetails(false)}
                  />
                </li>
                {showUserDetails && (
                  <div
                    className="absolute top-16 right-4 bg-gray-800 p-4 rounded-lg shadow-lg z-20"
                    onMouseOver={() => setShowUserDetails(true)}
                    onMouseOut={() => setShowUserDetails(false)}
                  >
                    <li className="hover:bg-gray-700 p-2 rounded-lg">
                      <span className="text-white cursor-default">
                        {displayName}
                      </span>
                    </li>
                    <li className="hover:bg-gray-700 p-2 rounded-lg cursor-pointer ">
                      <span
                        className="text-white text-sm hover:text-gray-400 transition duration-200 ease-in-out"
                        onClick={handleSignOut}
                      >
                        Sign Out
                      </span>
                    </li>
                  </div>
                )}
              </ul>
            </>
          )}
        </span>
      )}
    </div>
  );
};

export default Header;
