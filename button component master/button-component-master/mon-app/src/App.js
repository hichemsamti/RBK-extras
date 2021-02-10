import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import routes from "./routes/route.js";

const App = () => {
  return (
    <div className="container">
      <Router>
        <nav>
          <ul>
            <li className="logo">
              <NavLink to="/">
                <span>Dev</span>Challenges.io
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/colors">
                Colors
              </NavLink>
            </li>
            <li>
              <NavLink to="/spaces">Spaces</NavLink>
            </li>
            <li>
              <NavLink to="/typography">Typography</NavLink>
            </li>
            <li>
              <NavLink to="/buttons">Buttons</NavLink>
            </li>
            <li>
              <NavLink to="/inputs">Inputs</NavLink>
            </li>
            <li>
              <NavLink to="/grid">Grid</NavLink>
            </li>
          </ul>
        </nav>
        <main>
          <Switch>
            {routes.map((route, index) => (
              <Route
                activeClassName="active"
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </main>
      </Router>
    </div>
  );
};

export default App;
