import ContactItem from '../ContactItem/ContactItem';
import React, { Component } from 'react';

export class ContactList extends Component {
  componentDidMount() {
    this.props.onMount()
  }

  render() {
    return (
      <ul>
        {this.props.friends
          .filter(
            item => item.name.toLowerCase().indexOf(this.props.filter.toLowerCase()) >= 0,
          )
          .map(friend => (
            <ContactItem
              key={friend.id}
              id={friend.id}
              name={friend.name}
              number={friend.number}
              onClick={this.props.onClick}
            />
          ))}
      </ul>
    );
  }
}

export default ContactList;
