import './ContactItem.css';

const ContactItem = ({ id, name, number, onClick }) => {
  return (
    <li className="item">
      {name}: {number}
      <button
        onClick={() => {
          onClick(id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
