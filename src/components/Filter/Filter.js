import './Filter.css';

const Filter = ({ filter, onChange }) => {
  return (
    <div className="filter">
      <label>
        Find contacts by name
        <input value={filter} onChange={onChange} />
      </label>
    </div>
  );
};

export default Filter;
