import { ReactLocation } from "react-location";
import { Link, Location } from "react-location";
import Sidebar from "./Components/SideBar";
import ErrorBoundary from "./ErrorBoundary";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import HomeVisits from "./Pages/HomeVisits/HomeVisits";
import Parenting from "./Pages/Parenting/Parenting";
import Research from "./Pages/Research/Research";
//import { sidebarNavOptions, appRoutes, location } from "./AppRouter"

const sidebarNavOptions = [
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

const appRoutes = [
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

const location = new ReactLocation();

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <header className="App-header">
          <h2>It's an App</h2>
        </header>
        <Sidebar
          options={sidebarNavOptions}
          sbRoutes={appRoutes}
          location={location}
        />
      </div>
    </ErrorBoundary>
  );
}

export default App;

{
  /* <div className="nav-menu">
        <ul>
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="about">About</Link>
        </li>
        <li>
        <Link to="homevisits">Home Visits</Link>
        </li>
        <li>
        <Link to="parenting">Parenting</Link>
        </li>
        <li>
        <Link to="research">Research</Link>
        </li>
        </ul>
        </div>
      <AppRouter /> */
}
