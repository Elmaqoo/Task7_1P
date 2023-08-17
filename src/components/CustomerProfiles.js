import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { faker } from '@faker-js/faker';

const CustomerProfiles = () => {
  const customers = Array(3).fill(0).map(() => ({
    name: faker.person.firstName(),
    image: faker.image.avatar(),
    description: faker.lorem.sentence(),
    rating: faker.number.float({ min: 1.0, max: 5.0,precision:0.01 }),
  }));

  return (
    <div className="customer-profiles">
      <h2>Featured Customers</h2>
      <Row>
        {customers.map(customer => (
          <Col key={customer.name}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={customer.image} />
              <Card.Body>
                <Card.Title>{customer.name}</Card.Title>
                <Card.Text>{customer.description}</Card.Text>
                <Card.Text>Rating: {customer.rating}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Button variant="secondary" className="see-all-btn">See All Customers</Button>
    </div>
  );
}

export default CustomerProfiles;
