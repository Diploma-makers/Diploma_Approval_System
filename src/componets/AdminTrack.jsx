import { auth, db } from '../Data/firebase';
import { getDocs, collection, getDoc, query, where } from "firebase/firestore";   
import { useEffect, useState, useContext } from "react"; 
import { Link } from 'react-router-dom'
import { BiSelectMultiple } from 'react-icons/bi'
import DocumentsSelected from '../pages/DoumentsSelected';

const TrackRole = () => {
// show || hide
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

    // collection
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
    const navShow = (role) => {
        if(role == "admin"){
            return(
                <Link to="/selected">
                    <BiSelectMultiple />
                    {showHome && (
                        <span>Selected</span>
                    )}
                </Link>
            )
        }   else {
        }
    }
    
    return (
        <>
            {navShow(currentRole)}
        </>
    )
}

export default TrackRole