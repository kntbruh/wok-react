import "./App.scss";
import Home from "./pages/Home/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import React, { Suspense } from "react";
import OutletLayout from "./components/LayoutOutlet/OutletLayout";

const Cart = React.lazy(
  () => import(/*webpackChunkName:"Cart"*/ "./pages/Cart/Cart")
);
const FullWok = React.lazy(
  () => import(/*webpackChunkName:"FullWok"*/ "./pages/FullWok")
);
const NotFound = React.lazy(
  () => import(/*webpackChunkName:"NotFound"*/ "./pages/NotFound/NotFound")
);

function App() {
  return (
    <Suspense fallback={"Loading..."}>
      <BrowserRouter basename="/wok-react">
        <Route path="/" element={<OutletLayout />} />
        <Route path="" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="wok/:id" element={<FullWok />} />
        <Route path="cart" element={<Cart />} />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
