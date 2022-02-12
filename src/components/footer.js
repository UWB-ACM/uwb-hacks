import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDiscord } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
function Footer() {
    const curr_year = new Date().getFullYear();
    return (
        <>
            <div className="footer">
                <div className="footer_wrapper">
                    <div className="footer_top">
                        <a
                            className="footer_text"
                            href=""
                            title="Code of Conduct"
                        >
                            Code of Conduct
                        </a>
                        <br />
                        <a
                            className="footer_text"
                            href="mailto:uwbacm@uw.edu"
                            title="Contact us via email"
                        >
                            Email us
                        </a>
                    </div>
                    <br />
                    <div className="footer_links">
                        <ul>
                            <li className="footer_link">
                                <a 
                                    href="https://discord.gg/tCq2FKFcnh"
                                    target="_blank"
                                    title="discord" 
                                    rel="noreferrer"
                                >
                                    <FontAwesomeIcon icon = {faDiscord} />
                                </a>
                            </li>
                            <li className="footer_link">
                                <a
                                    href="https://www.instagram.com/uwb_acm/"
                                    target="_blank"
                                    title="instagram"
                                    rel="noreferrer"
                                >
                                    <FontAwesomeIcon icon = {faInstagram} />
                                </a>
                            </li>
                            <li className="footer_link">
                            <a
                                    href="https://www.facebook.com/uwbacm"
                                    target="_blank"
                                    title="facebook"
                                    rel="noreferrer"
                                >
                                    <FontAwesomeIcon icon = {faFacebook} />
                                </a>
                            </li>
                            <li className="footer_link">
                                <a
                                    href="https://www.linkedin.com/organization-guest/company/uwb-acm-club"
                                    target="_blank"
                                    title="linkedin"
                                    rel="noreferrer"
                                >
                                    <FontAwesomeIcon icon = {faLinkedin} />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <br />
                    <div className="footer_copyright">
                        <p className="footer_text">
                            Copyright © UWB ACM {curr_year}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;