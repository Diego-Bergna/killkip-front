import "./App.css";
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import LogIn from "./pages/LogIn/LogIn";
import SignIn from "./pages/SignIn/SignIn";
import Home from "./pages/Home/Home";
import Form from "./pages/form/Form";
import Lobby from "./pages/Lobby/Lobby";

function App() {
  /* const [showLogin, setShowLogin] = useState(true);
  /* const changeForm = () => {
    setShowLogin(!showLogin);
  }; */ 
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/LogIn">
            <LogIn />
          </Route>
          <Route path="/SignIn">
            <SignIn />
          </Route>
          <Route path="/Form">
            <Form/>
          </Route>
          <Route path="/Lobby">
            <Lobby/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
 