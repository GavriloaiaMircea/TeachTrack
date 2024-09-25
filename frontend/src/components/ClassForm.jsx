import React from "react";
import { Form, Button, Container } from "react-bootstrap";

function ClassForm(props) {
  return (
    <Container className="d-flex flex-column align-items-center mt-5">
      <h1 className="mb-4">{props.text}</h1>
      <Form className="w-50" onSubmit={props.handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="class_name">Class Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter class name"
            value={props.newClass.class_name}
            id="class_name"
            onChange={props.handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="subject">Subject</Form.Label>
          <Form.Control
            value={props.newClass.subject}
            type="text"
            placeholder="Enter subject"
            id="subject"
            onChange={props.handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="school_year">School Year</Form.Label>
          <Form.Control
            value={props.newClass.school_year}
            type="text"
            placeholder="ex: 2023-2024"
            id="school_year"
            onChange={props.handleChange}
            required
          />
          {props.error && <p className="text-danger">{props.error}</p>}
        </Form.Group>

        <div className="d-flex justify-content-between">
          <Button variant="primary" type="submit">
            {props.buttonText}
          </Button>
          <Button variant="secondary" onClick={props.Cancel}>
            Cancel
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default ClassForm;
