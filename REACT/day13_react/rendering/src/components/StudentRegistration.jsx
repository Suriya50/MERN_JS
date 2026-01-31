import { useState } from "react";

const StudentRegistration = () => {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: "",
    age: ""
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setStudent({
      ...student,
      [name]: value
    });
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <h2>Student Registration</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={student.name}
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={student.email}
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          type="text"
          name="course"
          placeholder="Course"
          value={student.course}
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={student.age}
          onChange={handleChange}
          required
        />
        <br /><br />

        <button type="submit">Register</button>
      </form>

      <br />

      {/* Conditional Rendering */}
      {submitted && (
        student.age < 18 ? (
          <h3 style={{ color: "red" }}>
            Not eligible for course
          </h3>
        ) : (
          <div style={{
            border: "1px solid gray",
            padding: "15px",
            width: "250px"
          }}>
            <h3>Student Details</h3>
            <p><b>Name:</b> {student.name}</p>
            <p><b>Email:</b> {student.email}</p>
            <p><b>Course:</b> {student.course}</p>
            <p><b>Age:</b> {student.age}</p>
          </div>
        )
      )}
    </>
  );
};

export default StudentRegistration;
