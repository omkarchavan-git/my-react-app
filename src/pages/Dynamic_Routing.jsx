import { Link, useParams } from "react-router-dom"



function Dynamic_Routing() {

    // creating an array of course data
    const arr = [
        { id: 1, course_name: "java", price: 1234 },
        { id: 2, course_name: "Python", price: 1435 },
        { id: 3, course_name: "MERN", price: 12004 },
        { id: 4, course_name: "AI-ML", price: 12344 },
        { id: 5, course_name: "HTML", price: 9999 }

    ]
 
    return (
        <div>
            <h2>React Routing</h2>

            <ul>
                {arr.map((data) => <div key={data.id}>
                    <li>
                        <Link to={`/cources/${data.id}`}> {data.course_name} </Link>
                    </li>
                </div>)}
            </ul>

        </div>
    )
}

export default Dynamic_Routing

