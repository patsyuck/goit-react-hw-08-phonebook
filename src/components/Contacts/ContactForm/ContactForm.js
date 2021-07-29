import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import './ContactForm.css';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export class ContactForm extends Component {
  state = { ...INITIAL_STATE, toggler: this.props.isFetching };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    
    if ((name === '') || (number === '')) {
      alert('Name and Number are required fields!')
    } else if (
      this.props.friends.some(
        item => item.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      const idForUpdate = this.props.friends.find(
        item => item.name.toLowerCase() === name.toLowerCase()
      ).id;
      // eslint-disable-next-line no-restricted-globals
      let query = confirm(`${name} is already in contacts! Do you want to update the exist contact?`);
      if (query) {
        const contact = {
          name: name,
          number: number,
        };
        this.props.handlerUpdate(idForUpdate, contact);
      } else {
        alert('The contact was left unchanged.')
      }
    } else {
      const contact = {
        id: uuid(),
        name: name,
        number: number,
      };
      this.props.handlerSubmit(contact);
    }

    this.reset();
  };

  render() {
    const { name, number, toggler } = this.state;
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <label>
          Name
          <input name="name" value={name} onChange={this.handleChange} />
        </label>
        <label>
          Number
          <input name="number" value={number} onChange={this.handleChange} />
        </label>
        <button type="submit" disabled={toggler}>Add contact</button>
      </form>
    );
  }
}
