import { BsPersonCircle } from 'react-icons/bs'
import { Button, Container, Table, FloatingLabel } from "react-bootstrap"
import Form from 'react-bootstrap/Form';
import AuthDetails from '../componets/auth/AuthDetails';

const Profile = () => {
    return (
        <div className="docPage">
            <h1>Profile</h1>
            <hr></hr>
            <div className='proForm'>
                <div>
                    <BsPersonCircle className='logoProf'/>
                    <h3>
                        <AuthDetails/></h3>
                </div>
                <div >
                    <Form className='infoPro'>
                        <h3>Information</h3>
                        <Form.Group>Team name:
                            <h6>Apple</h6>
                        </Form.Group>
                        <Form.Group>Group:
                            <h6>AP-1234</h6></Form.Group>
                        <Form.Group>Topic:
                            <h6>Apple</h6></Form.Group>
                    </Form>
                    <Form className='infoPro'>
                        <h3>Team members</h3>
                        <Form.Group>
                            <BsPersonCircle className='logoMem'/>
                            <BsPersonCircle className='logoMem'/>
                        </Form.Group>
                    </Form>
            </div>
                
                <div className='infoPro'>
                    <Form >
                        <h3>Information</h3>
                        <Form.Group>Protocol:
                        <h6><Button variant='light' disabled>detail</Button></h6>
                        </Form.Group>
                        <Form.Group>GPA:
                            <h6><Button variant='light' disabled>detail</Button></h6>
                        </Form.Group>
                        
                    </Form>
                </div>

            </div>
        </div>
    )
}

export default Profile