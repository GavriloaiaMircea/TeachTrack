import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import { addStudent } from "../services/studentService";

function AddStudentPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [student, setStudent] = useState({
    first_name: "",
    last_name: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setStudent({
      ...student,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addStudent(student, id)
      .then(() => {
        navigate(`/class/${id}`);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Container className="d-flex flex-column align-items-center mt-5">
      <h1 className="mb-4">Add a new Student</h1>
      <Form className="w-50" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="first_name">First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter first name"
            value={student.first_name}
            id="first_name"
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="last_name">Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter last name"
            value={student.last_name}
            id="last_name"
            onChange={handleChange}
            required
          />
        </Form.Group>

        <div className="d-flex justify-content-between">
          <Button variant="primary" type="submit">
            Add Student
          </Button>
          <Button variant="secondary" onClick={() => navigate(`/class/${id}`)}>
            Cancel
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default AddStudentPage;
