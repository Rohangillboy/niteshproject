import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Story.css'
export function Storymodal({image,title,profilesSrc}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
        <div style={ {backgroundImage: `url(${image})` } } 
    className="story">
        <Avatar src={profilesSrc} className="story__avatar" />
        <h4> {title}</h4>
    </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
