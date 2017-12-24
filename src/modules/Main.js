import React from 'react';
import Home from './Home';
import Dossier from './Dossier';
import Bestiary from './Bestiary';
import V2 from './V2';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

class Main extends React.Component {
  render() {
    return (
        <BrowserRouter>
          <div className="main">
            <header>
              <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/dossier">Dossier</NavLink></li>
                <li><NavLink to="/bestiary">Bestiary</NavLink></li>
                <li><NavLink to="/v2">Vermintide II</NavLink></li>
              </ul>
            </header>
            <section>
              <Route exact path="/" component={Home} />
              <Route path="/dossier" component={Dossier} />
              <Route path="/bestiary" component={Bestiary} />
              <Route path="/v2" component={V2} />
            </section>
          </div>
        </BrowserRouter>
    );
  }
}

export default Main;
