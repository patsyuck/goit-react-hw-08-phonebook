import React from 'react'
import { connect } from 'react-redux';
import { getContacts, filterContacts, postContact, patchContact, deleteExistContact } from '../../redux/contacts/contactsActions';
import { ContactForm } from '../Contacts/ContactForm/ContactForm';
import Filter from '../Contacts/Filter/Filter';
import ContactList from '../Contacts/ContactList/ContactList';
import {getFriends, getFilter, getFetching} from '../../redux/contacts/contactsSelectors'

const ContactsPage = ({ friends, filter, isFetching, handleData, handleInput, handleSubmit, handleUpdate, handleDelete }) => {
    return (
        <div>
            <h1>Phonebook</h1>
            <ContactForm
                friends={friends}
                handlerSubmit={handleSubmit}
                isFetching={isFetching}
                handlerUpdate={handleUpdate}
            />
            <h2>Contacts</h2>
            <Filter
                filter={filter}
                onChange={handleInput}
            />
            <ContactList
                friends={friends}
                filter={filter}
                onClick={handleDelete}
                onMount={handleData}
            />
        </div>
    )
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
    handleUpdate: (id, contact) => dispatch(patchContact(id, contact)),
    handleDelete: id => dispatch(deleteExistContact(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage)