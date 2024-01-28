// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract PrestamoContrato is Ownable {

    address public token; // Dirección del token que se utilizará

    uint256 public maxMonto = 10000 * 1e18; // Monto máximo del préstamo en wei (1e18 es la unidad de Ethereum)
    uint256 public maxPlazoMeses = 96; // Plazo máximo en meses
    uint256 public tasaInteresAnual = 7; // Tasa de interés anual

    uint256 public porcentajePrestatario = 4; // Porcentaje del APR para el prestatario
    uint256 public constant APR_BASE = 100;

    struct Prestamo {
        address prestatario;
        uint256 monto;
        uint256 plazo;
        uint256 fechaInicio;
    }

    Prestamo[] public prestamos;

    event PrestamoCreado(uint256 indexed id, address prestatario, uint256 monto, uint256 plazo);

    constructor(address _token) Ownable(_token) {
        token = _token;
    }

    modifier validezMonto(uint256 _monto) {
        require(_monto > 0 && _monto <= maxMonto, unicode"Monto no válido");
        _;
    }

    modifier validezPlazo(uint256 _plazo) {
        require(_plazo > 0 && _plazo <= maxPlazoMeses, unicode"Plazo no válido");
        _;
    }

    modifier validezToken(uint256 _monto) {
        require(IERC20(token).balanceOf(msg.sender) >= _monto, "Fondos insuficientes");
        _;
    }

    function crearPrestamo(uint256 _monto, uint256 _plazo) external validezMonto(_monto) validezPlazo(_plazo) validezToken(_monto) {
        // Realizar la transferencia del token desde el prestatario al contrato
        IERC20(token).transferFrom(msg.sender, address(this), _monto);

        // Calcular los intereses y el monto total a devolver
        uint256 intereses = (_monto * tasaInteresAnual * _plazo) / (APR_BASE * 12 * 100);
        uint256 montoTotal = _monto + intereses;

        // Crear el nuevo préstamo
        Prestamo memory nuevoPrestamo = Prestamo({
            prestatario: msg.sender,
            monto: montoTotal,
            plazo: _plazo,
            fechaInicio: block.timestamp
        });

        prestamos.push(nuevoPrestamo);

        emit PrestamoCreado(prestamos.length - 1, msg.sender, montoTotal, _plazo);
    }

    // Otras funciones para implementar: transferencia de fondos, reembolso de préstamos, pagos automáticos, etc.
    function transferirFondos(uint256 _monto) external onlyOwner {
        IERC20(token).transfer(owner(), _monto);
    }

    function reembolsarPrestamo(uint256 _id) external {
        require(_id < prestamos.length, unicode"ID de préstamo no válido");

        Prestamo storage prestamo = prestamos[_id];
        require(msg.sender == prestamo.prestatario, unicode"Solo el prestatario puede reembolsar el préstamo");

        // Realizar la transferencia del monto total del préstamo desde el contrato al prestatario
        IERC20(token).transfer(prestamo.prestatario, prestamo.monto);

        // Eliminar el préstamo de la lista de préstamos
        delete prestamos[_id];
    }
}