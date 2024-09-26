import React from "react";
import Card from "../components/Card";
import { Row, Col, Container } from "react-bootstrap";

function Body({ classes, onDelete, onUpdate, onView }) {
  return (
    <Container className="mt-4">
      <Row>
        {classes && classes.length > 0 ? (
          classes.map((c) => (
            <Col md={4} key={c.id}>
              <Card
                id={c.id}
                class_name={c.class_name}
                subject={c.subject}
                school_year={c.school_year}
                onDelete={onDelete}
                onUpdate={onUpdate}
                onView={onView}
              />
            </Col>
          ))
        ) : (
          <p>No classes found.</p>
        )}
      </Row>
    </Container>
  );
}

export default Body;
