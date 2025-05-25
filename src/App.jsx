import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Body from "./components/Body";
// import {  } from "react-router-dom";
import Login from "./components/Login";
import Browse from "./components/Browse";
import {
  RouterProvider,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom";
import { Provider, useDispatch } from "react-redux";
import store from "./utils/store";
import Demo from "./components/Demo";

function App() {
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
        {
          path: "fer",
          element: <Demo />,
        },
      ],
    },
  ]);

  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}

export default App;
