import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from 'react-bootstrap';

const LIST = [
  {
    title:'Página web',
    description:'Pagina web del hotel "Espinar Plaza hotel" con reservaciones en linea. Desarrollado en Angular',
    image:'/imgs/portfolio/eph.jpeg',
    url:'https://www.espinarplazahotel.com'
  },
  {
    title:'Administrador de hotel',
    description:'Administrador del hotel Plaza Espinar; habitaciones, hespedes, servicios, etc. Desarrollado en Django (python)',
    image:'/imgs/portfolio/admin-plaza-hotel.jpeg',
    url:''
  },
  {
    title:'Sistema de ventas',
    description:'Sistema de ventas, compras, automatización de inventarios, kardex, caja. Y facturación electrónica',
    image:'/imgs/portfolio/sis-ventas.jpeg',
    url:'https://dyauri.latin.pe'
  },
  {
    title:'Neumaticas Ventilson Web',
    description:'Página web de una tienda de válvulas neumáticas "Ventilson SAC". Desarrollado en Angular',
    image:'/imgs/portfolio/ventilson-productos.jpeg',
    url:'https://www.ventilson.com'
  },
  {
    title:'SENR Soluciones Sitio Web',
    description:'Página web de Compra y Venta de Accesorios: Neumáticos, Hidráulicos y Eléctricos. Desarrollado en Angular',
    image:'/imgs/portfolio/senr.jpeg',
    url:'https://www.ventilson.com'
  },
  {
    title:'Sitio web Municipio Cotabambas',
    description:'Página web institucional de la municipalidad de Tambobamba Cotabambas Apurimac. Desarrollado en Django',
    image:'/imgs/portfolio/muni-cotabambas-web.jpeg',
    url:'https://www.muniprovincialcotabambas.gob.pe'
  }
]

function MyCard(props) {
  return (
    <Col md={4} className="mb-3">
      <Card>
        <a href={props.item.url} target="_blank" rel="noopener noreferrer">
        <Card.Img variant="top" src={props.item.image} />
        </a>
        <Card.Body>
          <Card.Title>{props.item.title}</Card.Title>
          <Card.Text>{props.item.description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

function Portfolio() {
  return (
    <Container className="my-5 py-3">
      <h2 className='text-center'>Portafolio</h2>
      <p className='myDescription fs-5'>En el desarrollo de mi carrera profesional tuve la oportunidad de realizar algunos proyectos de manera libre.</p>
      <Row>
        { LIST.map((t, index)=> <MyCard item={t} key={index.toString()} />) }            
      </Row>
    </Container>
  );
}

export default Portfolio;