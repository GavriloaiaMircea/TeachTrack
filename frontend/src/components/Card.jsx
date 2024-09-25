import React from "react";
import { Card } from "react-bootstrap";

function ClassCard(props) {
  return (
    <Card className="mb-4 shadow-sm">
      <Card.Body>
        <Card.Title>{props.class_name}</Card.Title>
        <Card.Text>{props.subject}</Card.Text>
        <Card.Text>{props.school_year}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ClassCard;
