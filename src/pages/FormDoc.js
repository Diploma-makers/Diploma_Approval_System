import { Button, Container, Table, FloatingLabel } from "react-bootstrap"
import Form from 'react-bootstrap/Form';
import React, { useState }from "react";

const FormDoc = () => {
    return (
        <div className='docPage'>
            <h1>Form</h1>
            <hr></hr>
            <Form className="form p-5 w-50">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Fullname</Form.Label>
                    <Form.Control placeholder="Fullname" />
                </Form.Group>
            
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Topic</Form.Label>
                    <Form.Control placeholder="Topic" />
                </Form.Group>
                
                <Form.Label>Descpiction</Form.Label>
                <FloatingLabel controlId="floatingTextarea2">
                
                    <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '100px' }}
                    />
                </FloatingLabel>
                <hr></hr>
                <Button variant="success" disabled> Submit </Button>{' '}
                
            </Form>
        </div>
      );
    }

export default FormDoc

