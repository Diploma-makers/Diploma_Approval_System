import React from 'react'
import { auth, db } from '../Data/firebase';
import { getDocs, collection, getDoc, query, where } from "firebase/firestore";   
import { useEffect, useState, useContext } from "react"; 
import FormDoc from '../pages/FormDoc';
import { AiOutlineForm } from 'react-icons/ai'
import { Link } from 'react-router-dom'


const TrackForm = () => {
  const [showHome, setShowHome] = useState(false);

    useEffect(() => {
        const handleResize = () => {
        setShowHome(window.innerWidth > 700);
        };
        handleResize();

        window.addEventListener('resize', handleResize);
        
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

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
    const currentRole = users.map((users) => ( users.role));
    console.log(currentRole)
    const docShow = (role) => {
        if(role == "Student"){
            return(
                <Link to="/form">
                    <AiOutlineForm /> 
                        {showHome && (
                            <span>Form</span>
                        )}
                    
                </Link>
            )
            
        }else{
            return 
        }
    }
  return (
    <>
        {docShow(currentRole)}
    </>
  )
}

export default TrackForm