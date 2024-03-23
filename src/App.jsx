import { Router, Routes, Route } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import Home from "./views/Home";
import About from "./views/About";
import Products from "./views/Products";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";
import Page404 from "./views/others/Page404";
import Navbar from "./components/Navbar"; // Asegúrate de que esta importación sea correcta
import Product from "./views/Product";
import { Image } from '@chakra-ui/react'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
