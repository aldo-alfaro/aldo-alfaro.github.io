import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import aldo1 from "../assets/aldo1.jpeg";
import ProgressBar from 'react-bootstrap/ProgressBar';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faGraduationCap, faCheck } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
      <Container className="my-5 py-4">
        <Row>
          <Col md={4} className="text-center mb-3">
            <Image src={aldo1} thumbnail width={'300px'}/>
          </Col>
          <Col md={8} className="text-start ps-4">
            <h2>¿Quién soy?</h2>
            <p className='fs-5'>Soy Ingeniero de Sistemas con más de 5 años de experiencia en el área de desarrollo de aplicaciones web (Páginas web, Sistemas web) multiplataforma; frontend y backend. </p>
            <p className='fs-5'>Manejo de tecnologías de información como las “web services” y lenguajes como python (frameworks: django y django rest framework), express, nodejs, lenguaje web (javascript, jquery, angularjs, angular, reactjs, vuejs, html5, css, bootstrap, materialize, angular material, etc.)</p>
            {/* <ul>
                <li>Nombre: Aldo Alfaro Curitumay</li>
                <li>Edad: 32</li>
                <li>Ocupación: Desarrollador web</li>
            </ul> */}
            <Row>
              <Col>
                <FontAwesomeIcon icon={faGraduationCap} size={"2x"}/>
              </Col>
              <Col xs={10} md={10}>
                <h4 className='text-start'>Ingeniería de Sistemas</h4>
                <p className='text-start m-0'>Universidad Peruana Unión - Filial Juliaca; Situación: Titulado y Colegiado</p>
                <p className='text-muted text-end'><small>2011-2017</small></p>
              </Col>
              <Col><FontAwesomeIcon icon={faCheck} size={"2x"}/></Col>
            </Row>
            <ProgressBar now={100} variant={'success'}/>
          </Col>
        </Row>
      </Container>
  );
}

export default About;
