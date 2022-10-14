import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { useState, useEffect } from "react";
import { baseUrl, UCODE, CAT_CODE1 } from '../services/common';

// list(params: any = {}): Observable<Categoria[]> {
//   return this.http.get<Categoria[]>(`${API_URL}/${ucode}`, { params })
//   .pipe(catchError(errorHandler));
// }

// listSubCats(parent:string): Observable<Categoria[]> {
//   return this.http.get<Categoria[]>(`${API_URL}/${parent}/childs`)
//   .pipe(catchError(errorHandler));
// }

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
          <Card.Title className='h6'>{props.item.nombre}</Card.Title>
          {/* <Card.Body dangerouslySetInnerHTML={{__html: props.item.description}}></Card.Body> */}
        </Card.Body>
      </Card>
    </Col>
  )
}

function Portfolio() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    async function getCategories() {
      await fetch(`${baseUrl}/api/categories/${UCODE}?code=${CAT_CODE1}&isActive=true`)
      .then(r => r.json()).then((cats) => {
        getSubcategories(cats[0]._id);
        setError(null);
      }).catch((err) => setError(err.message))
      .finally(() => setLoading(false));
    }
    getCategories()

    async function getSubcategories(parent) {
      await fetch(`${baseUrl}/api/categories/${parent}/childs?isActive=true`)
      .then(response => response.json()).then((subs) => {
        getData(subs[0]._id);
        setError(null);
      }).catch((err) => setError(err.message))
      .finally(() => setLoading(false));
    }

    async function getData(categoryId) {
      await fetch(`${baseUrl}/api/products/${categoryId}/public?isActive=true`)
      .then(response => response.json()).then(actualData => {
        const prods = actualData.map(t=> new Object({...t, imagen:`${baseUrl}/${t.imgs[0]}`}))
        setProducts(prods); 
        setError(null);
      }).catch((err) => {
        setError(err.message); setProducts(null);
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