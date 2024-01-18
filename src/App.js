import './App.css';
import { getBalances, getContractMetadata } from './api/indexer.api';
import { useEffect, useState } from 'react'
import TokenItem from './components/tokenItem';

import { ConnectWallet, lightTheme, useAddress } from '@thirdweb-dev/react';

function App() {
  const myAddress = useAddress()
  const [tokenData, setMyTokenData] = useState([])
  const [inputAddress, setInputAddress] = useState("")
  

  async function handleTokenBalances() {
    setMyTokenData([]);
    const result = await getBalances(inputAddress);
  
    try {
      await Promise.all(
        result.map(async (tkn) => {
          let metaData = await getContractMetadata(tkn.contractAddress);
          setMyTokenData((tokenData) => [
            ...tokenData,
            {
              contractAddress: tkn.contractAddress,
              tokenBalance: tkn.tokenBalance,
              tokenSymbol: metaData.symbol,
            },
          ]);
        })
      );
    } catch (error) {
      console.log(error);
    }
  }

  function handleInputAddress(event){
    setInputAddress(event.target.value)
  }

  function handleDefaultAddress(){
    if(myAddress === undefined){
      return inputAddress
    } else {
      console.log(`Handling address:\n ${myAddress}`)
      return myAddress
    }
  }


  // useEffect(() => {
  //   console.log(`My address: ${myAddress}`)
  //   let currentAddress = handleDefaultAddress()
  //   const fetchDataFromBackend = async (inputAddress) => {
  //     try {
  //       const result = await getBalances(inputAddress);
  //       if(result !== undefined){
  //         setMyTokenData(result)
  //       }
  //     } catch (error) {
  //       // Handle errors if needed
  //     }
  //   };
  //   fetchDataFromBackend();
  // }, [myAddress]);
  useEffect(()=>{
    console.log(`My address: ${myAddress}`)

  }, [myAddress])

  return (
    
    <div className="full_page">
      <div className='Connect-Container'>
      <ConnectWallet
        theme={lightTheme({
          colors: {
            accentText: "#3dd8ff",
            accentButtonBg: "#079fc5",
            modalBg: "#ffffff",
            dropdownBg: "#ffffff",
            borderColor: "#6b6d76",
            primaryText: "#bc43f4",
            primaryButtonBg: "#d243e5",
          },
        })}
        modalTitle={"Wallet"}
        modalSize={"wide"}
      />
      </div>
      <div className="App">
        <h1 className='heading_title'>Connect Wallet</h1>
        <h4>{myAddress}</h4>
        <div>
          <input 
            className="address_input" 
            type="text" 
            placeholder='Paste Public Address...'
            onChange={handleInputAddress}
            />
          <button className='view-submit' onClick={()=>handleTokenBalances()}>View Tokens</button>
        </div>
        <div>
          {tokenData.map((token, index) => {
            return(
              <div key={index+1}>
                <TokenItem
                tokenName={token.tokenSymbol} 
                contractAddress={token.contractAddress}
                />
              </div>
            )}  
          )}
        </div>
        
        
      </div>
    </div>
  );
}

export default App;
