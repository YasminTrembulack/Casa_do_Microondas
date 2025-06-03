import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Introduction from "./Pages/Introduction";
import Marcas from "./Pages/Marcas"
import NavBar from "./Components/Navbar";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/introduction" element={<Introduction/>} />
        <Route path="/marcas" element={<Marcas/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
      <Footer/>
    </>
  );
}
