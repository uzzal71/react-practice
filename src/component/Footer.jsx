const Footer = () => {
    return (
        <footer className="footer">
           <div className="left-area">
                <h2>Contact</h2>
                <ul className="box">
                    <li>132, Sidecup Lane</li>
                    <li>PS15 MA12, Bromly</li>
                    <li>London, UK</li>
                    <li>www.yourwebsite.com</li>
                    <li>01319630374</li>
                </ul>
           </div>

           <ul className="right-area">
                <li className="link-area">
                    <h2>Useful Link</h2>
                    <ul className="box h-box">
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Tickets</a></li>
                        <li><a href="#">Policy</a></li>
                        <li><a href="#">Terms</a></li>
                    </ul>
                </li>

                <li>
                    <h2>Recent Post</h2>
                    <ul className="box h-box">
                        <li><a href="#">Lorem ipsum dolor sit amet.</a></li>
                        <li><a href="#">Lorem ipsum dolor sit amet.</a></li>
                        <li><a href="#">Lorem ipsum dolor sit amet.</a></li>
                        <li><a href="#">Lorem ipsum dolor sit amet.</a></li>
                        <li><a href="#">Lorem ipsum dolor sit amet.</a></li>
                        <li><a href="#">Lorem ipsum dolor sit amet.</a></li>
                    </ul>
                </li>

                <li>
                    <h2>Newletter</h2>
                    <form action="#" className="form-search">
                        <div className="search-box">
                            <input type="text" name="" id=""/>
                            <button className="btn" type="submit">Search</button>
                        </div>
                    </form>

                    <div className="socials">
                        <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-dribbble"></i></a>
                        <a href="#"><i className="fa fa-youtube"></i></a>
                        <a href="#"><i className="fa fa-tumblr"></i></a>
                    </div>
                </li>
           </ul>

           <div className="footer-bottom">
            <img src="logo,ong" alt=""/>
            <p>All Right reserved</p>
           </div>
        </footer>
    );
};

export default Footer;