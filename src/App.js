import React, { Component, lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { getContacts, filterContacts, postContact, deleteExistContact } from './redux/actions';
import { ContactForm } from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import { MyLoader } from './components/Loader';
import Menu from './components/Menu/Menu';
import HomePage from './components/Pages/HomePage'
import LoginPage from './components/Pages/LoginPage'
import RegisterPage from './components/Pages/RegisterPage'
import {getFriends, getFilter, getFetching} from './redux/contactsSelectors'

function App({ friends, filter, isFetching, handleData, handleInput, handleSubmit, handleDelete }) {

  return (
    /*<div>
      <h1>Phonebook</h1>
      <ContactForm
        friends={friends}
        handlerSubmit={contact => handleSubmit(contact)}
        isFetching={isFetching}
      />
      <h2>Contacts</h2>
      <Filter
        filter={filter}
        onChange={event => handleInput(event)}
      />
      <ContactList
        friends={friends}
        filter={filter}
        onClick={id => handleDelete(id)}
        onMount={() => handleData()}
      />
    </div>*/
    /*<div>
      <Menu />
      <Router>
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
    </div>*/
    <div>
      <Menu />
      <Router>
        <Suspense fallback={<MyLoader />}>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/login" component={LoginPage} />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    friends: getFriends(state),
    filter: getFilter(state),
    isFetching: getFetching(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleData: () => dispatch(getContacts()),
    handleInput: event => dispatch(filterContacts(event)),
    handleSubmit: contact => dispatch(postContact(contact)),
    handleDelete: id => dispatch(deleteExistContact(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
