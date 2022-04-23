import { Outlet, Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            
            <nav className="navbar">
                <div className="navbarBlur">
                    <div className="navbar_wrapper">
                            <Link className="text_link" id="navbar_logo" to="/">UWB Hacks 2022</Link>
                        <div className="navbar_links">
                            <Link className="text_link" id="navbar_link-wrapper" to="/register">Register</Link>
                            <Link className="text_link" id="navbar_link-wrapper" to="/contact">Contact</Link>
                            <Link className="text_link" id="navbar_link-wrapper" to="/faq">FAQ</Link>
                        </div>
                    
                    </div>
                </div>
            </nav>
            <Outlet /> 
        </>
    );
}

export default Navbar;