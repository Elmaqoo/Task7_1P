import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { faker } from '@faker-js/faker';

const FeaturedFreelancers = () => {
  const developers = Array(3).fill(0).map(() => ({
    name: faker.person.firstName(),
    image: faker.image.avatar(),
    description: faker.lorem.sentence(),
    rating: faker.number.float({ min: 1.0, max: 5.0,precision:0.01 }),
  }));

  return (
    <div>
      <h2>Featured Freelancers</h2>
      <Row>
        {developers.map(dev => (
          <Col key={dev.name}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={dev.image} />
              <Card.Body>
                <Card.Title>{dev.name}</Card.Title>
                <Card.Text>{dev.description}</Card.Text>
                <Card.Text>Rating: {dev.rating}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Button variant="secondary" className="see-all-btn">See More</Button>
    </div>
  );
}

export default FeaturedFreelancers;
