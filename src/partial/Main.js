import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './../assets/custom.css';
import Image from 'react-bootstrap/Image'

function Main() {
  return (
    <div className="bgimage">
      <Container className="mt-5 pt-5">
        <Row className='text-center'>
          <Col md={6} className="text-center">
            <Image src={require("./../assets/aldo.jpeg")} roundedCircle className='aldo-img'/>
          </Col>
          <Col md={6}>
            <div className="bgTitle">
              <h1 className='title'>Hi, it's me Aldo</h1>
              <h3 className='sub-tible'>I am a professional freelancer in Peru</h3>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Main;
