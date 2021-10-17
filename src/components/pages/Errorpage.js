import React from 'react'
import { NavLink } from 'react-router-dom'


const Errorpage = () => {
    const mystyle = {
        fontWeight: 500,
        fontSize: '16px',
        letterSpacing: '1px',
        display: 'inline-block',
        padding: '10px 30px',
        borderRadius: '50px',
        transition: '0.5s',
        color: 'blue',
        border: '2px solid blue',
        textDecoration: 'none',

    }


    return (
        <>
            
           
            <div className="main">

                <div className="notfound" id="notfount">
                    <div className="notfound-404">
                        <h1 style={{ fontSize: 50 }}>404</h1>
                    </div>
                    <h2 style={{ fontSize: 30, color:'blue' }}>We are sorry, page not found!</h2>
                    <p style={{ fontSize: 20 }} className="mb-5">
                        The page you are looking for might have been
                        removed or is temporarily unavailable.
                    </p>
                    <NavLink className="btnA" style={mystyle} to="/"> Back To Homepage</NavLink>
                </div>

              
            </div>
        </>
    )
}

export default Errorpage
