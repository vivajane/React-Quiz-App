import "./Quiz.css"
import React from 'react';
import { useState} from 'react';
import { useNavigate } from "react-router-dom";
import { useRef } from "react";



const Quiz = () => {
  const [form, setForm] = useState("");
  const nameRef = useRef()

  const navigate = useNavigate();

  const onSubmit = (e) => {
    if(!form){
      window.alert("Please input name");
    }
    e.preventDefault();
    navigate("/Notification", {state: {name: nameRef?.current?.value}})
    console.log(form)

  }
  return (
    <div className="container">
    <h1>Welcome to your Quiz Session</h1>

    <div className="btn-form">
      <form onSubmit={onSubmit}>
        <div>
        <label htmlFor="name">What's your name?</label>
        <input type="text" name="name" id="name" onChange={(e) => setForm(e.target.value)} value={form} ref={nameRef} />
        </div>
        <button type="submit">ENTER</button>
      </form>
    </div>
      
      
    </div>
  )
}

export default Quiz
