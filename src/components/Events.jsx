import react from 'react'

const Events = () => {
    const alertButton = () => {
        alert("Hello")
    }


    // call back function   ---> this function allow us to pass the argument first and then call the function

    const callBack = (a) => {
        alert(a + 10)
    }

    return (
        <div>
            <h1>use state </h1>

            {/* calling normal function */}
            <button onClick={alertButton}> click </button>

            {/* calling call back function */}
            <button onClick={() => callBack(10)}> call back function </button>

        </div>
    )
}




export default Events