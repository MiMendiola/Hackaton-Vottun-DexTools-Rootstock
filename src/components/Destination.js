import casa from "../assets/casa.jpg";
import casa1 from "../assets/casa1.jpg";
import viaje from "../assets/paris.jpg";
import viaje1 from "../assets/gondola.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Nuestros Productos Estrella</h1>
      <p>Vive tus sueños con nosotros</p>

      <DestinationData
        className="first-dest"
        heading="Compra tu casa"
        text="Pide tu prestamo a un tipo de interes acorde a tus necesidades y compra esa casa que tanto te mereces y deseas."
        img1={casa}
        img2={casa1}
      />
      <DestinationData
        className="first-dest-reverse"
        heading="Viaja por el mundo"
        text="Si lo que deseas es obtener dinero para poder realizar el viaje de tus sueños, con nuestros productos tendras la oportunidad de hacerlo al instante."
        img1={viaje}
        img2={viaje1}
      />
    </div>
  );
};

export default Destination;
