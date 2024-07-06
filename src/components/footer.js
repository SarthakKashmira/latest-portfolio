import { Container, Row, Col } from "react-bootstrap";
import logo from "../img/icons8-copyright-64.png";
import navIcon1 from "../img/nav-icon1.svg";
import navIcon2 from "../img/icons8-github-30.png";
import navIcon3 from "../img/icons8-codechef.svg";
import React from 'react';
import './footer.css';

function Footer ()  {
  return (
    <footer className="footer" id='footers'>
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/sarthak-kashmira-522bb3220" target='blank'><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/SarthakKashmira" target='blank'><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.codechef.com/users/sarthak_90" target='blank'><img src={navIcon3} alt="Icon" /></a>
              <a href="https://leetcode.com/u/sarthakkashmira/" target='blank'><img src="https://leetcode.com/static/images/LeetCode_logo.png" alt="Icon" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
export default Footer;
