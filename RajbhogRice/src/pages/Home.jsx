
import HeroSection from "../components/HeroSection.jsx";

import Metrix from "../components/home/metrix.jsx";
import AnimatedRice from "../components/home/AnimatedRice.jsx";
import AdvanceSkills from "../components/home/AdvanceSkills.jsx";
import OurProduct from "../components/home/OurProduct.jsx";
import OurProcess from "../components/home/OurProcess.jsx";
import OurCertifications from "../components/home/OurCertifications.jsx";
import ContactUs from "../components/home/ContactUs.jsx";

function Home() {
  return (
    <>
    

      <main>
        <HeroSection />
        <Metrix/>
        <AnimatedRice/>
        <AdvanceSkills/>
        <OurProduct/>
        <OurProcess/>
        <OurCertifications/>
        <ContactUs/>
        {/* <ServicesSection />
        <WhyChooseUs />
        <Testimonials />
        <CTASection /> */}
      </main>
      
    </>
  );
}

export default Home;
