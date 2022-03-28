import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import aldo1 from "../assets/aldo1.jpeg";

function About() {
  return (
      <Container className="my-5 py-4">
        <Row>
          <Col md={4} className="text-center mb-3">
            <Image src={aldo1} thumbnail width={'300px'}/>
          </Col>
          <Col md={8} className="text-start ps-4">
            
            <h2>About Me</h2>
            <p className='fs-5'>
            Systems Engineer collegiate in the CIP with more than 5 years of experience in the
development of multi-platform web applications (web pages, web systems); front end and
backend, management of information technologies such as "web services" and languages ​​such as
python (frameworks: django and django rest framework), web language (javascript, jquery,
angular, html5, css, bootstrap, materialize, angular material.
            </p>
            <ul>
                <li>Name: Aldo Alfaro Curitumay</li>
                <li>Age: 32</li>
                <li>Occupation: Web Developer</li>
            </ul>

          </Col>
        </Row>
      </Container>
  );
}

export default About;
