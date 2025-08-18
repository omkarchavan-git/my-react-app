const Counter = () => {

    let counter = 0;

    const increase = () =>{
        counter++;
        console.log("Counter ", counter)
    }

    const decrease = () =>{
        counter--;
        console.log("cpunter ", counter)
    }


    return (

        <div>
            <h3>Counter</h3>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
        </div>
    )
}

export default Counter