import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div className='my-5'>
            <button type="button" className="btn btn-warning btn-lg"><Link to="/" className="text-decoration-none text-dark fw-bold">Go to Home</Link></button>
            <button type="button" className="btn btn-success btn-lg"><Link to="/add" className="text-decoration-none text-dark fw-bold">Add a vechile</Link></button>
            <button type="button" className="btn btn-danger btn-lg"><Link to="/view" className="text-decoration-none text-dark fw-bold">View Vechiles</Link> </button>
        </div>
    )
}

export default Home