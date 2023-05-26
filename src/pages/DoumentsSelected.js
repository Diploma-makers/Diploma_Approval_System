import { Button, Form, Table } from "react-bootstrap"
import InputGroup from 'react-bootstrap/InputGroup';
import { useEffect, useState } from "react"; 
import { Link } from "react-router-dom";
import { AiOutlineSearch } from 'react-icons/ai'
import { getDocs, collection, query, where  } from "firebase/firestore";
import '../App.css';
import { auth,db } from '../Data/firebase';
import AuthDetails from '../componets/auth/AuthDetails';

  
function DocumentsSelected () {     
    
  const [member1, setMember1] = useState("")
  const [member2, setMember2] = useState("")

// Collection
    const collection_doc = "selectedTopics"
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
      const [supervisor, setSupervisor] = useState('');
// Props
      useEffect(() => {
        findAll().then((data) => setDocuments(data));
      }, []);

        const handleClick = (topic, description) => {
            setTopic(topic);
        }

//User data
    const [user, setUser] = useState(null);

    const findByUid = () => {
        const collectionRef = collection(db, "users");
        const queryRef = query(collectionRef, where("uid", "==", auth.currentUser.uid));
      
        return getDocs(queryRef).then((querySnapshot) => {
          const res = [];
      
          querySnapshot.forEach((users) => {
            res.push({
              uid: users.uid,
              ...users.data()
            });
          });
      
          return res;
        }).catch((error) => {
          console.error('Error occurred:', error);
          return [];
        });
      };
      
      const [users, setUsers] = useState([]);

    useEffect(() => {
    findByUid().then((data) => setUsers(data));
    }, []);
        
    return(
        <div className="docPage">
            <h1>Selected Documents</h1>
            <hr></hr>
            <div className="formHome">
                <Form className="m-3">
                    <InputGroup className="my-3">
                        <h4><AiOutlineSearch className="search"/></h4>
                        <Form.Control onChange={(e) => setSearch(e.target.value.toLowerCase())} placeholder='Search' />
                    </InputGroup> 
                </Form>
                <Table>
                    <thead className="tableHead">
                        <tr>
                            <th>Topic title</th>
                            <th>Supervisor</th>
                            <th>Members</th>
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
                                    value={documents.supervisor}
                                    onChange={(e) => setSupervisor(e.target.value)}
                                    readonly></input>
                                </td>
                                <td className="tdbor ">
                                    <input className="noInput mWidth"  
                                    value={documents.student2 ? documents.student1 + " and " + documents.student2 : documents.student1}
                                    onChange={(e) => setMember1(e.target.value)}
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


export default DocumentsSelected