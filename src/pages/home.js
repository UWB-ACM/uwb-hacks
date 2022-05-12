import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Countdown from "../components/Countdown";
import HuskyCard from "../components/HuskyCard";
import acm_logo from "../images/acm_white_bg.png";
import sustain_logo_lb from "../images/sustainability_trackLogo_lightblue.png";
import edu_logo_lb from "../images/education_trackLogo_lightblue.png";
import entertain_logo_lb from "../images/entertainment_trackLogo_lightblue.png";
import ryan_russell_profile from "../images/ryanrussellprofile.jpg";
import brandon_otoole_profile from "../images/brandonotooleprofile.jpg";
import futureweilogo from "../images/futureweilogo.png";
import { ReactComponent as Title } from "../images/title.svg";
import HorizontalCard from "../components/HorizontalCard";
import { useState } from "react";

function Home() {
  const [startFinished, setStartFinished] = useState(false);
  const [hackingFinished, setHackingFinished] = useState(false);
  return (
    <>
      <div className="wrapper">
        <Navbar />
        <div className="content">
          <div className="home">
            <div className="acm_title">
              <Title className="title" />
              <h2 className="uwbacmtitle">
                University of Washington Bothell Chapter of the Association for
                Computing Machinery
              </h2>
              <h2 className="date">May 13th - May 15th, 2022</h2>
              <img className="acm_logo" src={acm_logo} alt="ACM logo" />
            </div>
            <div className="countdown">
              <div className="countdown_box">
                {!startFinished && <p>Days Until the UWB Hackathon:</p>}
                {!startFinished && <Countdown date={new Date(2022, 4, 13, 18)} setFinished={setStartFinished}/>}
                {startFinished && !hackingFinished && <p>Good Luck Hacking! Hacking Ends In:</p>}
                {startFinished && !hackingFinished && <Countdown date={new Date(2022, 4, 15, 18)} setFinished={setHackingFinished}/>}
                {startFinished && hackingFinished && <p>Hackathon is Finished! Thanks for Attending!</p>}
              </div>
            </div>
            <HuskyCard title={<span>Tracks</span>} />

            <HorizontalCard
              image={
                <img
                  src={sustain_logo_lb}
                  alt="Sustainability Logo"
                  className="track-img"
                />
              }
              title={<h1>Sustainability</h1>}
              content={
                <p>
                  How can humanity avoid exhausting Earth’s resources? Think of
                  a way to utilize the cloud to either educate young people
                  about sustainability or to build a sustainable solution and
                  help conserve energy, water, or other resources.
                </p>
              }
            />
            <HorizontalCard
              image={
                <img
                  src={edu_logo_lb}
                  alt="Education Logo"
                  className="track-img"
                />
              }
              title={<h1>Education</h1>}
              content={
                <p>
                  As the pandemic became a new normal for all of us, it left
                  lasting changes in our education system. Covid influenced the
                  use of new technology in education to help students continue
                  their education remotely. Think of ways to keep education
                  effective and available remotely, bonus points if you use a
                  cloud.
                </p>
              }
            />
            <HorizontalCard
              image={
                <img
                  src={entertain_logo_lb}
                  alt="Entertainment Logo"
                  className="track-img"
                />
              }
              title={<h1>Entertainment</h1>}
              content={
                <p>
                  Quarantine has had us in search of the best ways to keep
                  ourselves entertained, seeing huge jumps in usage for
                  streaming services, video games, social media, and more.
                  Entertainment continues to grow as people lean more towards
                  the internet for entertainment. Explore the unique avenues in
                  which we provide people with connectivity and entertainment
                  through technology and the cloud.
                </p>
              }
            />
            <HuskyCard title={<span>Schedule</span>} />
            <br />
            <HuskyCard title={<span>Friday, May 13th</span>} />
            <HorizontalCard
              image={<h1>11:00 AM - 4:00 PM</h1>}
              title={<h1>Merchandise Handout</h1>}
              content={<p>Location: UW Bothell -  ARC 110</p>}
            />
            <HorizontalCard
              image={<h1>4:00 PM - 4:45 PM</h1>}
              title={<h1>Ice Breaker Game</h1>}
              content={<p>Wheel of Questions</p>}
            />
            <HorizontalCard
              image={<h1>5:30 PM - 6:00 PM</h1>}
              title={<h1>Opening Ceremony</h1>}
            />
            <HorizontalCard
              image={<h1>6:00 PM</h1>}
              title={<h1>Hacking Begins!</h1>}
            />
            <HuskyCard title={<span>Saturday, May 14th</span>} />
            <HorizontalCard
              image={<h1>2:00 PM - 3:00 PM</h1>}
              title={<h1>Workshop</h1>}
              content={<p>EarthHacks - What could go wrong?</p>}
            />
            <HorizontalCard
              image={<h1>4:00 PM - 4:45 PM</h1>}
              title={<h1>Meet and Greet OR Team Building Activities</h1>}
            />
            <HorizontalCard
              image={
                  <img src={ryan_russell_profile} alt="Ryan Russell" className="profilePic"/>
              }
              title={<h1>5:00 PM - 6:00 PM: Guest Speaker: Ryan Russell</h1>}
              content={<p>Topic: How to get a job with Hackathon Projects</p>}
            />
            <HuskyCard title={<span>Sunday, May 15th</span>} />
            <HorizontalCard
              image={<img src={brandon_otoole_profile} alt="Brandon O'Toole" className="profilePic"/>}
              title={
                <h1>12:00 PM - 1:00 PM: Guest Speaker: Brandon O'Toole</h1>
              }
              content={<p>Topic: Start Shipping Today</p>}
            />
            <HorizontalCard
              image={<h1>6:00 PM</h1>}
              title={<h1>Hacking Ends!</h1>}
              content={<p>Submissions due on Devpost</p>}
            />
            <HorizontalCard
              image={<h1>6:00 PM - 6:30 PM</h1>}
              title={<h1>Closing Ceremony</h1>}
            />
            <HuskyCard title={<span>Tuesday, May 17th</span>} />
            <HorizontalCard
              image={<h1>6:00 PM</h1>}
              title={<h1>Judging Ends</h1>}
            />
            <HorizontalCard
              image={<h1>6:00 PM</h1>}
              title={<h1>Awards Decided</h1>}
              content={<p>Announce winners on Discord</p>}
            />
            <HuskyCard title={<span>Our Sponsors</span>} />
            <br />
            <img src={futureweilogo} alt="Future Wei Technologies" className="sponsorImg"/>
            <br />
            <HuskyCard title={<span>Stay Tuned For Updates!</span>} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
