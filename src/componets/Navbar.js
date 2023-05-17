import logo from './logo.png'
import { Link } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'
import { AiFillCalendar } from 'react-icons/ai'
import { AiOutlineForm } from 'react-icons/ai'
import { RiDashboardFill } from 'react-icons/ri'
import { AiFillContacts } from 'react-icons/ai'
import { HiDocumentDuplicate } from 'react-icons/hi'
import TrackForm from './TrackForm'

const Navbar = () => {
    return (
        <div className={"sidenav"}>
            <img src={logo} alt='logo'
            className='logo' />
            <ul>
                <li>
                    <Link to="/" >
                        <AiFillHome /> 
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/calendar" >
                        <AiFillCalendar /> 
                        Calendar
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard">
                        <RiDashboardFill />
                        Dashboard
                    </Link>
                </li>
                <li>
                    
                    <TrackForm/>
                </li>
                <li>
                    <Link to="/about">
                        <AiFillContacts /> 
                        About us
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar