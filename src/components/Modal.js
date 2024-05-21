import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form1 from "./Form1";

function Example() {//em
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
     
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body><Form1/></Modal.Body>
        
      </Modal>
      
    </>
  );
}
export default Example;