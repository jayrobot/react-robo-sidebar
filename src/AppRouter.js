import React from "react";
import { ReactLocation } from "react-location";

import { Home } from "./Pages/Home/Home";
import { About } from "./Pages/About/About";
import { HomeVisits } from "./Pages/HomeVisits/HomeVisits";
import { Research } from "./Pages/Research/Research";
import { Parenting } from "./Pages/Parenting/Parenting";

export const sidebarNavOptions = [
  {
    // component: <Home />,
    route: "/",
    title: "Home",
    id: "ho-01",
  },
  {
    // component: <About />,
    route: "about",
    title: "About HFNY",
    id: "ho-02",
  },
  {
    // component: <HomeVisits />,
    route: "homevisits",
    title: "Home Visits",
    id: "ho-03",
  },
  {
    // component: <Parenting />,
    route: "resources",
    title: "Parenting resources",
    id: "ho-04",
  },
  {
    // component: <Research />,
    route: "research",
    title: "Research",
    id: "ho-05",
  },
];

export const appRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "homevisits",
    element: <HomeVisits />,
  },
  {
    path: "research",
    element: <Research />,
  },
  {
    path: "resources",
    element: <Parenting />,
  },
];

export const location = new ReactLocation();

// const AppRouter = () => {
//   const location = new ReactLocation();
//   return (
//     <>
//       <Router
//         location={location}
//         routes={[
//           {
//             path: "/",
//             element: `<Home />`,
//           },
//           {
//             path: "about",
//             element: `<About />`,
//           },
//           {
//             path: "homevisits",
//             element: `<HomeVisits />`,
//           },
//           {
//             path: "research",
//             element: `<Research />`,
//           },
//           {
//             path: "resources",
//             element: `<Parenting />`,
//           },
//         ]}
//       >
//         <div>Header</div>
//         <Outlet />
//       </Router>
//     </>
//   );
// };

// export default AppRouter;
