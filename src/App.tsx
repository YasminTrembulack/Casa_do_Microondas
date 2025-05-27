import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import NavBar from "./Components/Navbar";

export default function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </>
  );
}
