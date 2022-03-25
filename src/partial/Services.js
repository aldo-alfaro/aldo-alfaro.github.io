import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Component } from 'react';

const LIST = [
  {
    title:'WEBSITE DESIGN',
    description:'With supporting text below as a natural lead-in to additional content.'
  },
  {
    title:'WEBSITE DEVELOPMENT',
    description:'With supporting text below as a natural lead-in to additional content.'
  },
  {
    title:'WEBSITE DEVELOPMENT 3',
    description:'With supporting text below as a natural lead-in to additional content.'
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
    const cols = this.state.data.map(item=>{
      return <Col md={4} className="mb-3">
        <Card>
            <Card.Body>
                <FontAwesomeIcon icon={faHome} />
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
            </Card.Body>
        </Card>
      </Col>
    })
    this.setState({cols});
  }

  componentDidMount(){
    this.processList()
  }

  render() {

      return (
        <Container className="my-5 py-3">
          <h2 className='text-center'>Services</h2>
          <Row>
            { this.state.cols}            
          </Row>
        </Container>

      )
  }
}