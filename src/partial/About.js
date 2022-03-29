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
            <h2>¿Quién soy?</h2>
            <p className='fs-5'>Soy Ingeniero de Sistemas Colegiado con más de 5 años de experiencia en el desarrollo de aplicaciones web (Páginas web, Sistemas web) multiplataforma; frontend y backend. </p>
            <p className='fs-5'>Manejo de tecnologías de información como las “web services” y lenguajes como python (frameworks: django y django rest framework), express, nodejs, lenguaje web (javascript, jquery, angularjs, angular, reactjs, vuejs, html5, css, bootstrap, materialize, angular material, etc.)</p>
            <ul>
                <li>Nombre: Aldo Alfaro Curitumay</li>
                <li>Edad: 32</li>
                <li>Ocupación: Desarrollador web</li>
            </ul>

          </Col>
        </Row>
      </Container>
  );
}

export default About;
