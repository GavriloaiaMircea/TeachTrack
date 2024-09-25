import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useUserStore from "../stores/useUserStore";
import { addClass } from "../services/classService";

function AddClassPage() {
  const [newClass, setNewClass] = useState({
    teacher_id: useUserStore.getState().user.id,
    class_name: "",
    subject: "",
    school_year: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;

    if (id === "school_year") {
      const schoolYearRegex = /^[0-9]{4}-[0-9]{4}$/;
      if (!schoolYearRegex.test(value)) {
        setError("School year must be in the format YYYY-YYYY");
      } else {
        setError("");
      }
    }
    setNewClass((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (error === "") {
      await addClass(newClass);

      navigate("/");
    } else {
      alert("Please fix the errors before submitting the form.");
    }
  };

  return (
    <Container className="d-flex flex-column align-items-center mt-5">
      <h1 className="mb-4">Add a new Class!</h1>
      <Form className="w-50" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="class_name">Class Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter class name"
            value={newClass.class_name}
            id="class_name"
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="subject">Subject</Form.Label>
          <Form.Control
            value={newClass.subject}
            type="text"
            placeholder="Enter subject"
            id="subject"
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="school_year">School Year</Form.Label>
          <Form.Control
            value={newClass.school_year}
            type="text"
            placeholder="ex: 2023-2024"
            id="school_year"
            onChange={handleChange}
            required
          />
          {error && <p className="text-danger">{error}</p>}
        </Form.Group>

        <div className="d-flex justify-content-between">
          <Button variant="primary" type="submit">
            Add Class
          </Button>
          <Button variant="secondary" onClick={() => navigate("/")}>
            Cancel
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default AddClassPage;
