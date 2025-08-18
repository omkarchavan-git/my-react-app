import react from 'react'

const Events= () => {
    const alertButton =() => {
        alert("Hello")
    }
    return(
        <div>
            <h1>use state </h1>
            <button onClick={alertButton}> click </button>


        </div>
    )
}

export default Events