import './App.css';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import AllWines from './Pages/AllWines/AllWines';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/allwines">
            <AllWines />
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
