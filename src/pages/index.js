import React from "react"
import { Link } from 'gatsby'
import Header from '../components/header'
import Footer from '../components/footer'



const index = () => {
  return (
    <div>
      <Header />
      <h1>
        Hello
      </h1>
      <h2>
        Gatsby.js test !!
      </h2>
      <p><Link to="/contact">Contact Me</Link></p>
      <Footer />
    </div>
  )
}

export default index