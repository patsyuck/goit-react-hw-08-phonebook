import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import { MyLoader } from './components/Loader';
import Menu from './components/Menu/Menu';
import HomePage from './components/Pages/HomePage'
import LoginPage from './components/Pages/LoginPage'
import RegisterPage from './components/Pages/RegisterPage'
import ContactsPage from './components/Pages/ContactsPage'
import {getCurrentUser} from './redux/authorization/authorizationActions'
import PrivateRoute from './components/Menu/PrivateRoute';
import PublicRoute from './components/Menu/PublicRoute';

class App extends Component {
  componentDidMount() {
    this.props.onRefresh()
  }
  
  render() {
    return (
      <div>
        <Router>
          <Menu />
          <Suspense fallback={<MyLoader />}>
            <Switch>
              <PublicRoute path="/" exact component={HomePage} />
              <PublicRoute path="/register" component={RegisterPage} restricted />
              <PublicRoute path="/login" component={LoginPage} restricted />
              <PrivateRoute path="/contacts" component={ContactsPage} />
              <Redirect to="/" />
            </Switch>
          </Suspense>
        </Router>
      </div>
    )
  }
}

const mapDispatchToProps = {
    onRefresh: getCurrentUser
}

export default connect(null, mapDispatchToProps)(App);