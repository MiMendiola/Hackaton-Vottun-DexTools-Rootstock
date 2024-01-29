import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/servicios.jpg";
import Footer from "../components/Footer";
import Services from "../components/Services";

function Service() {
  return (
    <>
      <Navbar />
      <Hero 
        cName="hero-mid"
        heroImg={AboutImg}
        title="Nuestros Servicios"
        btnClass="hide"
      />
      <Services />
      <Footer />
    </>
  );
}

export default Service;
