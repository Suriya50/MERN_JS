import { useState } from "react";
import PropTypes from "prop-types";

function UserForm({ initialData, onSubmit, submitLabel }) {
  const [name, setName] = useState(initialData.name);
  const [email, setEmail] = useState(initialData.email);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setError("Name is required");
      return;
    }

    setError("");
    onSubmit({ name, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      {error && <p>{error}</p>}
      <button type="submit">{submitLabel}</button>
    </form>
  );
}

UserForm.defaultProps = {
  submitLabel: "Save",
};

export default UserForm;
