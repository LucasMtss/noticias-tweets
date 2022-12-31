import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { DefaultComponentProps } from "./interfaces/interfaces";

import Home from "./pages/home";
import NewsDetails from "./pages/newsDetails";

const MyRoutes = ({ toggleTheme }: DefaultComponentProps) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home toggleTheme={toggleTheme} />} path="/" />
        <Route element={<Home toggleTheme={toggleTheme} />} path="/home" />
        <Route
          element={<NewsDetails toggleTheme={toggleTheme} />}
          path="/noticia/:id"
        />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
