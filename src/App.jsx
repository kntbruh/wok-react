import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import React from "react";
import Cart from "./pages/Cart/Cart";
import OutletLayout from "./components/LayoutOutlet/OutletLayout";
import FullWok from "./pages/FullWok";

export const SearchContext = React.createContext();
function App() {
  return (
    <Routes>
      <Route path="/" element={<OutletLayout />}>
        <Route path="" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="wok/:id" element={<FullWok />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;
