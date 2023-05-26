import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Navbar from './componets/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard'
import Documents from './pages/Documents'
import Form from './pages/FormDoc'
import Topic from "./pages/Topic"
import Profile from "./pages/Profile"
import CalendarApp from "./pages/Calendar"
import DocumentsTeacher from './pages/DocumentsTeacher';
import { Link } from 'react-router-dom'
import { BsFillPersonFill } from 'react-icons/bs'
import TrackRole from './componets/TrackRole';
import './App.css';
import TrackForm from './componets/TrackForm';
import FormDoc from './pages/FormDoc';
import DocumentsSelected from './pages/DoumentsSelected';

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
              <Route path='/calendar'  element={<CalendarApp />} exact/>
              <Route path='/dashboard'  element={<Dashboard />}/>
              <Route path='/dashboard/documents'  element={<TrackRole />}/>
              <Route path='/selected'  element={<DocumentsSelected />}/>
              <Route path='/form'  element={<FormDoc />}/>
              <Route path='/topic' element={<Topic />}/>
              <Route path='/profile' element={<Profile />}/>
            </Routes>
          </div>
        </div>
       </Router>
    </>
  )
}

export default Main;
