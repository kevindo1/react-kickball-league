import './App.css';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { NavLink, Route, Switch } from 'react-router-dom';
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
          <Route path="teams" component={Teams} />
          <Route path="teams/:id" component={Team} />
          <Route path="players" component={Players} />
          <Route path="players/:id" component={Player} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
