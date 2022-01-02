import './App.css';
import { BrowserRouter, NavLink, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { Route } from 'react-router-dom';
import Home from './views/Home/Home';
import Player from './views/Player/Player';
import Players from './views/Players/Players';
import Team from './views/Team/Team';
import Teams from './views/Teams/Teams';

function App() {
  return (
    <div className="App">
      <h1>Kickball League</h1>
      <BrowserRouter>
        <header>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/teams">Teams</NavLink>
          <NavLink to="/players">Players</NavLink>
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/teams" component={Teams} />
          <Route exact path="/teams/:id" component={Team} />
          <Route exact path="/players" component={Players} />
          <Route exact path="/players/:id" component={Player} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
