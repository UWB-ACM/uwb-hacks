// ====== THIS FILE ONLY CONTAINS SCRIPTS SHARED ACROSS PAGES ======
// ====== SCRIPTS TARGETING A FEW PAGES SHOULD BE PLACED IN A  ======
// ====== SEPARATE FILE. TRY NOT TO INCLUDE SCRIPTS IN .HTML files ======

// ======= START OF SCRIPTS FOR HEADER ======
// navbar slide down when scroll up
let prevScrollpos = window.pageYOffset;
window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
};
// ==========================================

// ======= START OF SCRIPTS FOR FOOTER ======
const year = new Date().getFullYear();
const cpyright = "Copyright &copy; UWB ACM " + year;
var footer_content =
  `
  <footer class="row d-flex justify-content-center">
    <div class="d-inline-block col-sm-4 footer-links">
      <a class="d-inline-block footer-links-text col-sm-12" href="#" title="UWB Hacks logo">Code of Conduct</a>
      <a class="d-inline-block footer-links-text col-sm-12" href="#" title="UWB Hacks logo">Email: uwbacm@uw.edu</a>
    </div>
    <div class="d-inline col-sm-8">
        <div class="d-inline-block footer-logo col-sm-3 mr-3"><img src="./images/TItle.png"/></div>
        <a class="d-inline-block footer-icons" href="https://discord.gg/YBrxBTg" target="_blank" title="discord"><span class="fab fa-discord"></span></a>
        <a class="d-inline-block footer-icons" href="https://www.facebook.com/uwbacm" target="_blank" title="facebook"><span class="fab fa-facebook" ></span></a>
        <a class="d-inline-block footer-icons" href="https://twitter.com/hacksuwb" target="_blank" title="twitter"><span class="fab fa-twitter" ></span></a>
        <a class="d-inline-block footer-icons" href="https://www.linkedin.com/organization-guest/company/uwb-acm-club" target="_blank"
        title="linkedin"><span class="fab fa-linkedin"></span></a>
        <a class="d-inline-block footer-icons" href="https://www.instagram.com/uwb_acm/" target="_blank" title="instagram"><span class="fab fa-instagram" ></span></a>
    </div>

    <div class="d-inline-block col-sm-12 mb-0">` +
  cpyright +
  `</div>

  </footer>
`;
document.getElementById("footer").innerHTML = footer_content;

// ======= START OF SCRIPTS FOR COUNT DOWN ======
if ((obj = document.getElementById("countdown"))) {
  const startDate = new Date("Apr 9, 2021 17:30:00").getTime();
  const endDate = new Date("Apr 11, 2021 00:00:00").getTime();
  var countDownDate = null;

  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    if (now < startDate) countDownDate = startDate;
    else countDownDate = endDate;

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="countdown"
    if (now < startDate)
      document.getElementById("box-title").innerHTML = "starts in";
    else if (now < endDate)
      document.getElementById("box-title").innerHTML = "ends in";
    else document.getElementById("box-title").innerHTML = "Hackathon concluded";
    document.getElementById("countdown").innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "See y'all next year !!";
    }
  }, 1000);
}
// ==========================================

const scriptURLContact =
  "https://script.google.com/macros/s/AKfycbwMmad4FvdgEuv1msTDpekCzzAsQYdcL_75SrCoS54NUiUw8lXCucEC/exec";
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("hello");
    const sendStatus = document.getElementById("send-msg-status");
    const SendButton = document.getElementById("btn-send-msg");
    SendButton.disabled = true;
    SendButton.style.color = "gray";
    SendButton.style.backgroundColor = "white";
    SendButton.style.pointerEvents = "none";
    SendButton.innerHTML = "Sending";
    fetch(scriptURLContact, { method: "POST", body: new FormData(contactForm) })
      .then((response) => {
        document.getElementById("send-msg-status").innerHTML =
          "&#10003; Message sent successfully! We'll get back to you ASAP";

        SendButton.innerHTML = "Send";
        SendButton.disabled = false;
        SendButton.style = "auto";
        contactForm.reset();
        setTimeout(function () {
          sendStatus.innerHTML = "";
        }, 4000);
      })
      .catch((error) => {
        // console.error('Error!', error.message);
        document.getElementById("send-msg-status").innerHTML =
          "<p style='color:red'>Error</p>";
      });
  });
}
