import { useState } from "react";


function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: ""
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,      // spread operator
      [name]: value     // dynamic key update
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div className="container">
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="mobile"
          placeholder="Enter mobile"
          value={formData.mobile}
          onChange={handleChange}
        />

        <button type="submit">Register</button>
      </form>

      {submittedData && (
        <div className="result">
          <h4>Submitted Data</h4>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>Mobile: {submittedData.mobile}</p>
        </div>
      )}
    </div>
  );
}

export default RegisterForm;
