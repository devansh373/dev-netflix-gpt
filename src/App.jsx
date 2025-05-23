import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Body from "./components/Body";
// import {  } from "react-router-dom";
import Login from "./components/Login";
import Browse from "./components/Browse";
import { RouterProvider,createBrowserRouter } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Body />, // Wrap this in a layout
      children: [
        {
          path: "", // will match /browse
          element: <Browse />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
