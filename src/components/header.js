import React from 'react'
import { Link } from 'gatsby'

const Header = () =>{
    return (
        <div>
            <header>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/blog">Blog</Link>
            </header>
        </div>
    )
}

export default Header