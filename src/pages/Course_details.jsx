import React from 'react'
import { useParams } from 'react-router-dom'

const Course_details = () => {

      const arr = [
        { id: 1, course_name: "java", price: 1234 },
        { id: 2, course_name: "Python", price: 1435 },
        { id: 3, course_name: "MERN", price: 12004 },
        { id: 4, course_name: "AI-ML", price: 12344 },
        { id: 5, course_name: "HTML", price: 9999 }

    ]

    const {id} = useParams()

    const course_details = arr.filter( (data) => data.id == id)
    console.log(course_details)

    return(
        <>
            <div>

                <h3>Course id : {id} </h3>
            </div>
        </>
    )
}

export default Course_details
