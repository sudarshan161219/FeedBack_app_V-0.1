import React, { useContext } from "react";
import { FaTimes, FaEdit } from "react-icons/fa";
import { Card } from "./shared/index";
import propTypes from "prop-types";
import FeedbackContext from "../context/FeedbackContext";

const FeedBackItem = ({ item }) => {
  const { deleteFeedback,   editFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className='close'>
        <FaTimes color='aliceblue' />
      </button>
      <button onClick={() =>   editFeedback(item)} className="edit">
        <FaEdit  color="purple" />
      </button>
      <div className='text-display'> {item.text} </div>
    </Card>
  );
};

FeedBackItem.prototypes = {
  item: propTypes.object.isRequired,
};

export default FeedBackItem;
