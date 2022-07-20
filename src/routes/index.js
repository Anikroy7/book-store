import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddBook from "../fetaures/books/AddBook";
import BooksView from "../fetaures/books/BooksView";
import EditBook from "../fetaures/books/EditBook";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import Error from "../pages/Error";
import Home from "../pages/Home";

const Index = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer></Footer>
    </BrowserRouter>
  );
};

export default Index;
