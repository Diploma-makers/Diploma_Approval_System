import { collection, addDoc } from "firebase/firestore";
import {db} from '../firebase';
   
const addTodo = async (e) => {
    e.preventDefault();  
    
    try {
        const docRef = await addDoc(collection(db, "todos"), {
            todo: todo,    
        });
        console.log("Document written with ID: ", docRef.id);
        } catch (e) {
        console.error("Error adding document: ", e);
        }
}

const [todos, setTodos] = useState([]);
 
const fetchPost = async () => {
   
    await getDocs(collection(db, "todos"))
        .then((querySnapshot)=>{               
            const newData = querySnapshot.docs
                .map((doc) => ({...doc.data(), id:doc.id }));
            setTodos(newData);                
            console.log(todos, newData);
        })
   
}

useEffect(()=>{
    fetchPost();
}, [])