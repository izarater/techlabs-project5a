import './button.css';

const Button = ({ variant = 'primary', size, onClick, children, disabled }) => {
  return (
    <button
      className={`button button--${variant} ${size}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
