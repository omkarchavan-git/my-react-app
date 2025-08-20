import React, { useEffect, useState } from 'react'

function UseEffects() {

    const[counter, setCounter] = useState(0);

    useEffect( () => {
        document.title = counter;
        console.log("useEffect call")

    }, [counter]);                     // in this array whenever i pass counter in array so, whenever the counter value chang the useEffect will call


  return (
    <div>
        <h3>count : {counter} </h3>
      <button onClick={()=> setCounter(counter+1)}>Incerase</button>
    </div>
  )
}

export default UseEffects
