
import React from 'react'
import { NavDropdown } from 'react-bootstrap'
import { Link, NavLink, useHistory } from 'react-router-dom'
import "./navbar.css"


const Navbar = ({user}) => {
  const history = useHistory();
  // const user = localStorage.getItem("user-login");
  const userIn = JSON.parse(localStorage.getItem('user-info'));

  function logout() {
    localStorage.clear();
    history.push('/login')
  }

  return (
    <>
      <section className="navbar-bg">
        <nav className="navbar navbar-expand-lg navbar-light  ">
          <div className="container">

            <Link className="logo " to="/">
              <h2>
                <span>L</span>okesh
                <span>A</span>pp
              </h2>
            </Link>


            <div
           
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                {
                  user ?
                    <>
                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          className="nav-link"
                          exact to="/todo"
                          activeStyle={{ color: 'blue', fontWeight: 'bold' }}>
                          Todos
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          className="nav-link"
                          exact to="/services"
                          activeStyle={{ color: 'blue', fontWeight: 'bold' }}>
                          Services
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          className="nav-link"
                          exact to="/update"
                          activeStyle={{ color: 'blue', fontWeight: 'bold' }}>
                          Update
                        </NavLink>
                      </li>

                      <li className="nav-item">
                        <NavDropdown title={userIn.name} >
                          <NavDropdown.Item>Profile</NavDropdown.Item>
                          <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>

                        </NavDropdown>
                      </li>

                    </>
                    :
                    <>
                    
                    <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          className="nav-link"
                          exact to="/todo"
                          activeStyle={{ color: 'blue', fontWeight: 'bold' }}>
                          Todos
                        </NavLink>
                      </li>
                      
                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          className="nav-link "
                          aria-current="page"
                          exact to="/"
                          activeStyle={{ color: 'blue', fontWeight: 'bold' }}>
                          Home
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          className="nav-link"
                          exact to="/about"
                          activeStyle={{ color: 'blue', fontWeight: 'bold' }}>
                          About
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          className="nav-link"
                          exact to="/contact"
                          activeStyle={{ color: 'blue', fontWeight: 'bold' }}>
                          Contact
                        </NavLink>
                      </li>

                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          className="nav-link"
                          exact to="/register"
                          activeStyle={{ color: 'blue', fontWeight: 'bold' }}>
                          Register
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          className="nav-link"
                          exact to="/login"
                          activeStyle={{ color: 'blue', fontWeight: 'bold' }}>
                          Log In
                        </NavLink>
                      </li>

                     
                    </>
                }

                {/* <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li> */}
                {/* <div className="social-links">

                  <Link to="/"><i className="fab fa-facebook-f"></i></Link>
                  <Link to="#"><i className="fab fa-twitter"></i></Link>
                  <Link to="#"><i className="fab fa-instagram"></i></Link>
                  <Link to="#"><i className="fab fa-linkedin-in"></i></Link>
                </div> */}
              </ul>


            </div>
          </div>
        </nav>
      </section>
    </>
  )
}

export default Navbar
