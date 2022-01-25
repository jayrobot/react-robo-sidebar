import { Router, Outlet, Link } from "react-location";
import { ReactLocationDevtools } from "react-location-devtools";
// import propTypes from "prop-types";

const Sidebar = ({ options, sbRoutes, location }) => {
  console.log(options);
  // options.map((menuItem) =>
  //   console.log(menuItem.id, menuItem.route, menuItem.title)
  // );

  console.log(sbRoutes);
  // sbRoutes.map((routeItem) => console.log(routeItem.path, routeItem.element));

  console.log(location);
  // if (process.env.NODE_ENV === "development") return "";

  return (
    <Router routes={sbRoutes} location={location}>
      <Outlet />
      <ReactLocationDevtools />
      <ul>
        {options.map((menuItem) => (
          <li key={menuItem.id}>
            <Link to={menuItem.route}>{menuItem.title}</Link>
          </li>
        ))}
      </ul>
    </Router>
  );
};

// Sidebar.propTypes = {
// 	options: PropTypes.arrayOf(PropTypes.shape({
//     route: PropTypes.string,
//     title: PropTypes.string,
//     id: PropTypes.string
// 	})),
// 	sbRoutes: PropTypes.arrayOf(PropTypes.shape({
//     path: PropTypes.string,
//     element: `<Home />`,
// route: PropTypes.string,
//     title: PropTypes.string,
//     id: PropTypes.string
// 	})),
// }

export default Sidebar;
