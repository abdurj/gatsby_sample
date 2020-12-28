import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'


const about = () => {
    return (
        <Layout>
            <h1>
                About
            </h1>
            <p>
                Hi <br></br>
                <Link to="/contact">Contact Me</Link>
            </p>
        </Layout>
    )
}
export default about