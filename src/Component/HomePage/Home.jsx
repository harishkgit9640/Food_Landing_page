import React from 'react'
import './home.css';
import Navbar from '../Navbar/Navbar'
import FooterPage from '../Footer/FooterPage';
import flavor from '../../image/sideImage1.jpg';
import Card from '../Card/Card';
import card from '../menu';
import EmailPage from '../Subscribe/EmailPage';
import Contact from '../Forms/Contact';

export const Home = () => {
    // const flavor = 
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
            {/* Flavor`s section */}
            <div className="flavor">
                <div className="flavor_content">
                    <h3>Indian Tranditional Flavor _</h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem id molestias recusandae, deserunt necessitatibus fuga ratione enim, omnis nemo, ipsam eos. Accusantium reprehenderit eius natus quisquam laudantium expedita quam officia cumque ullam fugit, perspiciatis maiores cupiditate impedit quaerat sit repellendus sint quidem. Aliquid, incidunt hic sunt deserunt ratione sint rerum sed doloremque, voluptate reprehenderit nihil facilis quis ipsam. Unde alias impedit modi vitae delectus, sed atque est temporibus molestiae quibusdam sapiente dolor, accusamus doloremque commodi maxime debitis hic odit aspernatur esse soluta tempore vero quos amet nobis. Repellat, perferendis vel. Sequi nobis ut laborum ab doloremque! Voluptates nobis nam accusantium.</div>
                <div className="flavor_img"><img src={flavor} alt="flavor_img" /></div>
            </div>
            {/* other  */}
            <div className="flavor_container">
            </div>
            {/* special test */}
            <div className="special_section" id="menu">
                <div className="special">
                    {
                        card.map((item) => {
                            return (
                                <div className="card_item" key={item.id}>
                                    <div className="special_card_body">
                                        <h4>{item.title}</h4>
                                        <p className="desc"> {item.description} </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            {/* background images */}
            <div className="image_container menu_section">
                <h2> Book Here </h2>
                <div className="booking_container">
                    <Contact />
                </div>
            </div>


            {/* Menu section  */}
            <div div className="menu_section" id="menu" >
                <h2> Our Menu`s</h2>
                <div className="menu_card">
                    <Card />
                </div>
            </div>

            {/* Footer section  */}

            <div className="footer_container menu_section">
                <h2> contact section </h2>
                <div className="contact_container">
                    <h1>Contact form  will be coming here...</h1>
                </div>
            </div>
            <div className="subscribe_us">
                <EmailPage />
            </div>
            < FooterPage />
        </>
    )
}
