
import {Link} from "react-router-dom";


const Details = () => {
    return(
                <div className="details">
                    <div className="business-hours">
                        <img src="/logo.png" alt="logo" className="royal-logo"/>
                        <h2>Business hours</h2>
                        <p>Monday - Saturday</p>
                        <p>Opening 8:00 AM to 10:00 PM.</p>
                    </div>
        
                    <div className="quick-links">
                        <h2>Quick Links</h2>
                        <Link to="/About" className="about-link">About Us</Link>
                        <Link to="/services" className="services-link">Services</Link>
                        <Link to="/contact" className="contact-link">Contact Us</Link>
                        <Link to="/FAQ" className="faq-link">FAQ</Link>
                    </div>
        
                   <div className="many">
                    <div className="location">
                        <h2>Location</h2>
                        <p>We have branches countrywide:</p>
                        <ul>
                            <li>Nairobi</li>
                            <li>Mombasa</li>
                            <li>Eldoret</li>
                        </ul>
                    </div>
                    <div className="social-media">
                        <h2>Social Media</h2>
                        <p>Follow us on social media platforms.</p>
                        <div className="icons">
                            <a href="https://www.fb.com/l/6lp1kJRRR" target="_blank" rel="noopener noreferrer">
                        <img src ="/facebook.jpeg" alt="facebook" className="platform"/>
                        </a>
                        <a href="https://www.instagram.com/nanashievan?igsh=MW01ZGVscGg0M2RyOA==" target="_blank" rel="noopener noreferrer">
                        <img src="/instagram.png" alt = "instagram" className="platform"/>
                        </a>
                        <img src="twitter.png" alt="twitter" className="platform"/>
                        <a href="https://www.tiktok.com/@nana_marther?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer">
                        <img src="tiktok.png" alt="tiktok" className="platform"/>
                        </a>
                        <a href=" https://whatsapp.com/dl/ "target="_blank" rel="noopener noreferrer">
                        <img src="whatsapp.jpeg" alt="whatsapp" className="platform"/>
                        </a>
                        </div>
                    </div>
                    </div>
        
                    <div className="newsletter">
                        <h2>Newsletter</h2>
                        <form className="newsletter-form">
                            <p>Subscribe to our newsletter today!</p>
                            <p>Get the latest updates and offers.</p>
                            <input type="text" placeholder="Name" className="text-input"/>
                            <input type="email" placeholder="Email" />
                            <input type="submit" value="Subscribe" />
                        </form>
                    </div>
                </div>
            );
        };
    


        
 export default Details;
        
        

/*

        <div className="footer">
            <div className="business-hours">
                <img src ="/logo.png" alt = "logo" className="logo"></img>
                <h2>Business hours</h2>
                <p>monday - friday</p>
                <p>opening 8:00 am to 10:00 pm</p>
            </div>
            <div className="quick-links">
                <h2>Quick links</h2>
                <a href= "about.html">About us</a>
                <a href = "services.html">Services</a>
                <a href= "FAQ.html">FAQ</a>
    
            </div>
            <div className="location">
                <h2>Location</h2>
                <p>We have branches country wide</p>
                <p>Nairobi</p>
                <p>Mombasa</p>
                <p>Eldoret</p>
            </div>
            <div className="newsletter">
                <h2>Newsletter</h2>
                <form className="newsletter-form">
                    <p>Subscribe to our newsletter</p>
                    <input type= "text" placeholder="Name">Name</input>
                    <input type= "email" placeholder="Email">Email</input>
                    <input type= "submit" value = "subscribe">Subscribe</input>
                </form>
            </div>
        </div>
    );
}
export default Details;
*/