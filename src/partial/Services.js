import { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faClock, faLayerGroup, faCheckCircle, faMobile, faWrench } from "@fortawesome/free-solid-svg-icons";

const LIST = [
  {
    icon:faClock,
    title:'DESARROLLO DE SITIOS WEB',
    description:'Desarrollo de aplicaciones web multiplataforma'
  },
  {
    icon:faLayerGroup,
    title:'DISEÑO DE SITIOS WEB',
    description:'Desarrollo de aplicaciones web multiplataforma'
  },
  {
    icon:faCheckCircle,
    title:'DESPLIEGUE DE SITIOS WEB',
    description:'Desarrollo de aplicaciones web multiplataforma'
  },
  {
    icon:faWrench,
    title:'DESARROLLO APLICACIONES WEB',
    description:'Desarrollo de aplicaciones web multiplataforma'
  },
  {
    icon:faMobile,
    title:'PROGRESIVE WEB APP',
    description:'Desarrollo de aplicaciones web multiplataforma'
  }
]

export default class Services extends Component {
  constructor(props){
    super(props)
    this.state = {
      data:LIST
    }
  }
  
  processList(){
    const cols = this.state.data.map((item, index)=>{
      return (
        <Col md={4} className="mb-3" key={index.toString()} >
          <Card>
            <Card.Body>
              <FontAwesomeIcon icon={item.icon} />
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      )
    })
    this.setState({cols});
  }

  componentDidMount(){
    this.processList()
  }

  render() {

      return (
        <Container className="my-5 py-3">
          <h2 className='text-center'>Servicios</h2>
          <Row className='justify-content-center text-start'>
            { this.state.cols}            
          </Row>
        </Container>

      )
  }
}