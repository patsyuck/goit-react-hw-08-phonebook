import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import { MyLoader } from './components/Loader';
import Menu from './components/Menu/Menu';
import HomePage from './components/Pages/HomePage'
import LoginPage from './components/Pages/LoginPage'
import RegisterPage from './components/Pages/RegisterPage'
import ContactsPage from './components/Pages/ContactsPage'
import {getCurrentUser} from './redux/authorization/authorizationActions'

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
              <Route path="/" exact component={HomePage} />
              <Route path="/register" component={RegisterPage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/contacts" component={ContactsPage} />
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