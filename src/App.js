import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import { Header, FeedbackList, FeedbackStats, FeedbackForm, AboutLInk } from './components'
import AboutPage from './pages/AboutPage'
import { FeedbackProvider } from './context/FeedbackContext'

const App = () => {


  return (
    < FeedbackProvider >
      <BrowserRouter>
        <Routes>

          <Route path='/' element={
            <>
              <Header />
              <div className="container">
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
                <AboutLInk />
              </div>
            </>

          } />


          <Route path='/about' element={<AboutPage />} />

        </Routes>
      </BrowserRouter>
    </FeedbackProvider>
  )
}                      
                             
export default App