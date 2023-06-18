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
                        <li><i class="fa-solid fa-home"></i> <a href="home">Home</a></li>
                        <li><i class="fa-solid fa-user"></i> <a href="about">About</a></li>
                        <li><i class="fa-solid fa-pizza-slice"></i> <a href="dishes">Dishes</a></li>
                        <li><i class="fa-brands fa-blogger-b"></i> <a href="blog">Blog</a></li>
                        <li><i class="fa-solid fa-user"></i> <a href="contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer_box contact">
                    <h3>Contact</h3>
                    <li><i class="fa-solid fa-location-dot"></i> Head Office : srisampat building,kavuri hills, Madhapur Pin - 500033 </li>
                    <li><i class="fa-solid fa-phone"></i> Telephone : <a href="tel:+91 9876543210">+91 98765-43210</a></li>
                    <li> <i class="fa-solid fa-envelope"></i> E-mail : <a href="mailto:help@gmail.com">support@gmail.com</a></li>
                    <div className="social_links">
                        <a href=""><i class="fa-brands fa-facebook"></i></a>
                        <a href=""><i class="fa-brands fa-instagram"></i></a>
                        <a href=""><i class="fa-brands fa-twitter"></i></a>
                        <a href=""><i class="fa-brands fa-google-plus"></i></a>
                        <a href=""><i class="fa-brands fa-github"></i></a>
                    </div>
                </div>
            </footer>
            <div className="copyright"> &copy; copyright {year} || Made With 💘 HK </div>
        </>
    )
}

export default FooterPage
