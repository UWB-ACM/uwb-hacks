// import { useState } from "react";
import { useRef } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import emailjs from "emailjs-com";
function Contact() {
  /*   const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState(''); */
    const form = useRef();
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_1plgppo', 'template_qf9z2le', form.current, 'user_EEQeutApfj4C6bCKL7aZf')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
    }

    return (
        <>  
            <div className="wrapper">
                <Navbar />
                <div className="content col-12">
                    <h1 className="page_title">Contact Us</h1>
                    <form className="contact_form" autoComplete="off" ref = {form} onSubmit={sendEmail}>
                        <input
                            id="contact_email"
                            placeholder="*Email address"
                            required
                            type="text"
                            name="email"
                            /* value={email}
                            onChange={(e) => setEmail(e.target.value)} *//>
                        <input
                            id="contact_name"
                            placeholder="*Name"
                            required
                            type="text"
                            name="name"
                            /* value={name}
                            onChange={(e) => setName(e.target.value)} *//>
                        <textarea
                            id="contact_message"
                            placeholder="*Your message"
                            required
                            name="message"
                            /* value={message}
                            onChange={(e) => setMessage(e.target.value)} */
                        >
                        </textarea>
                        <button
                            type="submit"
                            className="submit_btn"
                            value="Send"
                        >Send</button>
                    </form>
                    <p className="contact_p">* Indicates required field</p>
                </div>
                <Footer/>
            </div>
        </>
    );
}

export default Contact;