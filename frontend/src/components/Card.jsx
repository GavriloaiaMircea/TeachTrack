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
      </Card.Body>
    </Card>
  );
}

export default ClassCard;
