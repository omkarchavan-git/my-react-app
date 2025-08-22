import React from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'

const Course_details = () => {

    const arr = [
        { id: 1, course_name: "java", price: 12099 },
        { id: 2, course_name: "Python", price: 1499 },
        { id: 3, course_name: "MERN", price: 12999 },
        { id: 4, course_name: "AI-ML", price: 14999 },
        { id: 5, course_name: "HTML", price: 9999 }

    ]

    const { id } = useParams()

    const course_details = arr.filter((data) => data.id == id)
    console.log(course_details)

    const location = useLocation();

    return (
        <>
            <div>

                <h3>Course id : {id} </h3>
                <h3>Course name : {course_details[0].course_name} </h3>

                {location.pathname != "/cources/1" && (               /*  if the condition URL matches then it will not show these details  */
                    <>
                        <h3>Course price : {course_details[0].price} </h3>
                    </>
                )}
            </div>
            <button type="button"> <Link to={'/cources'}>All Cources</Link> </button>
        </>
    )
}

export default Course_details
