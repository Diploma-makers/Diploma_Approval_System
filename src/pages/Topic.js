import React, { useState }from "react";
import { Button, Container, Table } from "react-bootstrap"
import {  useNavigate  } from "react-router-dom";
import Documents from "./Documents";
import Popup from "../componets/Popup"
import { useLocation } from 'react-router-dom';



function Topic(props) {    
    let history = useNavigate()
    const location = useLocation();
    // console.log("props :::: " + props)
    // console.log("location :::: " + location)
    const data = location.state?.data;

    const [showPopup, setShowPopup] = useState(false);

    const handleOpenPopup = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
    <div className="docPage">
        <h1>{data ? data.topic : "No Titile"}</h1>
        <hr></hr>
        <div>
            <h1> Descpiction </h1>
            <div className="newsBox">
                <br></br>
                <div>
                    <p>{data ? data.description : "No Description"}</p>
                </div>
            </div>
        </div>
        

        <Button variant="success" onClick={handleOpenPopup}>Submit</Button>{' '}
        <Popup show={showPopup} handleClose={handleClosePopup}></Popup>
        <Button variant="secondary"  onClick={() => history(-1)}>Back</Button>
    </div>
  );
}

export default Topic;