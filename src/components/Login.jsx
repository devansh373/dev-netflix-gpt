import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div className="bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/914ad279-199e-4095-9c10-2409dc9e5e1b/web/IN-en-20250519-TRIFECTA-perspective_8f1ca896-9e49-4a4e-90f0-22fc49650bd9_large.jpg)] bg-cover bg-no-repeat bg-center h-screen">
      <Header />
      {/* <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/914ad279-199e-4095-9c10-2409dc9e5e1b/web/IN-en-20250519-TRIFECTA-perspective_8f1ca896-9e49-4a4e-90f0-22fc49650bd9_large.jpg"
        alt="Homepage background"
      /> */}

      <form
        action=""
        className="absolute top-1/2 left-1/2 w-96 h-[500px] bg-black/85  rounded-lg p-10 flex flex-col items-center -translate-x-1/2 -translate-y-1/2 text-white login-form"
        method="POST"
        onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData.entries());
            console.log(data);
            }
        }
      >
        <h1 className="w-full font-bold text-2xl text-center m-3">Login</h1>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="abc@example.com"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          type="password"
          name="confirm-password"
          id="confirm-password"
          placeholder="Confirm Password"
        />
        <button type="submit" className="w-36 p-2 text-xl border border-gray-400 rounded-lg mt-4 cursor-pointer hover:bg-gray-800">Submit</button>
      </form>
    </div>
  );
};

export default Login;
