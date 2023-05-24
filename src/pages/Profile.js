import { BsPersonCircle } from 'react-icons/bs'
import { Button, Container, Table, FloatingLabel } from "react-bootstrap"
import Form from 'react-bootstrap/Form';
import AuthDetails from '../componets/auth/AuthDetails';
import { auth, db } from '../Data/firebase';
import { getDocs, collection, getDoc, query, where } from "firebase/firestore";   
import { useEffect, useState, useContext } from "react"; 

const Profile = () => {
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
    console.log(users.map((users) => ( users.role)))

    const currentRole = users.map((users) => ( users.role))
    const teamShow = (currentRole) => {
        if(currentRole == "Student"){
            return (
                <Form className='infoPro'>
                    <h3>Team members</h3>
                    <Form.Group>
                        <BsPersonCircle className='logoMem'/>
                        <BsPersonCircle className='logoMem'/>
                    </Form.Group>
                </Form>
            )
        }
    }

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
                        <Form.Group>Fullname:
                            <h6>{users.map((users) => ( users.name))} {users.map((users) => ( users.surname))}</h6>
                        </Form.Group>
                        <Form.Group>Group:
                            <h6>{users.map((users) => ( users.group).toUpperCase())}</h6></Form.Group>
                        <Form.Group>Topic:
                            <h6>{users.map((users) => ( users.topic).toUpperCase())}</h6></Form.Group>
                    </Form>
                    {
                        teamShow(currentRole)
                    }
                   
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