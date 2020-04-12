import '@babel/polyfill';
import '@mdi/font/scss/materialdesignicons';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import React from 'react';

import NotFound from './pages/NotFound';
import Main from './pages/Main';

import Header from './components/Header';

const App = () => {
  return (
    <BrowserRouter>
      <div className="Wrapper">
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

const root = document.getElementById('app');
ReactDOM.render(<App />, root);
