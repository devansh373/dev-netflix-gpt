import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
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
import WatchPage from "./components/WatchPage";
import { removeUser, setUser } from "./utils/userSlice";
import { clearGPTMovies, clearGPTSearch } from "./utils/gptSlice";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />, 
      children: [
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "browse", // will match /browse
          element: <Browse />,
        },

        // {
        //   path: "fer",
        //   element: <Demo />,
        // },
        {
          path: "/watch/:movieId",
          element: <WatchPage />,
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
