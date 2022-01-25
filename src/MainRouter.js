import React from "react";
import { Outlet } from "react-location";
import { ReactLocation } from "react-location";
import { Router } from "react-location";
import About from "./Pages/About/About";
import HomeVisits from "./Pages/HomeVisits/HomeVisits";
import Parenting from "./Pages/Parenting/Parenting";
import Research from "./Pages/Research/Research";

const MainRouter = () => {
  const location = new ReactLocation();
  return (
    <>
      <Router
        location={location}
        routes={[
          {
            path: "about",
            element: `<About />`,
          },
          {
            path: "homevisits",
            element: `<HomeVisits />`,
          },
          {
            path: "research",
            element: <Research />,
          },
          {
            path: "resources",
            element: <Parenting />,
          },
        ]}
      >
        <div>Header</div>
        <Outlet />
      </Router>
    </>
  );
};

export default Router;
