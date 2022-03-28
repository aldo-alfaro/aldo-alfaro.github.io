import Container from 'react-bootstrap/Container';
import { Accordion} from 'react-bootstrap';
import { Component } from 'react';

const LIST = [
    {
      id:'0',
      description: "Curso de Formación Complementaria. Plataforma Virtual: 'DevCode'.",
      title: "Fundamentos de Java.",
      date: "16/02/2017",
    },
    {
      id:'1',
      description: "Formación Complementaria: Curso. Título: Curso Internacional de Ensamblaje de Computadoras. Institución: Universidad Privada de San Carlos; No de horas: 140. Comentarios: Redes LAN e Instalación de Locutorios",
      title: "Ensamblaje de computadoras",
      date: "01/08/2017",
    },
    {
      id:'2',
      description: "Curso de Formación Complementaria",
      title: "Docker",
      date: "01/11/2016",
    },
    {
      id:'3',
      description: "Seminario Jornada de telecomunicaciones, Internet y Sociedad de la Información. Institución: DRTC-PUNO.",
      title: "Seminario Jornada de telecomunicaciones, Internet y Sociedad de la Información",
      date: "01/05/2016",
    },
    {
      id:'4',
      description: "Curso de desarrollo de aplicaciones web progresivas",
      title: "Aplicación web progresiva (PWA).",
      date: "16/02/2018",
    },
    {
      id:'5',
      description: "Curso de servidores web: nginx, gcloud, firebase",
      title: "Curso servidores web",
      date: "16/00/2019",
    }
]

function MyItem(props) {
    return (
      <Accordion.Item eventKey={props.item.id}>
        <Accordion.Header>{props.item.title}</Accordion.Header>
        <Accordion.Body>{props.item.description}</Accordion.Body>
      </Accordion.Item>
    )
}

export default class Courses extends Component {
  render() {
      return (
        <Container className="my-5 py-3">
          <h2 className='text-center'>Seminarios y Cursos</h2>
          <p className='myDescription fs-5'>A lo largo de mi carrera profesional tuve la oportunidad de realizar algunos cursos que me dieron las bases necesarias.</p>
          <Accordion>
            {LIST.map((t, index)=> <MyItem item={t} key={index.toString()}/>)} 
          </Accordion>
        </Container>
      )
  }
}
