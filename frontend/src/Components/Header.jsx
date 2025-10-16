import React from "react"
import {NavLink} from "react-router-dom"
import "./header.css"
const Header=()=>{
    return (
        <>
            <header>
                <nav>
                    <div className="left">
                        <h1>Canva Draw</h1>
                    </div>
                    <div className="right">
                        <ul>
                            <li>
                                <NavLink to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/login">
                                    Login
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to = "/Dashboard">
                                    Dashboard
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}
export default Header