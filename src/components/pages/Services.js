import React from 'react'
import { Link } from 'react-router-dom'


const Services = () => {
    return (
        <>
          
            <div className="main">

                <h1 className="text-center text-success text-capitalize my-5"> Our Services</h1>

                <div className="container my-5">
                    <div className="row">
                        <div className="col">
                            <div className="card" >
                                <img src="https://picsum.photos/200" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to="#" className="btn btn-primary">Check Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card" >
                                <img src="https://picsum.photos/201" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to="#" className="btn btn-primary">Check Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card" >
                                <img src="https://picsum.photos/202" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to="#" className="btn btn-primary">Check Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Services
