import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import { DRIVE_BASE_URL } from '../../services/common';
import { useState } from "react";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ImageModal(props) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)} size="sm">
        <FontAwesomeIcon icon={faEye} /> Ver
      </Button>
      <Modal size="lg" show={modalShow}
        centered>
        <Carousel>
          {
            props.blog.imgs.map((t, index) => {
              return <Carousel.Item>
                <img className="w-100" src={DRIVE_BASE_URL + t} alt={props.blog.title} />
              </Carousel.Item>
            })
          }
        </Carousel>
        <Modal.Footer>
          <h5>{props.blog.title}</h5>
          <Button onClick={() => setModalShow(false)} size="sm">Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ImageModal;
