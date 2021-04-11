import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Generator from './pages/Generator';
import Login from './pages/Login';
import QrPdf from './pages/QrPdf';
import Navbar from './components/Navbar';

export default function Routes() {
  return (
    <BrowserRouter>

      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/login" component={Login} />
        <Route path="/generator" component={Generator} />

      </Switch>
    </BrowserRouter>
  );
}
