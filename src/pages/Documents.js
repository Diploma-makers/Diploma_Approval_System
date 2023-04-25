import { docData } from "../Data/DocData"
import { Button, Container, Table } from "react-bootstrap"
import { Form } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from "react"; 
import { Link } from "react-router-dom";
import { AiOutlineSearch } from 'react-icons/ai'
import Topic from "./Topic"
import '../App.css';

function Documents () {
    const [search, setSearch] = useState('')
    
    const [nameTopic, setNameTopic] = useState('Empty_title')
    const handleClick = (topic) => {
        Topic.title=topic
        setNameTopic(topic)
        console.log("hello, " + Topic.title)
        
    }

    return (
        
        <div className="docPage">
            
            <h1>Documents</h1>
            <hr></hr>
            <div className="form">
                    <Form className="m-3">
                        <InputGroup className="my-3">
                            <h4><AiOutlineSearch className="search"/></h4>
                            <Form.Control onChange={(e) => setSearch(e.target.value)} placeholder='Search contacts' />
                        </InputGroup> 
                    </Form>
                    <Table>
                        <thead className="tableHead">
                            <tr>
                                <th>Topic title</th>
                                <th>Descpiction</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody className="rows">
                            {docData.filter((item) => {
                                return search.toLowerCase() === '' 
                                ? item 
                                : item.topic_title.toLowerCase().includes(search);
                            })
                            .map((item) => ( 
                                <tr key={item.id}>
                                    <td className="tdbor">{item.topic_title}</td>
                                    <td className="tdbor">{item.description}</td>
                                    <td >{item.status ? 
                                    <Link to="topic">
                                        <Button className="statusButton" onClick={() => handleClick(item.topic_title) 
                                        } variant="success">Select</Button> 
                                    </Link>
                                    : <Button variant="danger" disabled>Unavaible</Button> }</td>
                                    
                                    
                                </tr>
                            ))
                            }
                        </tbody>
                    </Table>
            </div>
        </div>
    )
}

export default Documents