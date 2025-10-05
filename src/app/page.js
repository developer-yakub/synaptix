import { NavbarDemo } from "@/components/Navbar";
import { BackgroundBoxesDemoTail } from "@/components/SectionTwo";
import { BackgroundBeamsDemo } from "@/components/SectionThree";
import { BackgroundBeamsWithCollisionDemo } from "@/components/SectionFour";
import { CometCardDemo } from "@/components/CustomCometCard";
import SynaptixLanding from "@/components/RegisterWithSynaptixForSchool";
import SynaptixGallery from "@/components/SynaptixGallery";
import IdeasSection from "@/components/IdeasSection";
import CustomizeSection from "@/components/CustomizeSection";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";


const page = () => {
  return (
    <div className="">
      <div className="relative bottom-13">
        <div id="#">
        <NavbarDemo />
        </div>
        <div id="services">
        <BackgroundBeamsDemo />
        </div>
        <div id="register">
        <SynaptixLanding />
        </div>
        <div id="gallery">
        <SynaptixGallery />
        </div>
        <IdeasSection />
        <CustomizeSection />
        <div id="about">
        <About />
        </div>
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default page;
