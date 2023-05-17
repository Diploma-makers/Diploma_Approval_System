import { auth, db } from '../Data/firebase';
import { getDocs, collection, getDoc, query, where } from "firebase/firestore";   
import { useEffect, useState, useContext } from "react"; 
import Documents from '../pages/Documents';
import DocumentsTeacher from '../pages/DocumentsTeacher';

const TrackRole = () => {
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
            return <Documents/>
        }else{
            return <DocumentsTeacher/>
        }
    }
    
    return (
        <>
            {docShow(currentRole)}
        </>
    )
}

export default TrackRole