import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { baseUrl, UCODE } from '../services/common';

function MyCard(props) {
  return (
    <Col md={4} className="mb-3">
      <Card className='shadow'>
        <Link to={{
          pathname: `/portfolio/${props.item.slug}`,
          query: { thing: 'asdf', another1: 'stuff' }
        }}>
          <Card.Img variant="top" src={`${baseUrl}/${props.item.imgs[0]}`} />
        </Link>
        <Card.Body>
          <Link to={{ pathname: `/portfolio/${props.item.slug}` }} className='text-dark h5'>
            {props.item.title}
          </Link>
        </Card.Body>
      </Card>
    </Col>
  )
}

function Portfolio() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      await fetch(`${baseUrl}/api/blogs/${UCODE}/public`)
        .then(response => response.json()).then(actualData => {
          // const prods = actualData.map(t=> new Object({...t, imagen:`${baseUrl}/${t.imgs[0]}`}))
          setBlogs(actualData);
          setError(null);
        }).catch((err) => {
          setError(err.message); setBlogs(null);
        }).finally(() => setLoading(false));
    }

    getData()
  }, []);

  return (
    <Container className="my-5 py-3">
      <h2 className='text-center'>Portafolio</h2>
      <p className='myDescription fs-5'>En el desarrollo de mi carrera profesional tuve la oportunidad de realizar algunos proyectos.</p>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the - ${error}`}</div>
      )}
      <Row>
        {blogs && blogs.map((t, index) => <MyCard item={t} key={index.toString()} />)}
      </Row>
    </Container>
  );
}

export default Portfolio;