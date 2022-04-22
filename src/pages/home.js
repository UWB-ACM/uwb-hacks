import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Countdown from "../components/Countdown";
import HuskyCard from "../components/HuskyCard";
import acm_logo from "../images/acm_white_bg.png";
import sustain_logo_lb from "../images/sustainability_trackLogo_lightblue.png";
import edu_logo_lb from "../images/education_trackLogo_lightblue.png";
import entertain_logo_lb from "../images/entertainment_trackLogo_lightblue.png";
import { ReactComponent as Title } from "../images/title.svg";
import HorizontalCard from "../components/HorizontalCard";
function Home() {
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
                <p>Days Until the UWB Hackathon:</p>
                <Countdown />
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
          </div>
          <HuskyCard title={<span>Stay Tuned For Updates!</span>} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
