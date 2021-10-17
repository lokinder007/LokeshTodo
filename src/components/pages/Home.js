import React from 'react'
import { NavLink } from 'react-router-dom'

import imgB from "../images/C.png"


const Home = () => {
    return (
        <>
         
           <div className="main">
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className='row' >
                        <div className="col-10 mx-auto">
                            <div className="row ">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>
                                        We Welcome's You In
                                        <strong className="brand-name"> LokesApp</strong>
                                    </h1>
                                    <h2 className="my-3">
                                        Here You Can Find Many Services Which Will Make Your Life Easy & Happy 
                                    </h2>
                                    <div className="mt-3">
                                        <NavLink to="/services" className="btnA">
                                            Get Started
                                        </NavLink>
                                    </div>
                                </div>

                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img
                                        src={imgB}
                                        width='70%'
                                        // height="50%"
                                        className="img-fluid  animated"
                                        alt="home img"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </div>
        </>
    )
}

export default Home
