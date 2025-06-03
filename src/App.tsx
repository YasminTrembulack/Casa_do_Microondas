import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import NavBar from "./Components/Navbar";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <Footer/>
    </>
  );
}
