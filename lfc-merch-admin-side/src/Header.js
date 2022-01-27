import React from "react";
import {Link} from 'react-router-dom'
import './Header.css'

const Header = () => 
{
    return(
        //<nav className={cheader ? "cheader active navbar navbar-expand-md" : "cheader navbar navbar-expand-md"}>
        <nav className={"navbar navbar-expand-lg"}>

            <Link className="navbar-brand" to='/'>
                {/* <h2>Logo</h2> */}
                <img src="assets/images/l-logo.jpg" alt='Logo' />
            </Link>

            <button className="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#main-navigation">
                <i className="fas fa-bars"></i>
            </button>
                    
            <div className="collapse navbar-collapse" id="main-navigation">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to='/'><h2>Home</h2></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to = '/about'><h2>About</h2></Link>
                    </li>
                    {/* <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" 
                        id="navbarDropdown" role="button" data-bs-toggle="dropdown" 
                        aria-expanded="false" style={{
                          fontSize:"28px"  
                        }}>
                            Dropdown
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" >Action</a></li>
                            <li><a className="dropdown-item" >Another action</a></li>
                            <li><hr className="dropdown-divider" ></hr></li>
                            <li><a className="dropdown-item">Logout</a></li>
                        </ul>
                    </li> */}
                </ul>
            </div>
        </nav>
    )
}

export default Header