import PropTypes from "prop-types";

function UserCard({ name, age, city, isAdmin }) {
  return (
    <div>
      <h3>
        Hi {name}, {age} years old from {city}
      </h3>
      {isAdmin && <span>Admin</span>}
    </div>
  );
}

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  isAdmin: PropTypes.bool,
};

export default UserCard;
