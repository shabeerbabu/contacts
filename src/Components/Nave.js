import React from 'react'
import { Link } from 'react-router-dom'


function Nave() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand mx-5" to="/">
            Private Contact
          </Link>
       
            <ul className="navbar-nav mx-5">
              <li className="nav-item">
                <Link className="nav-link"  to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/fav">
                  Favourate
                </Link>
              </li>           
            </ul>
        
        </div>
      </nav>
    </div>
  )
}

export default Nave
