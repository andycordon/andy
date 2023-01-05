//ROUTES INDEX

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../../App";
import Game from "../../Game";


const index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/game" element={<Game />} />
        </Routes>
    </BrowserRouter>
  );
};

export default index;
