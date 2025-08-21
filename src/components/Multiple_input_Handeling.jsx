import React from 'react'
import { useState } from 'react'

const  Multiple_input_Handeling = () => {


    const [fromData, setFromData] = useState({
        name: '',
        email: '',
        pass: '',
        city: '',

    })

    const onChange = (e) => {
        const{name, value} = e.target
        setFromData({...fromData, [name] : value})
    }

    const submitHandler = (e) => {
        e.preventDefault();
        alert("Yor data submitted")
        console.log(fromData)
    }

    return (
        <div>
            <h3>  Multiple input handeling </h3>
            <form  onSubmit={submitHandler}>

                <div>
                    Name :- <input value={fromData.name} onChange={onChange} type="text" name='name' />
                </div>
                <div>
                    Email :- < input value={fromData.email}  onChange={onChange} type="text" name='email' />
                </div>
                <div>
                    Pass :- <input value={fromData.pass} onChange={onChange} type="password" name='pass' />
                </div>
                <div>
                    City :- <input value={fromData.city} onChange={onChange} type="text" name='city' />
                </div>
                <button type="submit"  style={{ margin: '10px' }}> Submit </button>
            </form>
        </div>
    )
}

export default Multiple_input_Handeling
