import React, { useState } from 'react';
import "./LoanCalculatorStyles.css";

const LoanCalculatorPopup = ({ show, handleClose }) => {
  const [loanAmount, setLoanAmount] = useState(500);
  const [repaymentMonths, setRepaymentMonths] = useState(6);


  const interestRate = 0.064; // 6.4%
  const annualPercentageRate = 0.068; // 6.8%

  const calculateMonthlyPayment = (amount, months, rate) => {
    const monthlyRate = rate / 12;
    const payment = amount * monthlyRate / (1 - Math.pow(1 + monthlyRate, -months));
    return payment.toFixed(2);
  };

  const monthlyPayment = calculateMonthlyPayment(loanAmount, repaymentMonths, interestRate);
  const totalInterest = (monthlyPayment * repaymentMonths - loanAmount).toFixed(2);
  const totalRepayment = (parseFloat(monthlyPayment) * repaymentMonths).toFixed(2);

  if (!show) {
    return null;
  }

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Calculadora de Préstamos</h5>
          <button type="button" className="close-button" onClick={handleClose}>&times;</button>
        </div>
        <div className="modal-body">
          <div className="loan-calculator">
            <label>Monto del Préstamo: {loanAmount} €</label>
            <input
              type="range"
              min="100"
              max="10000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
            />
            <label>Plazo de Devolución: {repaymentMonths} meses</label>
            <input
              type="range"
              min="3"
              max="60"
              value={repaymentMonths}
              onChange={(e) => setRepaymentMonths(Number(e.target.value))}
            />
          </div>
          <div className="loan-summary">
            <p>Cuota Mensual: {monthlyPayment} €</p>
            <p>Total Intereses: {totalInterest} €</p>
            <p>Total a Pagar: {totalRepayment} €</p>
            <p>Tasa Anual Equivalente (TAE): {(annualPercentageRate * 100).toFixed(2)}%</p>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="apply-button" onClick={handleClose}>Solicitar Préstamo</button>
        </div>
      </div>
    </div>
  );
};

export default LoanCalculatorPopup;
