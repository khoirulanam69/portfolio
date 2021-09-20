import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Component } from "react";
import emailjs from 'emailjs-com';

// style
import './contact.scss';

class Contact extends Component {
    sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_dq9xnz3', 'template_zsbuaor', e.target, 'user_cz22f0cVYiS5y5oGfYxl0')
            .then((result) => {
                if (result.text === "OK") {
                    alert("Message send succesfully")
                }
            }, (error) => {
                alert(error.text);
            });
        e.target.reset();
    }
    render() {
        return (
            <div className="contact" id="contact">
                <h3>CONTACT ME</h3>
                <div className="section">
                    <div className="contact__informations">
                        <div className="box__information">
                            <div className="icon"><FontAwesomeIcon icon={faMapMarkerAlt} /></div>
                            <div className="address__information">
                                <h6>ADDRESS</h6>
                                <p>JL. Simpang Pahlawan No.35 Dampit, Malang, East Java, Indonesian</p>
                            </div>
                        </div>
                        <div className="box__information">
                            <div className="icon"><FontAwesomeIcon icon={faPhone} /></div>
                            <div className="phone__information">
                                <h6>PHONE</h6>
                                <p>+62 8135 7333 886</p>
                            </div>
                        </div>
                        <div className="box__information">
                            <div className="icon"><FontAwesomeIcon icon={faEnvelope} /></div>
                            <div className="email__information">
                                <h6>EMAIL</h6>
                                <p>khoirulanam.um@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={this.sendEmail}>
                        <input type="text" name="name" placeholder="Your Name" required />
                        <input type="email" name="email" placeholder="Your Email" required />
                        <input type="text" name="subject" placeholder="Subject" />
                        <textarea name="message" placeholder="How can I help?" required />
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default Contact;