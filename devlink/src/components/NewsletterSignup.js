import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';

const NewsletterSignup = () => {
  return (
    <div className="newsletter-signup">
      <h3>SIGN UP FOR OUR DAILY INSIDER</h3>
      <Form inline className="justify-content-center">
        <FormControl type="email" placeholder="Enter your email" className="mr-sm-2" />
        <Button variant="primary">Subscribe</Button>
      </Form>
    </div>
  );
}

export default NewsletterSignup;
