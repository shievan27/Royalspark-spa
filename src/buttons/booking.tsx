import {useState} from "react";

const Booking =()=>{
    const[formData, setFormData]=useState({
        name:"",
        email:"",
        phone:"",
        service:"swedish massage",
        date:"",
        time:""
    });
    
    const handleChange=(e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement>) => {
        setFormData({...formData,[e.target.name]:e.target.value});
    };

        
    const handleSubmit=(e:React.FormEvent)=>{
       e.preventDefault();
       alert(`✅ Appointment booked for ${formData.name} on ${formData.date} at ${formData.time} for ${formData.service}.`);
    };
    
    return(
        <div className="booking-container">
            <h2>Book an appointment for your service</h2>
            <form className="booking-form" onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" placeholder="name" value={formData.name} onChange={handleChange} required/>
                <label>Email:</label>
                <input type="email" name="email" placeholder="email" value={formData.email} onChange={handleChange} required/>
                <label>Phone Number:</label>
                <input type="tel" name="phone" placeholder="phone" value={formData.phone} onChange={handleChange} required/>
                <label>Service:</label>
                <select name="service" title="Select a service" value={formData.service} onChange={handleChange} required>
                    <option>swedish massage</option>
                    <option>deep tissue massage</option>
                    <option>hot stone massage</option>
                    <option>aromatherapy</option>
                    <option>reflexology</option>
                    <option>prenatal massage</option>
                    <option>deep cleansing facial</option>
                    <option>anti-aging facial</option>
                    <option>hydrating facial</option>
                    <option>body scrubs</option>
                    <option>brightening facial</option>
                    <option>acne treatment facial</option>
                    <option>body wraps</option>
                    <option>skin polishing</option>
                    <option>mud therapy</option>
                    <option>manicure and pedicure</option>
                    <option>waxing and hair removal</option>
                    <option>eyebrow and eyelash tinting</option>
                    <option>makeup services</option>
                    <option>sauna and steam therapy</option>
                    <option>hydrotherapy</option>
                    <option>yoga and meditation</option>
                 </select>
                 <label>Date:</label>
                 <input type="date" name="date" placeholder="date" value={formData.date} onChange={handleChange} required/>
                 <label>Time:</label>
                 <input type="time" name="time" placeholder="time" value={formData.time} onChange={handleChange} required/>
                 <button type="submit" className="submit-button">Book Now</button>
            </form>
            </div>


    );
};
export default Booking;