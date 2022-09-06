import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { useState, useEffect } from "react";
import { baseUrl, UCODE, CAT_CODE } from '../services/common';

const API_URL = `${baseUrl}/control/categorias/?ucode=${UCODE}&codigo=${CAT_CODE}`

// this.categs = r[0].hijos.filter((t:any) => t.is_public);

function MyCard(props) {
  return (
    <Col md={4} className="mb-3">
      <Card className='shadow'>
        <Link to={{
          pathname: `/portfolio/${props.item.slug}`, 
          query:{thing: 'asdf', another1: 'stuff'}
        }}>
          <Card.Img variant="top" src={props.item.imagen}/>
        </Link>
        <Card.Body>
          <Card.Title>{props.item.title}</Card.Title>
          {/* <Card.Body dangerouslySetInnerHTML={{__html: props.item.description}}></Card.Body> */}
        </Card.Body>
      </Card>
    </Col>
  )
}

function Portfolio() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    async function getCategories() {
      await fetch(API_URL).then(response => response.json()).then((actualData) => {
        getData(actualData[0].hijos[0].id);
        setError(null);
      }).catch((err) => {
        setError(err.message);
      }).finally(() => setLoading(false));
    }
    getCategories()

    async function getData(id) {
      await fetch(`${baseUrl}/control/es/productos?ucode=${UCODE}&categoria=${id}`)
      .then(response => response.json()).then((actualData) => {
        setProducts(actualData);
        setError(null);
      }).catch((err) => {
        setError(err.message);
        setProducts(null);
      }).finally(() => setLoading(false));
    }

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
        {products && products.map((t, index)=> <MyCard item={t} key={index.toString()} />) }
      </Row>
    </Container>
  );
}

export default Portfolio;