import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const OutletLayout = () => {
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
