import React from 'react';
import ReactDOM from 'react-dom';
// import { render } from 'react-dom';
// import { BrowserRouter, Route } from 'react-router-dom';

require('./main.scss');
import Header from './modules/Header';
import Main from './modules/Main';
import Footer from './modules/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Main />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render (
    <App />,
  document.getElementById('root')
);
