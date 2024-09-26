import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

function ClassHeading({ classData, handleBack, handleAddStudent }) {
  return (
    <Container fluid className="bg-primary text-light p-3">
      <Row className="align-items-center flex-column flex-md-row">
        <Col xs={12} md={8} className="mb-3 mb-md-0">
          <h3 className="mb-2 mb-md-0">{classData.class_name}</h3>
          <div className="d-flex flex-column flex-md-row">
            <p className="mb-1 mb-md-0 me-md-4">
              <strong>Subject:</strong> {classData.subject}
            </p>
            <p className="mb-0">
              <strong>School Year:</strong> {classData.school_year}
            </p>
          </div>
        </Col>
        <Col
          xs={12}
          md={4}
          className="d-flex justify-content-start justify-content-md-end"
        >
          <Button variant="outline-light" className="me-2" onClick={handleBack}>
            Back
          </Button>
          <Button variant="light" onClick={handleAddStudent}>
            Add Student
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ClassHeading;
