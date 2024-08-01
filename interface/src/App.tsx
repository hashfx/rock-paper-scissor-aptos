import React from 'react';
import logo from './logo.svg';
import './App.css';
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import { InputTransactionData, useWallet } from "@aptos-labs/wallet-adapter-react";
import styled from "styled-components";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";

const WindowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const WalletWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  background-color: #f0f0f0;
`;

const App: React.FC = () => {
  const { account, connected, signAndSubmitTransaction } = useWallet();

  return (
    <WindowWrapper>
      <WalletWrapper>
        <WalletSelector />
      </WalletWrapper>
      {connected ? (
        <h1>Wallet is connected</h1>
      ) : (
        <h1>Please connect your wallet to continue</h1>
      )}
    </WindowWrapper>
  );
};

export default App;
