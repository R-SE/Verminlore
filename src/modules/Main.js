import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { Home } from './Home';
import { Dossier } from './Dossier';
import { Bestiary } from './Bestiary';

export class Main extends React.Component {
  render () {
    return (
      <div class="main">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/dossier' component={Dossier}/>
          <Route path='/bestiary' component={Bestiary}/>
          <Route path='/VM2' component={Vermintide2}/>
        </Switch>
      </div>
    );
  }
}
