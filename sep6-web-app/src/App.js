
import './App.css';
import FlightsPerMonth from './components/FlightsPerMonth';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/FlightsPerMonth" component={FlightsPerMonth} />

      </Switch>
    </Router>
  );
}

export default App;
