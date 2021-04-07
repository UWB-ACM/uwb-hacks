// ====== Start of scripts for submitting for Registration form =======
const startDate = new Date("Apr 9, 2021 00:00:00").getTime();
const currentTime = new Date().getTime();
if (currentTime - startDate >= 0) {
  // registration form closed on  April 9, 12:00AM
  document.getElementById("myform").style.display = "none";
  // show message
  document.getElementById("late-registration").style.display = "block";
} else {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbz6QHllrxx0cf1AxiKYU3-aXLCOSfvgOW9Fm1UIc7Y50rR5o73M5WL5DZ3VutneBDRaHw/exec";
  const form = document.forms["google-sheet"];
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    var SubmitBtn = document.getElementById("submit-btn");
    var PostStatus = document.getElementById("submit-status");
    SubmitBtn.disabled = true;
    SubmitBtn.innerHTML = "Submitting...";
    SubmitBtn.style.background = "lightgray";
    SubmitBtn.style.color = "#4a0078";
    SubmitBtn.style.pointerEvents = "none";
    getAllCheckboxes();

    //   PostStatus.innerHTML = "submitting...";
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        PostStatus.innerHTML =
          "&#10003; You've registered successfully!<br>Join us on discord to receive updates";
        SubmitBtn.innerHTML = "Submit";
        SubmitBtn.disabled = false;
        SubmitBtn.style = "auto";
        form.reset();
        setTimeout(function () {
          PostStatus.innerHTML = "";
        }, 4000);
      })
      .catch((error) => {
        // console.error('Error!', error.message);
        document.getElementById("submit-status").innerHTML =
          "<p style='color:red'>Error</p>";
      });
    // refresh();
  });
  function promptMembers() {
    const hasTeam = document.getElementById("compete-as-team");
    const team = document.getElementById("team-member");
    team.style.display = hasTeam.value == "I have a team" ? "block" : "none";
    document.getElementById("team-email").required =
      hasTeam.value == "I have a team" ? true : false;
  }
  function showElement(id) {
    document.getElementById(id).style.display = "block";
  }
  function hideElement(idName) {
    const othersObj = document.getElementById(idName);
    othersObj.style.display = "none";
  }
  function uncheckRadios(idName) {
    document.querySelectorAll("[id=" + idName + "]").forEach((element) => {
      element.checked = false;
      element.required = false;
    });
  }
  function getAllCheckboxes() {
    var result = "";
    document.querySelectorAll("[id=cb1]").forEach((element) => {
      if (element.checked) {
        result += element.value + ", ";
        // console.log(element.value);
      }
    });
    const cb2element = document.getElementById("cb2");
    // console.log(cb2element.value);
    result += cb2element.value;
    const element = document.getElementById("cb1");
    element.value = result;
    cb2element.value = result;
  }
  function refresh() {
    setTimeout(function () {
      window.location.reload();
    }, 6000);
  }
}
