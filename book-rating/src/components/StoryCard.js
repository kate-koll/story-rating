import React from "react";
import Card from "react-bootstrap/Card";

import Rating from "./Rating";

const StoryCard = (props) => {
  return (
    <div>
        <Card style={{ width: "18rem", height: "100%", overflow: "auto", margin: "5px"}} >
          <Card.Img style = {{height: "auto"}} variant="top" src={props.img} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.text}</Card.Text>            
          </Card.Body>
          <Card.Footer>
            <Rating></Rating>
          </Card.Footer>
        </Card>
    </div>
  );
};

export default StoryCard;
