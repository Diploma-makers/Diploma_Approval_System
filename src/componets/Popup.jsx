import React, { useState } from 'react';
import { Button } from "react-bootstrap"
import sjcl from 'sjcl';
import { db } from "../Data/firebase"
import fs from "fs"

const Popup = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  const [certtificate, setCerttificate] = useState(null) 
  const [password, setPassword] = useState("")
  const [mail1, setMail1] = useState("")
  const [mail2, setMail2] = useState("")
  
  // const fs = require('fs')

  // const handlePopupSubmit = () => {
  //   const encryptedPrivateKey = fs.readFileSync(certtificate);
  //   const decryptionPassword = password;
  //   const derivedKey = crypto.scryptSync(decryptionPassword, 'salt', 32);
  //   const decipher = crypto.createDecipher('aes-256-cbc', derivedKey);
  //   const decryptedPrivateKey = sjcl.decrypt(decryptionPassword, encryptedPrivateKey);
      
  //   const userID = keyData.user_id;

      
  //   const selectedTopicsRef = db.collection('selectedTopics');
  //   const usersRef = db.collection('users');
  //   const query1 = usersRef.where(usersRef.ID, '==', UserID);
  //   const query2 = usersRef.where(usersRef.email, '==', mail1);
  //   const query3 = usersRef.where(usersRef.email, '==', mail2);

  //   const st = query1.get(name + " " + surname);
  //   const nd = query2.get(name + " " + surname);
  //   const rd = query3.get(name + " " + surname);

  //   selectedTopicsRef.add({
  //      student1: st,
  //      student2: nd,
  //      student3: rd
          
      
  //   })
  //     .then(() => {
  //       console.log('User ID submitted to selectedTopics collection.');
  //     })
  // // };
  //     .catch((error) => {
  //       console.error('Error submitting user ID to selectedTopics collection:', error);
        
  //     });
  // };

  // console.log(certtificate)

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <div className='box'>
          <form>
            <div >
            <label class="input-file">
                <span class="input-file-text" type="text"></span>
                <input 
                    type="file" 
                    required="required"
                    
                    onChange={(e) => setCerttificate(e.target.files[0])}
                ></input>
                <span class="input-file-btn">Certtificate</span>
            </label>
            </div>
            <div className="inputBox">
                <input 
                    required="required"
                    type="text" 
                    value={mail1}
                    onChange={(e) => setMail1(e.target.value)}
                ></input>
                <span>Team member 1</span>
                <i></i>
            </div>
            <div className="inputBox">
                <input 
                    required="required"
                    type="text" 
                    value={mail2}
                    onChange={(e) => setMail2(e.target.value)}
                ></input>
                <span>Team member 2</span>
                <i></i>
                <span>Member1</span>
                <i></i>
            </div>
            <div className="inputBox">
                <input 
                    required="required"
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                ></input>
                <span>Password</span>
                <i></i>
            </div>
            <br></br>
            <Button variant="success" 
              // onClick={handlePopupSubmit}
            >Submit</Button>
            <br></br>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Popup;
