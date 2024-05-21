import React from 'react'
import { useState} from 'react'
import { useNavigate, useLocation} from 'react-router-dom'
import "./Quiz.css";
import Questions from './Questions';

const End = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { count } = location.state;
    console.log("Score received in End component:", count);


    const submitHandler = () => {
        navigate("/Questions")
        
        
    }
  return (
    <div className='end'>
       <h2>Quiz is completed</h2>
       {location && <p>{count === 5 ? `Goodjob, You scored ${count} out of 5` : count === 0 ? "Please try again" : ` You scored ${count} out of 5 `}</p>}

       <div>
        <button onClick={submitHandler}>Restart Quiz</button>
       </div>
      
    </div>
  )
}

export default End
