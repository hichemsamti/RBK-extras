import Home from "../components/Home";
import Buttons from "../components/Buttons";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />,
  },
  {
    path: "/colors",
    main: () => <h1>Not yet ready</h1>,
  },
  {
    path: "/typography",
    main: () => <h1>Not yet ready </h1>,
  },
  {
    path: "/buttons",
    main: () => <Buttons />,
  },
  {
    path: "/inputs",
    main: () => <h1>Not yet ready</h1>,
  },
  {
    path: "/spaces",
    main: () => <h1>Not yet ready</h1>,
  },
  {
    path: "/grid",
    main: () => <h1>Not yet ready</h1>,
  },
  
];

export default routes;