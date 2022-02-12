import { Outlet, Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar_wrapper">
                    <ul className="navbar_logo">
                        <li>
                            <Link className="text_link" to="/">UWB Hackathon 2022</Link>
                        </li>
                    </ul>
                    <div className="navbar_main">
                        <ul className="navbar_links">
                            <li className="navbar_link-wrapper">
                                <Link className="text_link" to="/register">Register</Link>
                            </li>

                            <li className="navbar_link-wrapper">
                                <Link className="text_link" to="/sponsors">Sponsors</Link>
                            </li>

                            <li className="navbar_link-wrapper">
                                <Link className="text_link" to="/contact">Contact</Link>
                            </li>

                            <li className="navbar_link-wrapper">
                                <Link className="text_link" to="/faq">FAQ</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet /> 
        </>
    );
}

export default Navbar;