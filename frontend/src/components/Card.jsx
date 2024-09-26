import React from "react";
import { Card } from "react-bootstrap";

function ClassCard(props) {
  const subject =
    props.subject[0].toUpperCase() + props.subject.slice(1).toLowerCase();

  return (
    <Card className="mb-4 shadow-sm">
      <Card.Body>
        <Card.Title>{props.class_name}</Card.Title>
        <Card.Text>{subject}</Card.Text>
        <Card.Text>{props.school_year}</Card.Text>
        <button
          className="btn btn-outline-primary me-2"
          onClick={() => props.onUpdate(props.id)}
        >
          EDIT
        </button>
        <button
          className="btn btn-outline-danger me-2"
          onClick={() => props.onDelete(props.id)}
        >
          DELETE
        </button>
        <button
          className="btn btn-outline-secondary"
          onClick={() => props.onView(props.id)}
        >
          View Class
        </button>
      </Card.Body>
    </Card>
  );
}

export default ClassCard;
