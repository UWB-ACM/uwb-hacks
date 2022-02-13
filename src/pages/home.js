import Countdown from "../components/countdown";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import acm_logo from "../images/acm_white_bg.png";
function Home() {
    return (
        <> 
            <div className="wrapper">
                <Navbar />
                <div className="content">
                    <div className="col-12 home">
                        <div className="acm_title">
                            <h1 className="page_title">UWB Hacks the Cloud</h1>
                            <h2>University of Washington Bothell Chapter of the Association for Computing Machinery</h2>
                            <h2 className="date">April 1st - April 3rd 2022</h2>
                            <br/>
                            <img className="acm_logo" src={acm_logo} alt="ACM logo"/>
                        </div>
                        <div className="countdown">
                            <p>Days Until the UWB Hackathon:</p>
                            <div className="countdown_box">
                                <Countdown />
                            </div>
                        </div>   
                    </div>                    
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Home;