import './Skills.css';
import { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const LIST = [
  {
    title:'DESARROLLO DE SITIOS WEB',
    description:'Desarrollo de aplicaciones web multiplataforma'
  },
  {
    title:'DISEÑO DE SITIOS WEB',
    description:'Desarrollo de aplicaciones web multiplataforma'
  },
  
]

export default class Skills extends Component {
  constructor(props){
    super(props)
    this.state = {
      data:LIST
    }
  }
  
  processList(){
    const cols = this.state.data.map((item, index)=>{
      return (
        <Col md={2} className="mb-3" key={index.toString()} >
          <div class="circle-wrap">
            <div class="circle">
              <div class="mask full">
                <div class="fill"></div>
              </div>
              <div class="mask half">
                <div class="fill"></div>
              </div>
              <div class="inside-circle"> 
                <span>python</span><br />
                <span>75%</span>
              </div>
            </div>
          </div>
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
          <h2 className='text-center'>Skills</h2>
          <Row className='justify-content-center text-start'>
            { this.state.cols}            
          </Row>
        </Container>

      )
  }
}