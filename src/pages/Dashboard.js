import { Button, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import Documents from "./Documents"

const Dashboard = () => {
    return (
        <div className="docPage">
            <h1>Dashboard</h1>
            <hr></hr>
                <div className="dashBoard">
                    <Link to="documents"><button className="dashButton"> Software Engineering</button></Link>
                    <Link to="documents"><button className="dashButton"> Computer Science</button></Link>
                    <Link to="documents"><button className="dashButton" variant="dark"> Big Data Analysis</button></Link>
                </div>
                <div className="dashBoard">
                    <Link to="documents"><button className="dashButton"> Media Technologies</button></Link>
                    <Link to="documents"><button className="dashButton"> Cybersecurity</button></Link>
                    <Link to="documents"><button className="dashButton"> Smart Technologies</button></Link>
                </div>
        </div>
    )
}

export default Dashboard