import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className="footer">
      <Row>
        <Col>
          <h4>For Dev</h4>
          <ul>
            <li>How it works</li>
            <li>How to create a profile</li>
            <li>Find Jobs</li>
          </ul>
        </Col>
        <Col>
          <h4>For Clients</h4>
          <ul>
            <li>How it works</li>
            <li>How to post a job</li>
            <li>Find Dev</li>
          </ul>
        </Col>
        <Col>
          <h4>Stay connected</h4>
          <ul>
            <li><img src="facebook-icon-url" alt="Facebook" /></li>
            <li><img src="twitter-icon-url" alt="Twitter" /></li>
            <li><img src="instagram-icon-url" alt="Instagram" /></li>
          </ul>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
