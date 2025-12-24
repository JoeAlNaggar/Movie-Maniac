import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MovieList from "./components/MovieList/MovieList";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <main className="main">
          <Routes>
            <Route
              path="/"
              element={<MovieList type="popular" title="Popular" />}
            />
            <Route
              path="/popular"
              element={<MovieList type="popular" title="Popular" />}
            />
            <Route
              path="/top-rated"
              element={<MovieList type="top_rated" title="Top Rated" />}
            />
            <Route
              path="/upcoming"
              element={<MovieList type="upcoming" title="Upcoming" />}
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
