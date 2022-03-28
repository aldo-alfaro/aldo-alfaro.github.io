import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faGraduationCap, faCheck } from "@fortawesome/free-solid-svg-icons";

const LIST = [
  {
    title:'Ingeniería de Sistemas',
    description:'Universidad Peruana Unión - Filial Juliaca; Situación: Titulado y Colegiado',
    date:'2011-2017'
  }
]

function Rows(props) {
  return (
    <Container>
      <Row>
        <Col>
          <FontAwesomeIcon icon={faGraduationCap} size={"2x"}/>
        </Col>
        <Col xs={10} md={10}>
          <h4 className='text-start'>{props.item.title}</h4>
          <p className='text-start m-0'>{props.item.description}</p>
          <p className='text-muted text-end'><small>{props.item.date}</small></p>
        </Col>
        <Col><FontAwesomeIcon icon={faCheck} size={"2x"}/></Col>
      </Row>
      <ProgressBar now={100} variant={'success'}/>
    </Container>
  )
}

function Studies() {
  return (
    <Container className="my-5 py-3">
      <h2 className='text-center'>Mis Estudios</h2>
      <p className='myDescription fs-5'>A lo largo de mi carrera profesional tuve la suerte de obtener algunos títulos que me ayudaron a mejorar considerablemente mis habilidades de creación de aplicaciones.</p>
      {LIST.map((t, index) => <Rows item={t} key={index.toString()} />)}
    </Container>
  );
}

export default Studies;