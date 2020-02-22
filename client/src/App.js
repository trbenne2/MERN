import React, { Fragment, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Routes from './components/routing/Routes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Redux
import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/auth';

import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

// Fragment: like a ghost element wont show up in to DOM

// embedding alert
// switch can only have routes
const App = () => {
  // use effect is a loop but if you do empty brackets it goes once on mount
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route component={Routes} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
