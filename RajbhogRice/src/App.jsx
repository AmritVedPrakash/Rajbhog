import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Brands from "./pages/Brands.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsCondition from "./pages/TermsCondition.jsx";
import ProductRange from "./pages/ProductRange.jsx";
import RajbhogProductsType from "./components/brand/RajbhogProductsType.jsx";
import IjazatProductType from "./components/brand/IjazatProductType.jsx";
import PakeezaProduct from "./components/brand/PakeezaProduct.jsx";
import SriKhand from "./components/brand/SriKhand.jsx";
import LalPattiProductType from "./components/brand/LalPattiProductType.jsx";
import HotelKingProductType from "./components/brand/HotelKingProductType.jsx";
import BiryaniproductType from "./components/brand/BiryaniproductType.jsx";
import TehzeebProductType from "./components/brand/TehzeebProductType.jsx";
import HukumatProtuctType from "./components/brand/HukumatProtuctType.jsx";
import Khazana from "./components/brand/Khazana.jsx";
import FlagshipBrand from "./components/brand/FlagshipBrand.jsx";
import SignatureRiceCollection from "./components/signature/SignatureRiceCollection.jsx";

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
        <Route path="/product-range" element={<ProductRange />} />
        <Route
          path="/brands/flagship-brands"
          element={
            <main className="pt-[76px] sm:pt-[82px]">
              <FlagshipBrand />
            </main>
          }
        />
        <Route
          path="/brands/signature-rice-collection"
          element={
            <main className="pt-[76px] sm:pt-[82px]">
              <SignatureRiceCollection />
            </main>
          }
        />
        <Route path="/brands/rajbhog" element={<RajbhogProductsType />} />
        <Route path="/brands/ijazat" element={<IjazatProductType />} />
        <Route path="/brands/pakeeza" element={<PakeezaProduct />} />
        <Route path="/brands/sri-khand" element={<SriKhand />} />
        <Route path="/brands/lal-patti" element={<LalPattiProductType />} />
        <Route path="/brands/hotel-king" element={<HotelKingProductType />} />
        <Route path="/brands/biryani-no-1" element={<BiryaniproductType />} />
        <Route path="/brands/tehzeeb" element={<TehzeebProductType />} />
        <Route path="/brands/hukumat" element={<HukumatProtuctType />} />
        <Route path="/brands/khazana" element={<Khazana />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-condition" element={<TermsCondition />} />
        
      </Routes>

      <Footer />
    </>
  );
}

export default App;