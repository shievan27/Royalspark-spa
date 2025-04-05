import {useState} from 'react';
const Signup= ()=>{
    const [showform,setshowForm] = useState(false);

    const toggleForm = () => {
        setshowForm(!showform);
    };
    const handleSubmit=(e:React.FormEvent)=>{
        e.preventDefault();
        alert(`✅ signed up successfully`);
    };
    return(
        <div className="signup-container">
            <button className="signup-button" onClick={toggleForm}>signup</button>
            {showform && (
                <div className="signup-form">
                    <h2>Sign Up</h2>
                    <p>we would love to get you on board! 🚀</p>
                    <p>Please enter your details</p>
                    <form className="signup-form" onSubmit={handleSubmit}>
                        <input className="form-input" type="text" placeholder="Username" required/>
                        <input className="form-input" type="email" placeholder="Email" required/>
                        <input className="form-input" type="password" placeholder="Password" required/>
                        <button className="submit-button" type="submit">Submit</button>
                    </form>
                </div>
            )}
        </div>
    );
}
export default Signup;