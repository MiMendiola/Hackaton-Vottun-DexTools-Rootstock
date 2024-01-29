import React, { useState } from 'react';
import "./ServicesStyles.css";
import LoanCalculatorPopup from "./LoanCalculator";
import ServicesData from "./ServicesData";
import Service2 from "../assets/prestamo.jpg";
import Services2 from "../assets/prestamo1.jpg";
import Services3 from "../assets/servici3.png";

function Services() {
  const [showCalculator, setShowCalculator] = useState(false);

  const handleOpenCalculator = () => setShowCalculator(true);
  const handleCloseCalculator = () => setShowCalculator(false);

  return (
    <div className="services">
      <h1>Productos Destacados</h1>
      <p>Cumple tus sueños con estos productos</p>
      <div className="services-card">
        <ServicesData 
          image={Services3}
          heading="Prestamos B2B"
          text="Accede a nuestro simulador y descubre como ganar hasta un 4% APR concediendo prestamos a empresas."
        />

        <ServicesData 
          image={Service2}
          heading="Prestamos P2P"
          text="Recibe hasta 10.000€ en tu cuenta bancaria en menos de 15 minutos. Sin papeleos ni preguntas. ¡Solicita tu préstamo ahora en tan solo 1 click!"
          onClick={handleOpenCalculator}
        />

        <ServicesData 
          image={Services2}
          heading="Refinancia tu prestamo"
          text="Si ya tienes un prestamo con nosotros y quieres refinanciarlo, accede a nuestro simulador y descubre cuanto dinero puedes obtener a un tipo de interes acorde a tus necesidades."
        />
      </div>
      <LoanCalculatorPopup show={showCalculator} handleClose={handleCloseCalculator} />
    </div>
  );
}

export default Services;
