import './button.css';

const Button = ({ variant = 'primary', onClick, children, disabled }) => {
  return (
    <button
      className={`button button--${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
