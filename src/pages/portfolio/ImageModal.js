import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function ImageModal(props) {
  console.log('--------->', props);
  return (
    <Modal {...props} size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <img className="d-block w-100" src={props.imagen} />
      <Modal.Footer>
        <Button onClick={props.onHide} size="sm">Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ImageModal;
