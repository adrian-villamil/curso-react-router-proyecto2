import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import { EditTodoPage } from './edit/EditTodoPage';
import { HomePage } from './home/HomePage';
import { NewTodoPage } from './new/NewTodoPage';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/'><HomePage /></Route>
        <Route path='/new'><NewTodoPage /></Route>
        <Route path='/edit/:id'><EditTodoPage /></Route>
        <Route path='*'><Redirect to='/' /></Route>
      </Switch>
    </HashRouter>
  );
}

export { App };
