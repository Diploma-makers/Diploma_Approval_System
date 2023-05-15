import { signInWithEmailAndPassword } from "firebase/auth"
import React, { useState } from 'react'
import { auth } from "../../Data/firebase"
import logo from "../logo.png"

const SignIn = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
            })
            .catch((error) => {
                console.log(error);
            });
    };
        
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <>
        <div className='box'>
            <img src={logo} alt='logo'
            className='logo' />
            <form onSubmit={signIn} action>
            <br></br>
                
                <h2>Log In</h2>
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
                <button type='submit'>Log In</button>
                <a className="lnk-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? </a>
                
                </form>
            
        </div>
        
        </>
    )
}

export default SignIn