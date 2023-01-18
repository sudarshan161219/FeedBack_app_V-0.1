import { createContext, useState, useEffect } from "react";
// import FeedbackData from '../data/FeedBackData'

const FeedbackContext = createContext()


export const FeedbackProvider = ({ children }) => {
    const [isLoading, setIsLoadind] = useState(true)

    // const [feedback, setFeedback] = useState(FeedbackData)
    const [feedback, setFeedback] = useState([])


    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    useEffect(() => {
        fetchFeedback()
    }, [])

    //Fetch feedback
    const fetchFeedback = async () => {
        const response = await fetch(`/feedback?_sort=id&_order=desc`)
        const data = await response.json()

        setFeedback(data)
        setIsLoadind(false)
    }

    // add new feedback
    const addFeedback = async (newFeedback) => {

        const response = await fetch('/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback)
        })


        const data = await response.json()

        // newFeedback.id = uuidv4()
        setFeedback([data, ...feedback])
    }

    // Delete feedback
    const deleteFeedback = async (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            await fetch(`/feedback/${id}`, {method: 'DELETE'})
            setFeedback(feedback.filter((item) => {
                return (
                    item.id !== id
                )
            }))
        }

    }


    // Update feedback item
    const updateFeedback = async (id, updItem) => {
        const response = await fetch(`/feedback/${id}`, {
            method : 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updItem)
        }) 

const data = await response.json()

        setFeedback(
            feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
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
        updateFeedback,
        isLoading
    }} >
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext