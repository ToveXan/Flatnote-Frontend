import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Login';
import Notes from './Notes';


class App extends React.Component{
  render() {
    return (
      <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/notes" component={Notes} />
      </Switch>
      </div>
    );
  }
}

export default App;
