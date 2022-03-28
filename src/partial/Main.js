import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

function Main() {
  return (
    <div className="bgimage">
      <Container className="mt-5 pt-5">
        <Row className='text-center'>
          <Col md={6} className="text-center">
            <Image src={require("../assets/aldo.jpeg")} roundedCircle className='aldo-img'/>
          </Col>
          <Col md={6}>
            <div className="bgTitle">
              <h1 className='title'>Hola, yo soy Aldo</h1>
              <h3 className='sub-tible'>Soy un profesional freelance en Perú</h3>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Main;
