import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Introduction from "./Pages/Introduction";
import NavBar from "./Components/Navbar";

export default function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/introduction" element={<Introduction/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </>
  );
}
