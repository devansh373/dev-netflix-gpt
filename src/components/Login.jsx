import React, { useState } from "react";
import Header from "./Header";
import { checkValidation } from "../utils/formValidationFunction";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../utils/userSlice";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const switchSignInSignUp = () => {
    setIsSignUp((prev) => !prev);
  };
  return (
    <div className="bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/914ad279-199e-4095-9c10-2409dc9e5e1b/web/IN-en-20250519-TRIFECTA-perspective_8f1ca896-9e49-4a4e-90f0-22fc49650bd9_large.jpg)] bg-cover bg-no-repeat bg-center h-screen">
      <Header />

      <form
        action=""
        className="absolute top-1/2 left-1/2 w-96 h-auto bg-black/85  rounded-lg p-10 flex flex-col items-center -translate-x-1/2 -translate-y-1/2 text-white login-form transition delay-200 ease-in-out"
        method="POST"
        onSubmit={(e) => {
          e.preventDefault();
          setIsLoading(true);
          const formData = new FormData(e.target);
          const data = Object.fromEntries(formData.entries());
          console.log(data);
          setErrorMessage(checkValidation(data, isSignUp));
          if (errorMessage) return;
          if (isSignUp) {
            // Handle sign up
            createUserWithEmailAndPassword(auth, data.email, data.password)
              .then((userCredential) => {
                // Signed up
                const user = userCredential.user;
                console.log(user);
                updateProfile(auth.currentUser, {
                  displayName: name,
                  photoURL:
                    "https://avatars.githubusercontent.com/u/104457146?v=4",
                })
                  .then(() => {
                    // Profile updated!
                    // ...
                    const { uid, email, displayName, photoURL } =
                      auth.currentUser;
                    // dispatch(setUser(auth.currentUser));
                    dispatch(setUser({ uid, email, displayName, photoURL }));
                    setName("");
                    setEmail("");
                    setPassword("");
                    setConfirmPassword("");
                    setIsLoading(false);
                    // console.log("first");
                    navigate("/browse");
                  })
                  .catch((error) => {
                    // An error occurred
                    // ...
                    setErrorMessage(`${errorCode} ${errorMessage}`);
                    setIsLoading(false);
                  });
                // dispatch(setUser(user));

                // console.log("first");
                // ...
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(`${errorCode} ${errorMessage}`);
                setIsLoading(false);

                // ..
              });
          } else {
            // Handle sign in
            signInWithEmailAndPassword(auth, data.email, data.password)
              .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user,auth.currentUser);

                setName("");
                setEmail("");
                setPassword("");
                setConfirmPassword("");
                setIsLoading(false);
                navigate("/browse");
                // ...
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(`${errorCode} ${errorMessage}`);
                setIsLoading(false);
              });
          }
          // console.log(checkValidation(data,isSignUp));
        }}
      >
        <h1 className="w-full font-bold text-2xl text-center m-3">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h1>
        {isSignUp && (
          <>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe "
              required
            />
          </>
        )}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="abc@example.com"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        {isSignUp && (
          <>
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              required
            />
          </>
        )}
        <p className="text-red-500 text-l">{errorMessage}</p>

        <button
          type="submit"
          className="w-36 p-2 text-xl border border-gray-400 rounded-lg mt-4 cursor-pointer hover:bg-gray-800"
        >
          {isLoading ? "Loading..." : "Submit"}
        </button>
        <p
          className="p-4 mt-2 w-full hover:underline cursor-pointer"
          onClick={switchSignInSignUp}
        >
          {isSignUp
            ? "Already have an account? Sign In Now"
            : "New to Netflix? Sign Up Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
