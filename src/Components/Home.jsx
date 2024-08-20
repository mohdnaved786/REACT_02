import React from 'react'
import Products from './Products'

const Home = () => {
    return (
        <div className='hero'>
            <div className="card text-bg-dark border-0">
                <img src="https://img.freepik.com/free-photo/expressive-young-lady-posing-studio_176474-74130.jpg?t=st=1714212231~exp=1714215831~hmac=1fa434b83ceef04718a2a5fc0893fc63b8cf562db3614e731a3dc1a73a0549ae&w=740" className="card-img" alt="bg-img" height="550px" />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                        <h5 className="card-title text-uppercase display-3 fw-bolder mb-0">New Sessions Arrival</h5>
                        <p className="card-text lead fs-2 text-uppercase">check out all the trends</p>
                    </div>
                </div>
            </div>
            <Products />
        </div>
    )
}

export default Home