import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className="container">
                <nav id='navbar'>
                    <div className="brand"><a href="/">Crunchy</a></div>
                    <ul>
                        <li><a className='active' href="home">Home</a></li>
                        <li><a href="about">About</a></li>
                        <li><a href="dishes">Dishes</a></li>
                        <li><a href="blog">Blog</a></li>
                        <li><a href="contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar
