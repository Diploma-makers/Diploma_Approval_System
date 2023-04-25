import logo from './logo.png'
import { Link } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'
import { AiFillCalendar } from 'react-icons/ai'
import { AiOutlineForm } from 'react-icons/ai'
import { RiDashboardFill } from 'react-icons/ri'
import { HiDocumentDuplicate } from 'react-icons/hi'

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
                    <Link to="/dashboard">
                        <RiDashboardFill />
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link to="/form">
                        <AiOutlineForm /> 
                        Form
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        <AiFillCalendar /> 
                        About us
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar