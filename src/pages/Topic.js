import React from "react";
import { Button, Container, Table } from "react-bootstrap"
import Home from "./Home";
import Documents from "./Documents";
import {  useNavigate  } from "react-router-dom";

function Topic({title}) {
    let history = useNavigate()

    return (
    <div className="docPage">
        <h1>Title</h1>
        <hr></hr>
        <h1>Descpiction</h1>
        <Button variant="success" disabled>Submit</Button>{' '}
        {/* <Link to="/dashboard/documents"> */}
            <Button variant="secondary"  onClick={() => history(-1)}>Back</Button>
        {/* </Link> */}
        </div>
  );
}

export default Topic;