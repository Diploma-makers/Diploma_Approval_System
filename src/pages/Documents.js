import { Button, Form, Table } from "react-bootstrap"
import InputGroup from 'react-bootstrap/InputGroup';
import { useEffect, useState } from "react"; 
import { Link } from "react-router-dom";
import { AiOutlineSearch } from 'react-icons/ai'
import { getDocs, collection } from "firebase/firestore";
import '../App.css';
import { db } from '../Data/firebase';

  
function Documents () {     
    const collection_doc = "documents"
    const findAll = () => {
        return getDocs(collection(db, collection_doc))
          .then((querySnapshot) => {
            const res = [];
            querySnapshot.forEach((documents) => {
              res.push({
                id: documents.id,
                ...documents.data()
              });
            });
      
            return res;
          })
          .catch((error) => {
            console.log('Error occurred:', error);
            return [];
          });
      };
      
      const [documents, setDocuments] = useState([]);
      const [search, setSearch] = useState('');
      const [topic, setTopic] = useState('');
      const [description, setDescription] = useState('');
      
      useEffect(() => {
        findAll().then((data) => setDocuments(data));
      }, []);

        const handleClick = (topic, description) => {
            setTopic(topic);
            setDescription(description);
        }
        
        return(
            <div className="docPage">
                <h1>Documents</h1>
                <hr></hr>
                <div className="form">
                        <Form className="m-3">
                            <InputGroup className="my-3">
                                <h4><AiOutlineSearch className="search"/></h4>
                                <Form.Control onChange={(e) => setSearch(e.target.value)} placeholder='Search' />
                            </InputGroup> 
                        </Form>
                        <Table>
                            <thead className="tableHead">
                                <tr>
                                    <th>Topic title</th>
                                    <th>Description</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody className="rows">
                                {documents
                                .filter((documents) => {
                                    return search.toLowerCase() === '' 
                                    ? documents 
                                    : documents.topic.toLowerCase().includes(search);
                                })
                                .map((documents) => ( 
                                    <tr key={documents.id}>
                                        <td className="tdbor iWidth">
                                            <input className="noInput"  
                                            value={documents.topic} 
                                            onChange={(e) => setTopic(e.target.value)}
                                            readonly></input>
                                            </td>
                                        <td className="tdbor ">
                                            <input className="noInput mWidth"  
                                            value={documents.description} 
                                            onChange={(e) => setDescription(e.target.value)}
                                            readonly></input>
                                        </td>
                                        <td className="iWidth">{documents.status ? 
                                        <Link
                                            to="/topic"
                                            state={{data: documents}}
                                        >
                                            <Button className="statusButton" onClick={() => handleClick(documents.topic,documents.description)} variant="success">Select</Button> 
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