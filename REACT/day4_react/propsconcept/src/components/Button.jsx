import PropTypes from "prop-types";

function Button({ label, variant, onClick }) {
  return (
    <button className={variant} onClick={onClick}>
      {label}
    </button>
  );
}

Button.defaultProps = {
  variant: "primary",
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary"]),
};

export default Button;
