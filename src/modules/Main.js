import React from 'react';
import Home from './Home';
import Dossier from './Dossier';
import Bestiary from './Bestiary';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

class Main extends React.Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/dossier">Dossier</NavLink></li>
              <li><NavLink to="/bestiary">Bestiary</NavLink></li>
            </ul>

            <Route exact path="/" component={Home} />
            <Route path="/dossier" component={Dossier} />
            <Route path="/bestiary" component={Bestiary} />

          </div>
        </BrowserRouter>
    );
  }
}

export default Main;
