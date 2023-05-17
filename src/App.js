import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut  } from 'firebase/auth';
import { auth } from './Data/firebase';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Navbar from './componets/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard'
import Documents from './pages/Documents'
import Form from './pages/FormDoc'
import Topic from "./pages/Topic"
import Profile from "./pages/Profile"
import { Link } from 'react-router-dom'
import { BsFillPersonFill } from 'react-icons/bs'
import Main from "./Main"
import SignIn from './componets/auth/SignIn';
import SignUp from './componets/auth/SignUp';
import AuthDetails from './componets/auth/AuthDetails';
import Answers from './Data/Answers';
import './App.css';

function App(props) {
  const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if(user) {
                setAuthUser(user)
            } else {
                setAuthUser(null);
            }
        });
        return () => {
            listen();
        }
    }, []);

    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log('sign out successful')
        }).catch(error => console.log(error))
    }

  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <div>
        <div>
          {authUser 
          ? <>
              <Main/>
            </> 
          : <>
              <div className='appMain'>
                {
                  currentForm === "login" ? <SignIn onFormSwitch={toggleForm} /> : <SignUp onFormSwitch={toggleForm} />
                }
              </div>
            </>} 
        </div>
    </div>
  );
}

export default App;
