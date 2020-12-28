import React from 'react'
import { Link } from 'gatsby'
import Header from '../components/header'
import Footer from '../components/footer'


const about = () => {
    return (
        <div>
            <Header />
            <h1>
                About
            </h1>
            <p>
                Hi <br></br>
                <Link to="/contact">Contact Me</Link>
            </p>
            <Footer />
        </div>
    )
}
export default about