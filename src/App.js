import { useState } from 'react';
import { Route, Routes } from "react-router-dom"
//import { ethers } from 'ethers';
import './styles.css';
import Navbar from "./Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Companies from './pages/Companies';
import Faq from './pages/Faq';
import Nfts from './pages/Nfts';
import Services from './pages/Services';

function App() {
  // Properties
  const [walletAddress, setWalletAddress] = useState("");

    // Helper Functions

  // Requests access to the user's META MASK WALLET
  // https://metamask.io
  async function requestAccount() {
    console.log('Requesting account...');

    // ❌ Check if Meta Mask Extension exists 
    if(window.ethereum) {
      console.log('detected');

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.log('Error connecting...');
      }

    } else {
      alert('Meta Mask not detected');
    }
  }

  // Create a provider to interact with a smart contract
  /*async function connectWallet() {
    if(typeof window.ethereum !== 'undefined') {
      await requestAccount();

      const provider = new ethers.providers.Web3Provider(window.ethereum);
    }
  }*/




  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/nfts" element={<Nfts />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
      <header className="App-header">

        <button onClick={requestAccount}>Request Account</button>
        <h3>Wallet Address: {walletAddress.slice(0, 6) + '...' + walletAddress.slice(38, 42)}</h3>
      </header>
    </>
  )
}

export default App
