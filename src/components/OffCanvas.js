import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';
function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <span className='navbar-toggler-icon'></span>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Navigate Here</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p><NavLink to="/" onClick={() => setShow(false)}>Home</NavLink></p>
          <p><NavLink to="/about" onClick={() => setShow(false)}>About</NavLink></p>
          <p><NavLink to="/contact" onClick={() => setShow(false)}>Contact</NavLink></p>
          
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Example;