import Container from 'react-bootstrap/Container';
import { Accordion} from 'react-bootstrap';
import { Component } from 'react';

const LIST = [
    {
        description: "Curso de Formación Complementaria. Plataforma Virtual: 'DevCode'.",
        title: "Fundamentos de Java.",
        date: "16/02/2017",
        id: '0'
    },
    {
        description: "Formación Complementaria: Curso. Título: Curso Internacional de Ensamblaje de Computadoras. Institución: Universidad Privada de San Carlos; No de horas: 140. Comentarios: Redes LAN e Instalación de Locutorios",
        title: "Ensamblaje de computadoras",
        date: "01/08/2017",
        id: '1'
    },
    {
        description: "Curso de Formación Complementaria",
        title: "Docke",
        date: "01/11/2016",
        id: '2'
    },
    {
        description: "Seminario Jornada de telecomunicaciones, Internet y Sociedad de la Información. Institución: DRTC-PUNO.",
        title: "Sociedad de la información.",
        date: "01/05/2016",
        id: '3'
    },
    {
        description: "Curso de desarrollo de aplicaciones web progresivas",
        title: "Aplicación web progresiva (PWA).",
        date: "16/02/2018",
        id: '4'
    },
    {
        description: "Curso de servidores web: nginx, gcloud, firebase",
        title: "Curso servidores web",
        date: "16/00/2019",
        id: '5'
    },
]

function MyItem(props) {
    return <Accordion.Item eventKey="{props.item.id}">
          <Accordion.Header>{props.item.title}</Accordion.Header>
          <Accordion.Body>{props.item.description} {props.item.id}</Accordion.Body>
        </Accordion.Item>
}

export default class Courses extends Component {
  constructor(props){
    super(props)
    this.state = {
      data:[]
    }
  }

  render() {
      return (
        <Container className="my-5 py-3">
          <h2 className='text-center'>Cursos</h2>
          <Accordion defaultActiveKey="0">
            {LIST.map((t, idx)=> <MyItem item={t}/>)} 
          </Accordion>
        </Container>
      )
  }
}
