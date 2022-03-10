import Navbar from "../components/navbar";
import Footer from "../components/footer";
function Register() {
  return (
    <>
      <div className="wrapper">
        <Navbar />
        <div className="content">
          <div className="formcontainer">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = document.getElementById("rform");
                const data = new FormData(form);
                const action = process.env.REACT_APP_REG_URL;
                fetch(action, {
                  method: "POST",
                  body: data,
                }).then(() => {
                  alert("You have been registered!");
                });
              }}
              id="rform"
            >
              <h1 className="regTitle">Register</h1>
              <label className="labelTitle">
                First Name:
                <input
                  name="FirstName"
                  type="text"
                  placeholder="FirstName"
                  required
                />
              </label>
              <label className="labelTitle">
                Last Name:
                <input
                  name="LastName"
                  type="text"
                  placeholder="LastName"
                  required
                />
              </label>
              <label className="labelTitle">
                Email:
                <input name="Email" type="email" placeholder="Email" required />
              </label>
              <label className="labelTitle">
                Address:
                <input
                  name="Address"
                  type="text"
                  placeholder="Address"
                  required
                />
              </label>
              <input
                id="regBtn"
                className="registerBtn"
                type="submit"
                value="Register!"
              />
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Register;
