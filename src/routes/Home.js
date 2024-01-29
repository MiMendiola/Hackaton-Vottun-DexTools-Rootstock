import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";
import DApp from "../assets/home.jpg";

function Home() {
  return (
    <>
      <Navbar />
      <Hero 
        cName="hero"
        heroImg={DApp}
        title="Prestamos seguros y rápidos"
        text="Haz tu camino más fácil con nosotros"
        buttonText="Solicita tu Prestamo"  
        url="/service"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
