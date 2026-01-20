import { useState } from "react";


function UsernameForm() {
  const [username, setUsername] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevents page refresh
    setSubmittedName(username);
  };

  return (
    <div className="container">
      <h2>Username Form</h2>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>

      {submittedName && (
        <p className="result">Entered Username: {submittedName}</p>
      )}
    </div>
  );
}

export default UsernameForm;
