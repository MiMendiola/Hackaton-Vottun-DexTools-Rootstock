import React, { useState, useEffect } from 'react';
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import Web3 from 'web3';

const ROOTSTOCK_RPC_URL = 'https://public-node.rsk.co';

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    const checkWalletConnection = async () => {
      const provider = window.ethereum ? window.ethereum : new Web3.providers.HttpProvider(ROOTSTOCK_RPC_URL);
      const web3 = new Web3(provider);

      const accounts = await web3.eth.getAccounts();
      setIsWalletConnected(accounts.length > 0);
    };

    checkWalletConnection();
  }, []);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        setIsWalletConnected(true);
      } catch (error) {
        console.error("Error al conectar la wallet:", error);
      }
    } else {
      alert('Por favor, instala una wallet compatible con Rootstock para continuar.');
    }
  };

  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">RootLoans</h1>

      <div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                <i className={item.icon}></i>
                {item.title}
              </Link>
            </li>
          );
        })}
        {isWalletConnected ? (
          <button onClick={connectWallet}>Wallet Conectada</button>
        ) : (
          <button onClick={connectWallet}>Conectar Wallet</button>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
