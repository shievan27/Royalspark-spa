import {useNavigate} from "react-router-dom";

const Services =()=>{
    const navigate =useNavigate()
    return(
        <div className="services-section">
        
                <h1>Services offered 😊</h1>
                <h1>Relax and Rejuvinate with our spa treatments</h1>
            <div className= "massage-intro">
                <h2>Massage Therapy 💆‍♀️💆‍♂️</h2>
             <div className="massages-section">
                <div className="massages">
                <h3>💆Swedish massage</h3>
                <img className="service-images"src="/massage/swedish-massage.webp" alt="swedish-massage"/>
                <p>A gentle full body massage to help you relax and relieve stress</p>
                <button className="booking"onClick={()=>navigate("/booking")}>BOOK NOW</button>
                </div>
                <div className="massages">
                <h3>💪 Deep Tissue Massage</h3>
                <img className="service-images"src= "/massage/deep-tissue.jpeg" alt= "deeptissue" />
                <p>Relieves tension in deeper muscle layers. Ideal for chronic pain.</p>
                <button className="booking"onClick={()=>navigate("/booking")}>BOOK NOW</button>
                </div>
                <div className="massages">
                <h3>Hot stone massage</h3>
                <img className="service-images"src= "/massage/hotstone.jpeg" alt= "facials" />
                <p>Heated stones are used to relax muscles and improve circulation.</p>
                <button className="booking"onClick={()=>navigate("/booking")}>BOOK NOW</button>
                </div>

                <div className="massages">
                <h3>Aromatherapy</h3>
                <img className="service-images"src= "/massage/Aromatherapy.jpeg" alt= "aromatherapy" />
                <p>Exfoliate and refresh your skin with our aromatic ingredients.</p>
                <button className="booking"onClick={()=>navigate("/booking")}>BOOK NOW</button>
                </div>
                <div className="massages">
                <h3>💆‍♀️ Reflexology</h3>
                <img className="service-images"src= "/massage/reflexology.jpeg" alt= "reflexology" />
                <p>Focuses on pressure points in the feet and hands to promote relaxation.</p>
                <button className="booking"onClick={()=>navigate("/booking")}>BOOK NOW</button>
                </div>
                <div className="massages">
                    <h3>prenatal massage(for pregnant women)</h3>
                    <img className="service-images"src= "/massage/prenatal.jpeg" alt= "prenatal-massage" />
                    <p>Safe and soothing massage for expectant mothers to relieve discomfort.</p>
                    <button className="booking"onClick={()=>navigate("/booking")}>BOOK NOW</button>
                </div>
            </div>
            </div>
            <div className="facial-intro">
                <h2>Facial Treatments 🌸</h2>
            <div className="facial-section">
                <div className="facials">
                    <h3>deep cleansing facial</h3>
                    <img className="service-images"src= "/facialTreatment/deep-cleansing.jpeg" alt= "facial" />
                    <p>Deep cleanse and exfoliate your skin for a fresh glow.</p>
                    <button className="booking"onClick={()=>navigate("/booking")}>BOOK NOW</button>
                </div>
                <div className="facials">
                    <h3>anti-aging facial</h3>
                    <img className="service-images"src= "/facialTreatment/anti-aging.jpeg" alt= "anti-aging" />
                    <p>Reduce wrinkles and fine lines with our rejuvenating treatment.</p>
                    <button className="booking"onClick={()=>navigate("/booking")}>BOOK NOW</button>
                </div>
                <div className="facials">
                    <h3>hydrating facial</h3>
                    <img className="service-images"src= "/facialTreatment/hydrating-facial.jpeg" alt= "hydrating-facial" />
                    <p>Intense hydration for dry and dehydrated skin.</p>
                    <button className="booking"onClick={()=>navigate("/booking")}>BOOK NOW</button>
                </div>
                <div className="facials">
                    <h3>brightening facial</h3>
                    <img className="service-images"src= "/facialTreatment/brightening-facial.jpeg" alt= "brightening-facial" />
                    <p>Illuminate your complexion with our brightening treatment.</p>
                    <button className="booking"onClick={()=>navigate("/booking")}>BOOK NOW</button>
                </div>
                <div className="facials">
                    <h3>acne facial</h3>
                    <img className="service-images"src= "/facialTreatment/acne-facial.jpeg" alt= "acne-facial" />
                    <p>Target acne and blemishes with our specialized treatment.</p>
                    <button className="booking"onClick={()=>navigate("/booking")}>BOOK NOW</button>
                </div>
            </div>
            </div>
            <div className="body-intro">
                <h2>Body Treatments ✨</h2>
            <div className="bodytreatments-section">
                   <div className="bodytreatments">
                    <h3>body scrub</h3>
                    <img className="service-images"src= "/bodytreatment/body-scrubs.jpeg" alt= "bodyscrub" />
                    <p>Exfoliate and refresh your skin with our aromatic body scrubs.</p>
                    <button className="booking"onClick={()=>navigate("/booking")}>BOOK NOW</button>
                    </div>
                    <div className="bodytreatments">
                    <h3>body wrap</h3>
                    <img className="service-images"src= "/bodytreatment/bodywraps.jpeg" alt= "bodywrap" />
                    <p>Detoxify and hydrate your skin with our nourishing body wraps.</p>
                    <button className="booking"onClick={()=>navigate("/booking")}>BOOK NOW</button>
                    </div>
                    <div className="bodytreatments">
                    <h3>body polish</h3>
                    <img className="service-images"src= "/bodytreatment/skinpolishing.jpeg" alt= "body-polish" /> 
                    <p>Revitalize your skin with our invigorating body polish treatment.</p>
                    <button className="booking"onClick={()=>navigate("/booking")}>BOOK NOW</button>
                    </div>
                    <div className="bodytreatments">
                    <h3>mud therapy</h3>
                    <img className="service-images"src= "/bodytreatment/mud-therapy.jpeg" alt= "mudtherapy" />
                    <p>Relax and detoxify with our soothing mud therapy treatment.</p>
                    <button className="booking"onClick={()=>navigate("/booking")}>BOOK NOW</button>
                    </div>
            </div>
            </div>
            <div className="beauty-intro">
                <h2>Beauty and Grooming Services 💅</h2>
            <div className="beauty-section">
                    <div className="beauty">
                    <h3>manicure and pedicure</h3>
                    <img className="service-images"src= "/beauty/manicure.jpeg" alt= "manicure" />
                    <p>Pamper your hands and feet with our luxurious services.</p>
                    <button className="booking"onClick={()=>navigate("/booking")}>BOOK NOW</button>
                    </div>
                    <div className="beauty">
                        <h3>waxing and hair removal</h3>
                        <img className="service-images"src= "/beauty/waxing.jpeg" alt= "waxing" />
                        <p>Silky smooth skin with our professional waxing services.</p>
                        <button className="booking"onClick={()=>navigate("/booking")}>BOOK NOW</button>
                        </div>
                    <div className="beauty">
                        <h3>makeup application</h3>
                        <img className="service-images"src= "/beauty/makeup.jpeg" alt= "makeup" />
                        <p>Enhance your beauty with our professional makeup services.</p>
                        <button className="booking"onClick={()=>navigate("/booking")}>BOOK NOW</button>
                        </div>
                    <div className="beauty">
                        <h3>eyebrow and eyelash tint</h3>
                        <img className="service-images"src= "/beauty/eyebrow.jpeg" alt= "eyebrow" />
                        <p>Define your eyes with our eyebrow and eyelash tinting services.</p>
                        <button className="booking"onClick={()=>navigate("/booking")}>BOOK NOW</button>
                        </div>
                </div>
            </div>
            <div className="wellness-intro">
                <h2>Wellness and Relaxation Therapies 🧘‍♂️</h2>
            <div className="wellness-section">
                    <div className="wellness">
                        <h3>yoga and meditation classes</h3>
                        <img className="service-images"src= "/wellness/yoga.jpeg" alt= "yoga" />
                        <p>Find your inner peace with our yoga and meditation classes.</p>
                        <button className="booking"onClick={()=>navigate("/booking")}>BOOK NOW</button>
                        </div>
                    <div className="wellness">
                        <h3>steam and sauna therapy</h3>
                        <img className="service-images"src= "/wellness/sauna.jpeg" alt= "sauna" />
                        <p>Relax and detoxify with our steam and sauna therapy.</p>
                        <button className="booking"onClick={()=>navigate("/booking")}>BOOK NOW</button>
                        </div>
                    <div className="wellness">
                        <h3>hydrotherapy</h3>
                        <img className="service-images"src= "/wellness/hydrotherapy.jpeg" alt= "hydrotherapy" />
                        <p>Relax and rejuvenate with our hydrotherapy treatments.</p>
                        <button className="booking"onClick={()=>navigate("/booking")}>BOOK NOW</button>
                        </div>
            </div>
            </div>
        </div>

    );
}
export default Services;