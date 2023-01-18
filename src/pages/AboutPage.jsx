import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from '../components/shared'


const AboutPage = () => {
  return (
    <Card>
        <div className="about">
            <h1>About this Project</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum molestiae delectus corporis praesentium repudiandae ipsa ratione, qui modi nemo quos id consectetur culpa quidem fugit libero perspiciatis quia ab hic?</p>
         <Link to="/" ><p>Back to Home</p></Link>   
        </div>
    </Card>
  )
}

export default AboutPage