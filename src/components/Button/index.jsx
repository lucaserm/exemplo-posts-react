import p from 'prop-types';
import './styles.css';

export const Button = ({ text, onClick, disabled = false }) => (
  <button className="button" onClick={onClick} disabled={disabled}>
    {text}
  </button>
);

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  text: p.string.isRequired,
  onClick: p.func.isRequired,
  disabled: p.bool,
};
