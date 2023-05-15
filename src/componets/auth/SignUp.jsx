import { createUserWithEmailAndPassword } from "firebase/auth"
import React, { useState } from 'react'
import { auth } from "../../Data/firebase"
import logo from "../logo.png"

const SignUp = (props) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    
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
                        <input id="radio-1" type="radio" name="radio" value="Student" ></input>
                        <label for="radio-1">Student</label>
                    </div>

                    <div class="form_radio_btn">
                        <input id="radio-2" type="radio" name="radio" value="Teacher"></input>
                        <label for="radio-2">Teacher</label>
                    </div>
                </div>
                <button type='submit'>Sign Up</button>
            <a className="lnk-btn" onClick={() => props.onFormSwitch('login')}>Already have an account?</a>
            </form>
        </div>
    )
}

export default SignUp