import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Countdown from "../components/Countdown";
import BlueCard from "../components/BlueCard";
import HuskyCard from "../components/HuskyCard";
import acm_logo from "../images/acm_white_bg.png";
import sustain_logo from "../images/sustainability_trackLogo.png";
import edu_logo from "../images/education_trackLogo.png";
import entertain_logo from "../images/entertainment_trackLogo.png";
import { ReactComponent as Title } from "../images/title.svg";
function Home() {
  return (
    <>
      <div className="wrapper">
        <Navbar />
        <div className="content">
          <div className="col-12 home">
            <div className="acm_title">
              <Title />
              <h2>
                University of Washington Bothell Chapter of the Association for
                Computing Machinery
              </h2>
              <h2 className="date">May 13th - May 15th, 2022</h2>
              <img className="acm_logo" src={acm_logo} alt="ACM logo" />
            </div>
            <div className="countdown">
              <p>Days Until the UWB Hackathon:</p>
              <div className="countdown_box">
                <Countdown />
              </div>
              
            </div>
            <HuskyCard title={<span>Tracks</span>} />
              <div className="track_box">
                <BlueCard
                  image={<img src={sustain_logo} alt="Sustainability Logo" className="track-img"/>}
                  title={<h1 className="bc_header">Sustainability</h1>}
                  content={
                    <p className="bc_content">
                      How can humanity avoid exhausting Earth’s resources? Think
                      of a way to utilize the cloud to either educate young
                      people about sustainability or to build a sustainable
                      solution and help conserve energy, water, or other
                      resources.
                    </p>
                  }
                />
                <BlueCard
                  image={<img src={edu_logo} alt="Education Logo" className="track-img"/>}
                  title={<h1 className="bc_header">Education</h1>}
                  content={
                    <p className="bc_content">
                      As the pandemic became a new normal for all of us, it left
                      lasting changes in our education system. Covid influenced
                      the use of new technology in education to help students
                      continue their education remotely. Think of ways to keep
                      education effective and available remotely, bonus points
                      if you use a cloud.
                    </p>
                  }
                />
                
                <BlueCard
                  image={<img src={entertain_logo} alt="Entertainment Logo" className="track-img"/>}
                  title={<h1 className="bc_header">Entertainment</h1>}
                  content={
                    <p className="bc_content">
                      Quarantine has had us in search of the best ways to keep
                      ourselves entertained, seeing huge jumps in usage for
                      streaming services, video games, social media, and more.
                      Entertainment continues to grow as people lean more
                      towards the internet for entertainment. Explore the unique
                      avenues in which we provide people with connectivity and
                      entertainment through technology and the cloud.
                    </p>
                  }
                />
              </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
