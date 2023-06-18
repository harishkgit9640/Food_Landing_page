import React from 'react'
import './home.css';
import Navbar from '../Navbar/Navbar'
import FooterPage from '../Footer/FooterPage';

export const Home = () => {
    return (
        <>
            <div className="main_container">
                <Navbar />
                <div className="content_box">
                    <h2 className='heading'>branch</h2>
                    <h3 className='sub_heading'>full website</h3>
                    <button className='btn'>Read More</button>
                </div>
            </div>
            <FooterPage />
        </>
    )
}
