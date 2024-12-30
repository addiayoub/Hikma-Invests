import HeroSection from "./Sections/HeroSection.jsx";
import OurService from "./Sections/OurService.jsx";
import Footer from "./Sections/Footer.jsx";
import TestimonialSection from "./Sections/TestimonialSection.jsx";
import ContactSection from "./Sections/ContactSection.jsx";
import BlogSection from "./Sections/BlogSection.jsx";

const Hero = () => {
  return (
    <div className="w-full-">
      <HeroSection />
      <OurService />
      <TestimonialSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Hero;
