import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid'
import FeedbackData from '../data/FeedBackData'

const FeedbackContext = createContext()


export const FeedbackProvider = ({ children }) => {

    const [feedback, setFeedback] = useState(FeedbackData)


    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    // add new feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    // Delete feedback
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => {
                return (
                    item.id !== id
                )
            }))
        }

    }


    // Update feedback item
    const updateFeedback = (id, updItem) => {
        setFeedback(
            feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
        )
    }

    // set item to be update
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback
    }} >
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext