import React from "react";
import "./Quiz.css";
import { useState} from "react";
import { useNavigate } from "react-router-dom";
const questions = [
  {
    question: "Javascript is an _______ language? ",
    options: [
      "Object-Oriented",
      "Object-Based",
      "Assembly-language",
      "High-level",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Which of the following keywords is used to define a variable in Javascript?",
    options: ["var", "let", "Both A and B", "None of the above"],
    correctAnswer: 2,
  },
  {
    question:
      "Which of the following methods is used to access HTML elements using Javascript",
    options: [
      "GetElementById()",
      "GetElementsByClassName()",
      "Both A and B",
      "None of the above",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "Upon encountering empty statements, what does the Javascript Interpreter do?",
    options: [
      "Throws an error",
      "Ignore the statements",
      "Give a warning",
      "None of the above",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "Which of the following methods can be used to display data in some form using Javascript?",
    options: [
      "Document.write()",
      "Console.log()",
      "Windows.write()",
      "None of the above",
    ],
    correctAnswer: 3,
  },
];

const Questions = () => {
  
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [count, setCount] = useState(0);
  const [feedback, setFeedBack] = useState("")
  const navigate = useNavigate()

  const currentQuestion = questions[index];

  const PreviousQuestion = () => {
    setCorrect(null);
    setSelectedAnswer(null);
    setIndex(index - 1);
    setFeedBack("")
  };
  const nextQuestion = () => {
    if(index === questions.length - 1){
        navigate("/End", {state: {count: count}})
    } if(selectedAnswer === null){
        alert("Value can't be empty");
        
    } else{
    setSelectedAnswer(null);
    setCorrect(null);
    setIndex(index + 1)
    setFeedBack("")
    }
    ;
    
  };

  const checkAnswer = (selectedOption) => {
    setSelectedAnswer(selectedOption);
    const isCorrect = (selectedOption === currentQuestion.correctAnswer);
    setCorrect(isCorrect)
    setFeedBack(isCorrect ? "Correct!" : "Wrong!")
   
   
    if(isCorrect){
    setCount(count + 1)
    };
    console.log("Selected answer:", selectedOption, "is correct:", isCorrect);
  };

  return (
    <div className="quiz">
      <div className="question">
        <p>
          {index + 1}.{currentQuestion.question}
        </p>
      </div>
      <div>
        {currentQuestion.options &&
          currentQuestion.options.map((option, i) => (
            <button
              key={i}
             
              className={`option ${
                selectedAnswer === i ? (correct ? "correct" : "wrong") : null
              }`}
              onClick={() => checkAnswer(i)}
            
              disabled={selectedAnswer !== null}
              
            >
              {option}
            </button>
          ))}
      </div>
      <div className="feedback">
        {<p>{feedback}</p>}
      </div>
      <div className="btn">
        <button onClick={PreviousQuestion} disabled = {index === 0 || selectedAnswer === null}  >PREVIOUS</button>
        <button onClick={nextQuestion}  >{index === questions.length -1 ? "FINISH" : "NEXT" }</button>
      </div>
      <div>
        <span>
          {" "}
          <h2>{count} out of 5</h2>
        </span>
      </div>
    </div>
  );
};

export default Questions;
