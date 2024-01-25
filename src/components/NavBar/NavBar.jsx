import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <header>

        <Link to="/">
        <h1>La cocina de Jesi</h1>
        </Link>
        
        <nav>
            <ul>

                <li>
                  <NavLink to="/categoria/1">
                    Pastas Rellenas
                  </NavLink>
                 </li>

                 <li>
                  <NavLink to="/categoria/2">
                    Pastas Frescas
                  </NavLink>
                 </li>

                 <li>
                  <NavLink to="/categoria/3">
                    Salsas
                  </NavLink>
                 </li>

            </ul>
        </nav>
    
    <CartWidget/>
    </header>

    
  )
}

export default NavBar