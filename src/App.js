import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Navbar from './componets/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard'
import Documents from './pages/Documents'
import Form from './pages/Form'
import Topic from "./pages/Topic"
import './App.css';

function App() {
  return (
    <>
      <Router>
        <header>

        </header>
        <div className='main'>
          <Navbar/>
          <div className='rightbody'>
            <Routes>
              <Route path='/'  element={<Home />}/>
              <Route path='/about'  element={<About />} exact/>
              <Route path='/dashboard'  element={<Dashboard />}/>
              <Route path='/dashboard/documents'  element={<Documents />}/>
              <Route path='/form'  element={<Form />}/>
              <Route path='/dashboard/documents/topic' element={<Topic />}/>
            </Routes>
          </div>
        </div>
       </Router>
    </>
  )
}

export default App;
