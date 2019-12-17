import React, { Component } from 'react';
import Header from './components/header/Header';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import Login from './components/auth/Login';
import Profile from './components/profile/Profile';
class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <div className="App" style={{height:'100vh'}}>
          <CssBaseline />
          <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/profile" component={Profile} />
          </Switch>
        </div>

        
      </Router>
      
    );
  }
}

export default App;
