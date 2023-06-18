import React from 'react'

const FooterPage = () => {
    const year = new Date().getFullYear();
    return (
        <>
            <footer>
                <div className="footer_box company">
                    <h3>Company</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, veniam? Nulla fugiat iusto atque numquam quia possimus, nostrum deserunt nemo quaerat quam soluta? Odit odio veniam minus necessitatibus aliquid!</p>
                </div>
                <div className="footer_box useful_links">
                    <h3>Useful Links</h3>
                    <ul>
                        <li> <a href="home"> <i className="fa-solid fa-home"></i> Home</a></li>
                        <li> <a href="about"> <i className="fa-solid fa-user"></i> About</a></li>
                        <li> <a href="dishes"> <i className="fa-solid fa-pizza-slice"></i> Dishes</a></li>
                        <li> <a href="blog"> <i className="fa-brands fa-blogger-b"></i> Blog</a></li>
                        <li> <a href="contact"> <i className="fa-solid fa-user"></i> Contact</a></li>
                    </ul>
                </div>

                <div className="footer_box contact">
                    <h3>Contact</h3>
                    <li><i className="fa-solid fa-location-dot"></i> Head Office : srisampat building,kavuri hills, Madhapur Pin - 500033 </li>
                    <li><i className="fa-solid fa-phone"></i> Telephone : <a href="tel:+91 9876543210">+91 98765-43210</a></li>
                    <li> <i className="fa-solid fa-envelope"></i> E-mail : <a href="mailto:help@gmail.com">support@gmail.com</a></li>
                    <div className="social_links">
                        <a href=""><i className="fa-brands fa-facebook"></i></a>
                        <a href=""><i className="fa-brands fa-instagram"></i></a>
                        <a href=""><i className="fa-brands fa-twitter"></i></a>
                        <a href=""><i className="fa-brands fa-google-plus"></i></a>
                        <a href=""><i className="fa-brands fa-github"></i></a>
                    </div>
                </div>
            </footer>
            <div className="copyright"> &copy; copyright {year} || Made With 💘 HK </div>
        </>
    )
}

export default FooterPage
