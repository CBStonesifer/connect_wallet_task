import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThirdwebProvider, ChainId, useAddress, metamaskWallet, phantomWallet } from '@thirdweb-dev/react'


const desiredChainId = ChainId.Mainnet

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <ThirdwebProvider
      activeChain={desiredChainId}
      clientId="358074a0d9e3cd545a58e0925761970f"
      supportedWallets={[
        metamaskWallet({ recommended: true }),
        phantomWallet({ recommended: true }),
      ]}
    >
        <App/>
    </ThirdwebProvider>   
  </div>
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
