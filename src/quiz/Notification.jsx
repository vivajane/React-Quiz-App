import React from "react";
import "./Quiz.css"
import { useNavigate, useLocation } from "react-router-dom";

const Notification = () => {
  const { state } = useLocation();
  const Navigate = useNavigate();
  const onsubmitHandler = (e) => {
    e.preventDefault();

    Navigate("/Questions");
  };
  return (
    <div className="note">
      {state && (
        <p className="p">
          Thank you , {state.name}. Your quiz starts now. Press enter to begin
        </p>
      )}
      <div className="but">
        <button type="submit" onClick={onsubmitHandler}>
          ENTER
        </button>
      </div>
    </div>
  );
};

export default Notification;
