import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const LIST = [
  {
    title:'python',
    url:'imgs/logos/python.png',
    porcent:85,
  },
  {
    title:'django',
    url:'imgs/logos/django.png',
    porcent:95,
  },
  {
    title:'django rest framework',
    url:'imgs/logos/drf.png',
    porcent:90,
  },
  {
    title:'angular',
    url:'imgs/logos/angular.png',
    porcent:90,
  },
  {
    title:'react',
    url:'imgs/logos/react192.png',
    porcent:55,
  },
  {
    title:'vue',
    url:'imgs/logos/vuejs.png',
    porcent:20,
  },
  {
    title:'javascript',
    url:'imgs/logos/javascript.png',
    porcent:93,
  },
  {
    title:'html5',
    url:'imgs/logos/html5.png',
    porcent:94,
  },
  {
    title:'css',
    url:'imgs/logos/css3.png',
    porcent:80,
  },
  {
    title:'nest js',
    url:'imgs/logos/nest.svg',
    porcent:45,
  },
  {
    title:'java',
    url:'imgs/logos/java.png',
    porcent:50,
  },
  {
    title:'node + express js + mongodb',
    url:'imgs/logos/node_express.jpeg',
    porcent:60,
  }
]

function MyItems(props) {
  return (
    <Col xs={6} md={2} className="mb-3">
      <CircularProgressbarWithChildren value={props.item.porcent}>
      <img src={props.item.url} className="fluid" alt={props.item.title} style={{ width: 75, marginTop: 10 }}/> <br />
      <div className="text-center">
        <strong>{props.item.porcent}%</strong> 
      </div>
      </CircularProgressbarWithChildren>
    </Col>
  )
}

function Skills() {
  return (
    <Container className="my-5 py-3">
      <h2 className='text-center'>Mis habilidades</h2>
      <Row className='justify-content-center'>
      { LIST.map((t, index)=> <MyItems item={t} key={index.toString()} />) }
      </Row>
    </Container>
  );
}

export default Skills;
