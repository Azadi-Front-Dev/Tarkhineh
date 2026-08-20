import { useState } from "react";
import { useRoutes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Home from "./Pages/Home";

const routes = [
  { path: "/", element: <Home/> },
  { path: "/", element: <></> },
  { path: "/", element: <></> },
];
function App() {
  const router = useRoutes(routes);
  return <div className="">{router}</div>;
}

export default App;
