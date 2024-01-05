import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import React from "react";

const OutletLayout: React.FC = () => {
  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="container">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default OutletLayout;
