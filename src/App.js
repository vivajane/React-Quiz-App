
import './App.css';
import { Routes, Route } from "react-router-dom";
import Questions from "./quiz/Questions";
import Notification from "./quiz/Notification";
import End from "./quiz/End";
import Quiz from "./quiz/Quiz"

// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element= {<Quiz/>}/>
        <Route path="Questions" element= {<Questions/>}/>
        <Route path="Notification" element= {<Notification/>}/>
        <Route path="End" element= {<End/>}/>
      </Routes>

    </div>
  );
}

export default App;
