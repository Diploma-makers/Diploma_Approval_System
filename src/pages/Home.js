import { Button, Form, Table } from "react-bootstrap"
import InputGroup from 'react-bootstrap/InputGroup';
import { useEffect, useState } from "react"; 
import { Link } from "react-router-dom";
import { AiOutlineSearch } from 'react-icons/ai'
import { getDocs, collection } from "firebase/firestore";
import '../App.css';
import { db } from '../Data/firebase';

const Home = () => {
    const collection_doc = "news"
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
      const [email, setEmail] = useState('');
      const [date, setDate] = useState('');
      
      useEffect(() => {
        findAll().then((data) => setDocuments(data));
      }, []);

        const handleClick = (topic, description) => {
            setTopic(topic);
            setDescription(description);
        }
        console.log(documents)
    return (
        <div className="docPage">
                <h1>Home</h1>
                <hr></hr>
                <div className="form">
                {documents
                    .map((documents) => ( 
                        <div key={documents.id}>
                            <div className="newsBox">
                                <div>
                                    <b>{documents.topic}</b><br></br>
                                    <div className="spanDate">
                                        <span>by {documents.email}</span>
                                        <span>{documents.dateModified}</span>
                                    </div>
                                </div>
                                <br></br>
                                <div>
                                    <p>{documents.description}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
    )
}

export default Home