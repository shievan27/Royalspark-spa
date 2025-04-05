const Contact = ()=>{
    return(
        <div className="contact-page">
            <h1>Contact us</h1>
            <p>If you have any questions, feel free to reach out!</p>
            <form className="contact-form">
                <label htmlFor="name">Name:</label>
                <input className="form-input"type="text" id="name" name="name" required />
                <br />
                <label htmlFor="email">Email:</label>
                <input className="form-input" type="email" id="email" name="email" required />
                <br />
                <label htmlFor="message">Message:</label>
                <textarea className="form-textarea"id="message" name="message" required>type something..</textarea>
                <br />
                <button className="form-submit"type="submit">Submit</button>
            </form>
        </div>
    );
}
export default Contact;