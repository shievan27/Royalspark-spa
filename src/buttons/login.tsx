import {useState} from 'react';

const Login =()=>{
    const [showform, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm(!showform);
    };
    const handleSubmit=(e:React.FormEvent)=>{
        e.preventDefault();
        alert(`✅ logged in succesfully!`)
    }
    return(
        <div className="login-container">
            <button className="login-button" onClick={toggleForm}>
                {showform ? 'Close Form' : 'Login'}
            </button>
            {showform && (
                <div className="login-form">
                    <h2>Login</h2>
                    <p>Please enter your credentials</p>
                    <form className="login-form" onSubmit={handleSubmit}>
                    <input className="form-input"type="text" placeholder="Username" required/>
                    <input className="form-input"type="password" placeholder="Password" required />
                    <button className="submit-button"type="submit">Submit</button>
                    <p>Don't have an account?<a href="/Signup">Sign up</a> now</p>
                    </form>
                </div>
            )}
        </div>
    );
}
export default Login;