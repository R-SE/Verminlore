import React from 'react';
import ReactDOM from 'react-dom';
// import { render } from 'react-dom';
// import { BrowserRouter, Route } from 'react-router-dom';

require('./main.scss');
import Main from './modules/Main';
// import Footer from './modules/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Main />
      </div>
    );
  }
}

ReactDOM.render (
    <App />,
  document.getElementById('root')
);
