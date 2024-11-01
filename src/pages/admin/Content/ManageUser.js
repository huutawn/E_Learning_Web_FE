import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const ManageUser = (props)=> {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
 

    
    return (
        <div className="manage-user-container">
            <div className="title">
            ManageUser
            </div>
        <div className="users-content"> 
            <div>
            <button> Add new user</button>
            
            </div>
            <div >
   
            <Button variant="primary" onClick={handleShow}>
        Đăng ký tài khoản
      </Button>

      <Modal 
      show={show} 
      onHide={handleClose}
      size ="xl"
      backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
  
      <Form.Group as={Col} controlId="formGridUser">
          <Form.Label>UserName</Form.Label>
          <Form.Control type="User" placeholder="UserName" />
        </Form.Group>

</Row>
      <Row className="mb-3">
  
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>User</option>
            <option>Giáo viên</option>
            <option>Sale</option>
            <option>...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

      </Row>
      <Row className="mb-3">
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Update filr images</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
    </Row>
    <Row className="mb-3">
      <Form.Group controlId="formFile" className="mb-3">
        
        <Form.Label>đfdfdf</Form.Label>
       
      </Form.Group>
    </Row>

    </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Đồng Ý
          </Button>
        </Modal.Footer>
      </Modal>
                    
            </div>
     
        </div> 


        </div>
    )
}
export default ManageUser;