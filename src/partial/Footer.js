import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faTwitter, faSlack, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <section>
      <div className='bg-footer-0'>
        <Container className='py-5'>
          <Row>
            <Col md={4}>
              <h3>Aldo AC</h3>
            </Col>
            <Col md={4}>
              <FontAwesomeIcon icon={faGithub} size={"lg"} />
              <FontAwesomeIcon icon={faFacebook} size={"lg"} />
              <FontAwesomeIcon icon={faTwitter} size={"lg"} />
              <FontAwesomeIcon icon={faSlack} size={"lg"} />
              <FontAwesomeIcon icon={faYoutube} size={"lg"} />
            </Col>
            <Col md={4}></Col>
          </Row>
        </Container>
      </div>
      <div className='bg-dark'>
        <Container>
          <footer className="py-2 text-white text-center">
            <p className="m-0">© 2021 Todos los derechos reservados. Creado por 
              <span className="text-info">Aldo Alfaro C</span>
            </p>
          </footer>
        </Container>
      </div>
    </section>
  );
}

export default Footer;