import React from "react";
import { Form, Button, Container } from "react-bootstrap";

function AddClassPage() {
  return (
    <Container className="d-flex flex-column align-items-center mt-5">
      <h1 className="mb-4">Add a new Class!</h1>
      <Form className="w-50">
        <Form.Group className="mb-3">
          <Form.Label htmlFor="class_name">Class Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter class name"
            id="class_name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="subject">Subject</Form.Label>
          <Form.Control type="text" placeholder="Enter subject" id="subject" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="school_year">School Year</Form.Label>
          <Form.Control
            type="text"
            placeholder="ex: 2023-2024"
            id="school_year"
          />
        </Form.Group>

        <div className="d-flex justify-content-between">
          <Button variant="primary" type="submit">
            Add Class
          </Button>
          <Button variant="secondary">Cancel</Button>
        </div>
      </Form>
    </Container>
  );
}

export default AddClassPage;
