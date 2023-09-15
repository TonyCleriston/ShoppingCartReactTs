import { useState } from "react";
import { Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Store />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
