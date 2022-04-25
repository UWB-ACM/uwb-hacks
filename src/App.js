import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Contact from "./pages/contact";
import FAQ from "./pages/faq";
import Register from "./pages/register";
import Home from "./pages/home";
import Sponsors from "./pages/sponsors";
import "./styles/footer.css";
import "./styles/app.css";
import "./styles/navbar.css";
import "./styles/home.css";
import "./styles/contact.css";
import "./styles/register.css";
import "./styles/form.css";
import "./styles/faq.css";
function App() {
  return (
    <div className="container">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="sponsors" element={<Sponsors />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<FAQ />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
