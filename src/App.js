import './App.css';
import { 
  BrowserRouter as Router , 
  Switch , 
  Route , 
  Link 
} from "react-router-dom";
import Indonesia from "./pages/Indonesia";
import PerProvinsi from "./pages/PerProvinsi";
import Global from "./pages/Global";

const App =()=> {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Global</Link>
            </li>
            <li>
              <Link to="/indonesia">Indonesia</Link>
            </li>
            <li>
              <Link to="/perprovinsi">PerProvinsi</Link>
            </li>
          </ul>
        </nav>


        <Switch>
          <Route path="/indonesia">
            <Indonesia />
          </Route>
          <Route path="/perprovinsi">
            <PerProvinsi />
          </Route>
          <Route path="/">
            <Global />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;


