import PropTypes from "prop-types";

function Child({ user, onUserSelect }) {
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <button onClick={() => onUserSelect(user)}>
        Select
      </button>
    </div>
  );
}

export default Child;
