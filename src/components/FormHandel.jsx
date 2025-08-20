import { useState } from "react"

const FormHandel = () => {

   
        const [name, setName] = useState("")
        const [email, setEmail] = useState("")
        const [pass, setPass] = useState("")

        const handleSubmit = (e) => {
            e.preventDefault();
            alert("Your Data" + name + " " + email +" " + pass + " ")

            
            setName('')
            setEmail('')
            setPass('')
        
        } 



    return (
        <div>
            <div>From</div>

            <form action="" onSubmit={handleSubmit}>

                <div className='form'  >
                     <div style={{margin:'5px'}}>Name : {" "} <input  value={name} onChange={(e) => setName(e.target.value)} type='text'/>  </div>
                     <div style={{margin:'5px'}} >Email : {" "} <input value={email} onChange={(e) => setEmail(e.target.value)} type='text'/>  </div>
                     <div style={{margin:'5px'}}>Pass  : {" "} <input value={pass} onChange={(e) => setPass(e.target.value)} type='password'/>  </div>

                     <button type="submit" className='btn'>Submit</button>
                </div>


            </form>
        </div>
    )
}

export default FormHandel
