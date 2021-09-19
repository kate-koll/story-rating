import React from "react";
import Carousel from "react-bootstrap/Carousel";
import StoryCard from "./StoryCard";
import Container from "react-bootstrap/Container";

const StoryCarousel = () => {
  return (
    <div>
      <Container>
        <Carousel controls="true" variant="dark">
          <Carousel.Item>
            <StoryCard title="Harry Potter"></StoryCard>
          </Carousel.Item>
          <Carousel.Item>
            <StoryCard title="Pán prstenů"></StoryCard>
          </Carousel.Item>
          <Carousel.Item>
            <StoryCard title="Hra o trůny"></StoryCard>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default StoryCarousel;
