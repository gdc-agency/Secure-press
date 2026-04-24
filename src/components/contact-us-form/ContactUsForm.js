import React, {useState} from 'react';
import emailjs from "emailjs-com";


const ContactUsForm = () => {

    const [result, setResult] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                'service_g9qjp6c',
                'template_hnwwuie',
                e.target,
                'tFAj0ub7yZ4jej7CT'
            )
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        setResult( true );
    };

    return (
        <>
            <form action="" onSubmit={sendEmail}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="single-input-field">
                                <input placeholder="First Name" type="text" name="firstname" required/>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="single-input-field">
                                <input placeholder="Last Name" type="text" name="lastname"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="single-input-field">
                                <input placeholder="Phone" type="tel" name="phonenumber"/>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="single-input-field">
                                <input placeholder="Your E-mail" type="email" name="email" required/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 message-input">
                    <div className="single-input-field">
                        <textarea placeholder="Enter Your Message Here" name="message" required/>
                    </div>
                </div>
                <div className="single-input-fieldsbtn">
                    <input type="submit" value="Send Now"/>
                </div>
                { result ? <div className="success-send-msg">Your message has been sent successfully. We will contact you shortly.</div>  : null }
            </form>
        </>
    );
};

export default ContactUsForm;