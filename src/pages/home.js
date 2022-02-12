import Countdown from "../components/countdown";
import Navbar from "../components/navbar";
function Home() {
    return (
        <> 
            <Navbar />
            <div className="home_wrapper">
                <div className="home_info">
                    <h1>UWB Hacks the Cloud</h1>
                    <h2>University of Washington Bothell Chapter of the Association for Computing Machinery</h2>
                </div>
                <div className = "countdown">  
                    <p>Days Until the UWB Hackathon:</p>
                    <div className="countdown_box">
                        <Countdown />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;