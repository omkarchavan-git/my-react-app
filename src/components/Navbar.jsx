import { Link } from "react-router-dom"
import './Navbar.css'

const Navbar = () => {

    return (
        <>
            <div className="navbar_container">

                <h3>Logo</h3>

                <div className="nav">
                    <Link to={'/about'} >About</Link>
                    <Link to={'/cources'} >Cources</Link>
                    <Link to={''} >Contact</Link>
                    <Link to={''} >Search</Link>
                </div>

            </div>
        </>
    )
}

export default Navbar