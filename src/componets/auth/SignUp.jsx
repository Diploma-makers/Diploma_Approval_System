import { createUserWithEmailAndPassword } from "firebase/auth"
import React, { useState } from 'react'
import { auth, db } from "../../Data/firebase"
import logo from "../logo.png"
import { getFirestore, doc, setDoc, collection, addDoc } from "firebase/firestore"

 

const SignUp = (props) => {
    const [name, setName] = useState("")
    const [surname, setSurame] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("")
    const [group, setGroup] = useState("Teacher")
    const [topic, setTopic] = useState("")
    

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
            }).then(function () {
                var userId = auth.currentUser.uid;
                addDoc(collection(db, "users"), {
                    uid: userId,
                    name: name,
                    surname: surname,
                    email: email,
                    role: role,
                    group: group.toLowerCase(),
                    topic: ""
            }   
                )

                

            })
            .catch((error) => {
                console.log(error);
            });
    };

    const ifStudent = (role) => {
        if(role == "Student"){
            return(
                <>
                <div className="inputBox">
                    <input 
                        required="required"
                        type="text" 
                        value={group}
                        onChange={(e) => setGroup(e.target.value)}
                    ></input>
                    <span>Group</span>
                    <i></i>
                </div>
                </>
            )
        }
    }
    
    return (
        <div className='box'>
            <img src={logo} alt='logo'
            className='logo' />
            <form onSubmit={signUp}>
            <br></br>
                <h2>Create Account</h2>
                <div className="inputBox">
                    <input 
                        required="required"
                        type="text" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    ></input>
                    <span>Name</span>
                    <i></i>
                </div>
                <div className="inputBox">
                    <input 
                        required="required"
                        type="text" 
                        value={surname}
                        onChange={(e) => setSurame(e.target.value)}
                    ></input>
                    <span>Surname</span>
                    <i></i>
                </div>
                <div className="inputBox">
                    <input 
                        required="required"
                        type="text" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                    <span>Email</span>
                    <i></i>
                </div>
                <div className="inputBox">
                    <input 
                        required="required"
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                    <span>Password</span>
                    <i></i>
                </div>
                <div>
                    <br></br>
                    <div class="form_radio_btn">
                        <input id="radio-1" type="radio" name="radio" value="Student" 
                        onChange={(e) => setRole(e.target.value)}
                        ></input>
                        <label for="radio-1">Student</label>
                    </div>

                    <div class="form_radio_btn">
                        <input id="radio-2" type="radio" name="radio" value="Teacher" 
                        onChange={(e) => setRole(e.target.value)}></input>
                        <label for="radio-2">Teacher</label>
                    </div>
                    {
                        ifStudent(role)
                    }
                </div>
                <button type='submit'>Sign Up</button>
            <a className="lnk-btn" onClick={() => props.onFormSwitch('login')}>Already have an account?</a>
            </form>
        </div>
    )
}

export default SignUp