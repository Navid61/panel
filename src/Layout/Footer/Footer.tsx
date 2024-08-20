// MainSection.tsx
import React, { useState, useEffect, Suspense } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
// Import Sidebar component
// import Sidebar from '../Sidebar/Sidebar';


const Footer: React.FC<{}> = () => {
 
  return (
    <Container fluid>
      <Row>
        <Col>
<p>Footer</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
