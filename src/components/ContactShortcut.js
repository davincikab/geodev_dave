import { 
    FaTwitter, FaGithub, 
    FaInstagram, FaEnvelope 
} from "react-icons/fa";

const ContactShortCut = (props) => {
    return (
        <div className="fixed-section contact-section">
            <div className="contact-item">
                <div className="icons">
                    <FaInstagram color="white"/>
                </div>
                <div className="text">Instagram</div>
            </div>

            <div className="contact-item">
                <div className="icons">
                    <FaGithub color="white"/>
                </div>
                <div className="text">Github</div>
            </div>

            <div className="contact-item">
                <div className="icons">
                    <FaEnvelope color="white"/>
                </div>

                <div className="text">Email</div>
            </div>

            <div className="contact-item">
                <div className="icons">
                    <FaTwitter color="white"/>
                </div>

                <div className="text">
                    Twitter
                </div>
            </div>
        </div>
    )
}

export default ContactShortCut;