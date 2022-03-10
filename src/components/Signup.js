import React, { useState } from 'react'
import {collection , addDoc } from "firebase/firestore"
import { auth, db } from '../config/firebase'
import '../components/form.css'
import { createUserWithEmailAndPassword } from "firebase/auth"; 


const Signup = () => {
const dbRef = collection(db, "users")
const [firstname , setFirstName] = useState("")
const [lastname , setLastName] = useState("")
const [email , setEmail] = useState("")
const [password , setPassword] = useState("")
const [number , setNumber] = useState("")


const Signupbtn = () =>{
    console.log(firstname , lastname , password , email , number)
    const userobj = {
        firstname,
        lastname, 
        email, 
        number
    }
    createUserWithEmailAndPassword(auth, email, password)
    .then((user)=>{
        console.log(user.user.uid)
    })
    .catch((error)=>{
        console.log(error)
    })
    
}

  return (
    <div className='main-div'>
     <div className='center-div'>
     <input type="text" value={firstname} onChange={(e)=>setFirstName(e.target.value)} size='30' placeholder='First Name'/>
     <br />
      <input type="text" value={lastname} onChange={(e)=>setLastName(e.target.value)}  size='30' placeholder='Last Name' />
      <br />
      <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}   size='30' placeholder='Email'/>
      <br />
      <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}  size='30' placeholder='Password'/>
      <br />
      <input type="text" value={number} onChange={(e)=>setNumber(e.target.value)} size='30' placeholder='Number'/>
      <br />
      <button onClick={Signupbtn}>Sigup</button>
     </div>

    </div>
  )
}

export default Signup
