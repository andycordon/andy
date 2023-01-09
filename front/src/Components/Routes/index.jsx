//ROUTES INDEX

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "../Game/Game";
import Home from "../../Containers/Home/Home";


const index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:id" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
};

export default index;
