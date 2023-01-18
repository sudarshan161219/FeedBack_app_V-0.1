import React, { useContext } from "react";
import { FeedBackItem } from "./index";
import Loading from "./assets/Loading";
import propTypes from "prop-types";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackList = () => {
  const { feedback, isLoading } = useContext(FeedbackContext);

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>no feedback yet!</p>;
  }

  return isLoading ? <Loading /> : (

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

  )



  
};

FeedbackList.propTypes = {
  feedback: propTypes.array,
};

export default FeedbackList;
