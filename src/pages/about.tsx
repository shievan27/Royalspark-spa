const About = () => {
    return(
        <div className="about-us-container">
            <h1 className="about-us">About Us</h1>
            <div className="who-section">
                <h2>Who we are</h2>
                <p>Welcome to Royalspark spa, a sanctuary of peace and wellness</p>
                <p>We specialize in providing luxurious spa experiences designed to rejuvenate your body, refresh your mind, and restore your inner balance.</p>
                </div>
                <div className="philosophy-section">
                    <h2>Our Philosophy</h2>
                    <p>At Royalspark spa, we believe in the power of touch and the importance of self-care.</p>
                    <p>Our philosophy is rooted in the idea that true beauty comes from within, and we are dedicated to helping you discover and nurture your inner radiance.</p>
                </div>
                <div className="choice-section">
                    <h2>Why choose us?</h2>
                    <div className="checklist"><img className="greencheck"src="/greenbutton.png" alt="greenbutton"/>
                    <p>Tranquil Ambiance- A peaceful retreat to escape stress.</p>
                    </div>
                    <div className="checklist"><img className="greencheck" src = "/greenbutton.png" alt="greenbutton"/>
                    <p>Expert Therapists- Skilled professionals for personalized care.</p>
                    </div>
                    <div className="checklist"><img className="greencheck" src = "/greenbutton.png" alt="greenbutton"/>
                    <p>Quality Products- Premium products for effective treatments.</p>
                    </div>
                    <div className="checklist"><img className="greencheck" src = "/greenbutton.png" alt="greenbutton"/>
                    <p>Customized Treatments- Tailored services for your needs.</p>
                    </div> 
                </div>
        </div>

    );
}
export default About;