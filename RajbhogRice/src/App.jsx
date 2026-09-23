import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Brands from "./pages/Brands.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsCondition from "./pages/TermsCondition.jsx";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/brands" element={<Brands/>} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-condition" element={<TermsCondition />} />
        
      </Routes>

      <Footer />
    </>
  );
}

export default App;