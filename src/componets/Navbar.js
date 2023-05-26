import logo from './logo.png'
import { Link } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'
import { AiFillCalendar } from 'react-icons/ai'
import { AiOutlineForm } from 'react-icons/ai'
import { RiDashboardFill } from 'react-icons/ri'
import { AiFillContacts } from 'react-icons/ai'
import { HiDocumentDuplicate } from 'react-icons/hi'
import AdminTrack from "./AdminTrack"
import React, { useEffect, useState } from 'react';
import TrackForm from './TrackForm'

const Navbar = () => {
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
    return (
        <div className={"sidenav"}>
            {showHome && (
                <img src={logo} alt='logo'
                className='logo' />
            )}
            <ul>
                <li>
                    <Link to="/">
                        <AiFillHome />
                        {showHome && (
                            <span>Home</span>
                        )}
                    </Link>
                </li>
                <li>
                    <Link to="/calendar" >
                        <AiFillCalendar /> 
                        {showHome && (
                            <span>Calendar</span>
                        )}
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard">
                        <RiDashboardFill />
                        {showHome && (
                            <span>Dashboard</span>
                        )}
                    </Link>
                </li>
                <li>
                    <TrackForm/>
                </li>
                <li>
                    <AdminTrack/>
                </li>
                <li>
                    <Link to="/about">
                        <AiFillContacts /> 
                        {showHome && (
                            <span>About us</span>
                        )}
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar