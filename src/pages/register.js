import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useState } from "react";
function Register() {
  const [registerBtn, setRegisterBtn] = useState("Register!");
  const [dispTMField, setDispTMField] = useState(false);
  const [dispHearField, setDispHearField] = useState(false);
  const [dispSchoolField, setDispSchoolField] = useState(false);
  const [dispGenderField, setDispGenderField] = useState(false);
  return (
    <>
      <div className="wrapper">
        <Navbar />
        <div className="content">
          <div className="blueOpacity">
            <div className="formcontainer">
              <h1 className="regTitle">Register</h1>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setRegisterBtn("Sending...");
                  const form = document.getElementById("rform");
                  const data = new FormData(form);
                  const action = process.env.REACT_APP_REG_URL;
                  fetch(action, {
                    method: "POST",
                    body: data,
                  }).then(() => {
                    setRegisterBtn("Done!");
                  });
                }}
                onChange={(e) => {
                  e.preventDefault();
                  setRegisterBtn("Register!");
                  var select = document.getElementById("team");
                  var value = select.options[select.selectedIndex].value;
                  if (value === "I have a team") setDispTMField(true);
                  else setDispTMField(false);
                  var hearSelect = document.getElementById("HearAboutUs");
                  var hearValue =
                    hearSelect.options[hearSelect.selectedIndex].value;
                  if (hearValue === "other") setDispHearField(true);
                  else setDispHearField(false);
                  var schoolSelect = document.getElementById("school");
                  var schoolValue =
                    schoolSelect.options[schoolSelect.selectedIndex].value;
                  if (schoolValue === "other") setDispSchoolField(true);
                  else setDispSchoolField(false);
                  var genderSelect = document.getElementById("gender");
                  var genderValue =
                    genderSelect.options[genderSelect.selectedIndex].value;
                  if (genderValue === "other") setDispGenderField(true);
                  else setDispGenderField(false);
                }}
                id="rform"
              >
                <label className="labelTitle">
                  First Name: *
                  <input
                    name="FirstName"
                    type="text"
                    placeholder="First Name"
                    required
                  />
                </label>
                <label className="labelTitle">
                  Last Name: *
                  <input
                    name="LastName"
                    type="text"
                    placeholder="Last Name"
                    required
                  />
                </label>
                <label className="labelTitle">
                  Email: *
                  <input
                    name="Email"
                    type="email"
                    placeholder="Email"
                    required
                  />
                </label>
                <label className="labelTitle">
                  You are a... *
                  <select id="youarea" name="You are a...">
                    <option value="high school student">High School Student</option>
                    <option value="undergrad student">Undergraduate Student</option>
                    <option value="graduate student">Graduate Student</option>
                    <option value="working professional">Working Professional</option>
                  </select>
                </label>
                <label className="labelTitle">
                  What is your age range? *
                  <select id="agerange" name="What is your age range?">
                    <option value="15-20">15-20</option>
                    <option value="21-25">21-25</option>
                    <option value="26-30">26-30</option>
                    <option value="30+">30+</option>
                  </select>
                </label>
                <label className="labelTitle">
                  Institutional affiliation (school, employer...): *
                  <input
                    name="Institutional Affiliation"
                    type="text"
                    placeholder="Institutional Affiliation"
                    required
                  />
                </label>
                <label className="labelTitle">
                  What country and timezone (EST, PST, MST...) are you located in? *
                  <input
                    name="Country and TimeZone"
                    type="text"
                    placeholder="Country and Timezone"
                    required
                  />
                </label>
                <label className="labelTitle">
                  Do you have a team? *
                  <select id="team" name="HasATeam">
                    <option value="looking for teammates">
                      I'm looking for teammates
                    </option>
                    <option value="I have a team">I have a team</option>
                    <option value="Solo">Solo</option>
                  </select>
                </label>
                {dispTMField && (
                  <label className="labelTitle">
                    Emails of Team Members: *
                    <input
                      name="TeamMemberEmails"
                      type="text"
                      placeholder="Emails of Team Members"
                      required
                    />
                  </label>
                )}
                <label className="labelTitle">
                  How Did You Hear About Us? *
                  <select id="HearAboutUs" name="HearAboutUs">
                    <option value="discord">Discord</option>
                    <option value="wordofmouth">Word of Mouth</option>
                    <option value="acmofficers">ACM Officer(s)</option>
                    <option value="acmwebsite">UWB ACM Website</option>
                    <option value="hackathonwebsite">
                      Our Hackathon Website (uwbhacks.com)
                    </option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="newsletter">Newsletter</option>
                    <option value="other">Other</option>
                  </select>
                </label>
                {dispHearField && (
                  <input
                    name="HearAboutUsOther"
                    type="text"
                    placeholder="Other Way You Heard About Us *"
                    required
                  />
                )}
                <label className="labelTitle">
                  School *
                  <select id="school" name="School">
                    <option value="University of Washington,Bothell">
                      University of Washington, Bothell
                    </option>
                    <option value="Bellevue College">Bellevue College</option>
                    <option value="University of Washington,Seattle">
                      University of Washington, Seattle
                    </option>
                    <option value="University of Washington,Tacoma">
                      University of Washington, Tacoma
                    </option>
                    <option value="Edmonds College">Edmonds College</option>
                    <option value="other">Enter the name of your school</option>
                  </select>
                </label>
                {dispSchoolField && (
                  <input
                    name="SchoolOther"
                    type="text"
                    placeholder="School *"
                    required
                  />
                )}
                <label className="labelTitle">
                  What are you looking to get out of the Hackathon? *
                  <input
                    name="What are you looking to get out of the Hackathon?"
                    type="text"
                    placeholder="What are you looking to get out of the Hackathon?"
                    required
                  />
                </label>
                <label className="labelTitle">
                  Race/Ethnicity
                  <input
                    name="Race/Ethnicity"
                    type="text"
                    placeholder="Race/Ethnicity"
                  />
                </label>

                <label className="labelTitle">
                  Gender
                  <select id="gender" name="Gender">
                    <option value="Prefer not to say">Prefer not to say</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Agender">Agender</option>
                    <option value="Genderqueer/Nonbinary">
                      Genderqueer/Nonbinary
                    </option>
                    <option value="other">Other</option>
                  </select>
                </label>
                {dispGenderField && (
                  <input
                    name="GenderOther"
                    type="text"
                    placeholder="Other"
                  />
                )}
                
                <label className="labelTitle" id ="trans">
                   Transgender
                  <input type="checkbox" id ="transgender" name="Transgender"> 
                  </input>
                </label>
                <br></br>

                <label className="labelTitle">
                  Is there anything else you would like us to know?
                  <input
                    name="Anything else you would like us to know?"
                    type="text"
                    placeholder="Anything else you would like us to know?"
                  />
                </label>
                <input
                  id="regBtn"
                  className="registerBtn"
                  type="submit"
                  value={registerBtn}
                />
                <p className="contact_p">* Indicates required field</p>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Register;
