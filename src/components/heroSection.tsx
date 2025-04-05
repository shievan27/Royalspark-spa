import{ useNavigate} from "react-router-dom";
const HeroSection =()=> {
    const navigate = useNavigate();
    return(
        <div className="hero-section">
            <div className="overlay">
                <h1>Looking for a massage?</h1>
                <p>Here at royalspark we offer various types of massage</p>
                <p>Book with us now!</p>
                <button onClick={()=>navigate("/services")} className ="start-button">GET STARTED</button>
            </div>
        </div>
    );
}
export default HeroSection;