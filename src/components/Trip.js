import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/viaje.jpg";
import Trip2 from "../assets/coche.jpeg";
import Trip3 from "../assets/casa2.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Productos Populares</h1>
      <p>Tus sueños a un solo click</p>
      <div className="trip-card">
        <TripData 
          image={Trip1}
          heading="Viaje por el mundo"
          text="Tenemos un producto diseñado especialmente para ti si lo que quieres es dinero inmediato para poder viajar. Accede a nuestro simulador y descubre cuanto dinero puedes obtener a un tipo de interes acorde a tus necesidades."
        />

        <TripData 
          image={Trip2}
          heading="Coche a medida"
          text="Disfruta de otro producto con un limite un poco mas alto para poder comprar tu nuevo coche."
        />

        <TripData 
          image={Trip3}
          heading="Compra tu casa"
          text="Nuestro producto estrella, con el que podras obtener hasta 100.000€ en tu cuenta bancaria en menos de 15 minutos. Sin papeleos ni preguntas. ¡Solicita tu préstamo ahora en tan solo 1 click!"
        />
      </div>
    </div>
  );
}

export default Trip;
