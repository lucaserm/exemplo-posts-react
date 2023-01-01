import p from 'prop-types';
import './styles.css';

export const TextInput = ({ onChange, value }) => (
  <input
    className="text-input"
    onChange={onChange}
    value={value}
    type="search"
    placeholder="Type your search"
  />
);

TextInput.propTypes = {
  onChange: p.func.isRequired,
  value: p.string.isRequired,
};
