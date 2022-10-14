import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';
import { baseUrl } from '../../services/common';
import ImageModal from './ImageModal';
import Button from 'react-bootstrap/Button';
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function PageDetail() {
  let { slug } = useParams()
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    fetch(`${baseUrl}/api/products/${slug}/by-slug`)
      .then(response => response.json()).then((actualData) => {
        setData(actualData);
        setError(null);
      }).catch((err) => {
        setError(err.message);
        setData(null);
      }).finally(() => setLoading(false))
  }, {});

  return (
    <Container className="my-5 py-4">
      {loading && <div className='text-center'>A moment please...</div>}
      {error && (
        <div className='text-center text-danger'>{`There is a problem fetching the - ${error}`}</div>
      )}
      <Row>
        <Col md={6} className="text-start ps-4">
          <Carousel>
            {
              data && data.imgs.map((t, index) => {
                return <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={baseUrl + '/' + t}
                    alt={data.nombre}
                  />
                  <Carousel.Caption>
                    <Button variant="primary" onClick={() => setModalShow(true)} size="sm">
                      <FontAwesomeIcon icon={faEye} /> Ver
                    </Button>
                    <ImageModal show={modalShow} onHide={() => setModalShow(false)} imagen={baseUrl + '/' + t} />
                  </Carousel.Caption>
                </Carousel.Item>
              })
            }
          </Carousel>
        </Col>

        <Col md={6} className="text-start mt-4">
          <h2>{data && data.nombre}</h2>
          <hr />
          <div dangerouslySetInnerHTML={{ __html: data && data.descripcion }}></div>
        </Col>
      </Row>

    </Container>
  );
}

export default PageDetail;
