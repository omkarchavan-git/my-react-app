import { useState } from "react";

const Counter = () => {

    // use of useState

      const [counter, setCounter] = useState(100)



    

    const increase = () =>{
        setCounter++;
        console.log("Counter ", counter)
    }

    const decrease = () =>{
        counter--;
        console.log("cpunter ", counter)
    }


     


    return (

        <div>
            <h3>Counter : {counter}</h3>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
        </div>
    )
}

export default Counter