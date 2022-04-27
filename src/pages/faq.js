import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Collapsible from 'react-collapsible';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function FAQ() {
    return (
        <>  
        <div className="wrapper">
            <Navbar />
            <div className="content">
                <div className="blueOpacity" >
                    <div className="formcontainer">
                        <h1 className="page_title">FAQ</h1>
                        <div className="faq_wrapper">
                            <Collapsible trigger="How much coding experience do I need to have?">
                                    <p>
                                    You do not need to have any prior coding experience. 
                                    We are welcoming students of all experience and skill levels. 
                                    Hackathons are a great opportunity to work with people of all skill levels. 
                                    You will be able to look for team members in the hackathon discord or 
                                    create a team of your own. Max 5 people per team.
                                    </p>
                            </Collapsible>

                            <Collapsible trigger="What are tracks?">
                                <div className="faq_container">
                                    <p>
                                    In Hackathons, tracks are used to help you come up with ideas and help guide you 
                                    through your project. For example: a project for the 
                                    Education track could be an app that 
                                    helps students keep track of their school and personal life to maintain a 
                                    healthy work life balance.
                                    </p>
                                </div>
                            </Collapsible>

                            <Collapsible trigger="How will UWB Hacks the Cloud run?">
                                <div className="faq_container">
                                    <p>
                                    We will be holding a limited in person event on the first day, May 13th, 
                                    where students can pick swag and find a team if needed. The next two days will be virtual, 
                                    and we will be hosting online events such as workshops and guest speakers through Zoom 
                                    (Schedule coming soon). For teamwork on your project, communication methods are entirely up to you, 
                                    but we recommend Zoom, Microsoft Teams, or Discord.
                                    </p>
                                </div>
                            </Collapsible>

                            <Collapsible trigger="Do I have to be a student? Do I have to be a UWB student?">
                                <div className="faq_container">
                                    <p>
                                    Yes, however, we accept all students from not only high schools, community colleges, and universities, 
                                    but non-traditional institutions like boot camps and academies as well.
                                    </p>
                                </div>
                            </Collapsible>

                            <Collapsible trigger="Are there any rules?">
                                <div className="faq_container">
                                    <p className="rule">
                                        Behave Appropriately:
                                    </p>
                                    <br></br>
                                    <p>
                                        This is a school event, and thus you should act as you would on campus. 
                                        Inappropriate behavior or posts are not acceptable under any circumstances.
                                    </p>
                                    <br></br>

                                    <p className="rule">
                                        Keep Discussions On-Topic:
                                    </p>
                                    <br></br>
                                    <p>
                                        Please keep discussions relevant to the channel you are in. 
                                        The '#off-topic' channel in our hackathon Discord server is available for whatever 
                                        (appropriate) content you may wish to post/discuss.
                                    </p>
                                    <br></br>
                                    <u>
                                        <a href="https://drive.google.com/file/d/1Dcj9MHyeKK5Zz9EXmTQlQywLQ_Es9vXJ/view?usp=sharing" 
                                            target="_blank" 
                                            rel="noreferrer">
                                        Read our Code Of Conduct Here</a>
                                    </u>
                                </div>
                            </Collapsible>

                            <Collapsible trigger="How many people can be on a team?">
                                <div className="faq_container">
                                    <p>
                                        We have a limit of 5 members per team. Any more than 5 members would potentially 
                                        reduce team production and cause further difficulties for your projects.
                                    </p>
                                </div>
                            </Collapsible>

                            <Collapsible trigger="What if I don't have a team?">
                                <div className="faq_container">
                                    <p>
                                        You are welcome to work individually or with a team. 
                                        If you are struggling to find a team or don't have a team and 
                                        want to work with one, we recommend you join our UWB Hacks the 
                                        Cloud <a href="https://discord.gg/p7XFsK8rXf" target="_blank" rel="noreferrer">Discord</a>. 
                                        There is a '#team-formation' channel where you can 
                                        find other people looking for teams.
                                    </p>
                                </div>
                            </Collapsible>


                            <Collapsible trigger="Does UWB Hacks the Cloud cost money?">
                                <div className="faq_container">
                                    <p>
                                        This event is entirely free! No sign up or registration fees required.
                                    </p>
                                </div>
                            </Collapsible>

                            <Collapsible trigger="Will there be UWB Hack The Cloud swag?">
                                <div className="faq_container">
                                    <p>
                                        Yes, we will be giving swag out at our limited in-person on 
                                        May 13th at the 1st floor of ARC from 11 AM to 4 PM. 
                                    </p>
                                </div>
                            </Collapsible>

                            <Collapsible trigger="What if I have a question that wasn't answered in the FAQ?">
                                <div className="faq_container">
                                    <p>
                                    Please feel free to reach out to event organizers in the “#organizer-discussion” 
                                    channel of the UWB Hacks the Cloud <a href="https://discord.gg/p7XFsK8rXf" target="_blank" rel="noreferrer">Discord</a>. 
                                    </p>
                                </div>
                            </Collapsible>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>        
    </>
    );
}
export default FAQ;