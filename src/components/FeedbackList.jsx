import React, { useContext } from "react";
import { FeedBackItem } from "./index";
import propTypes from "prop-types";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackList = () => {
  const { feedback } = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) {
    return <p>no feedback yet!</p>;
  }

  return (
    <div className='feedback-list'>
      {feedback.map((item, index) => {
        return (
          <FeedBackItem
            key={index}
            item={item}
          />
        );
      })}
    </div>
  );

};

FeedbackList.propTypes = {
  feedback: propTypes.array,
};

export default FeedbackList;
