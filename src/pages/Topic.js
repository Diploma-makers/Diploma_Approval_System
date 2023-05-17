import React, { useState }from "react";
import { Button, Container, Table } from "react-bootstrap"
import {  useNavigate  } from "react-router-dom";
import Documents from "./Documents";
import { useLocation } from 'react-router-dom';



function Topic(props) {    
    let history = useNavigate()
    const location = useLocation();
    console.log("props :::: " + props)
    console.log("location :::: " + location)
    const data = location.state?.data;

    // const express = require('express');
    // const fileUpload = require('express-fileupload');
    // const fs = require('fs');
    // const { KEYUTIL, KJUR, hextob64u } = require('jsrsasign');
    
    // const app = express();
    // app.use(fileUpload());
    
    // // Handle file upload
    // app.post('/upload', (req, res) => {
    //   if (!req.files || !req.files.privateKey) {
    //     return res.status(400).send('No private key file uploaded');
    //   }
    
    //   // Read the uploaded private key file
    //   const privateKeyFile = req.files.privateKey;
    //   const privateKeyPEM = privateKeyFile.data.toString('utf8');
    
    //   // Convert the PEM private key to a KeyObject
    //   const privateKeyObj = KEYUTIL.getKey(privateKeyPEM);
    
    //   // Sign the P10 key or perform other operations as needed
    //   // ...
    
    //   res.send('Private key uploaded and processed successfully');
    // });
    
    // app.listen(3000, () => {
    //   console.log('Server started on port 3000');
    // });

    return (
    <div className="docPage">
        <h1>{data ? data.topic : "No Titile"}</h1>
        <hr></hr>
        <div>
            <h1> Descpiction </h1>
            <span>{data ? data.description : "No Description"}</span>
        </div>

        

        <Button variant="success" disabled>Submit</Button>{' '}
        <Button variant="secondary"  onClick={() => history(-1)}>Back</Button>
    </div>
  );
}

export default Topic;