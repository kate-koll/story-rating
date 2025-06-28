import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const Main = () => {
  return (
    <div>
      <Container>
        <h1>Hodnocení příběhů</h1>
        <br />
        <Button as={Link} to="/rating" variant="primary" size="lg">
          Jdem na to!
        </Button>{" "}
      </Container>
    </div>
  );
};

export default Main;
