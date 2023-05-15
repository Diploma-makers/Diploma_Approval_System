import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Navbar from './componets/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard'
import Documents from './pages/Documents'
import Form from './pages/Form'
import Topic from "./pages/Topic"
import Profile from "./pages/Profile"
import { Link } from 'react-router-dom'
import { BsFillPersonFill } from 'react-icons/bs'
import './App.css';

function Main() {
  return (
    <>
      <Router>
        <header>  
            <div className='profile'>
              <Link to="/profile"> <BsFillPersonFill /> </Link>
            </div>
        </header>
        <div className='main'>
          <Navbar/>
          <div className='rightbody'>
            <Routes>
               <Route path='/'  element={<Home/>}/>
              <Route path='/about'  element={<About />} exact/>
              <Route path='/dashboard'  element={<Dashboard />}/>
              <Route path='/dashboard/documents'  element={<Documents />}/>
              <Route path='/form'  element={<Form />}/>
              <Route path='/dashboard/documents/topic' element={<Topic />}/>
              <Route path='/profile' element={<Profile />}/>
            </Routes>
          </div>
        </div>
       </Router>
    </>
  )
}

export default Main;
