const { Alchemy, Network } = require("alchemy-sdk");
// require('dotenv').config()

const config = {
    //REMEMBER TO REMOVE THE API KEY!!!
  apiKey: "2TEUCcyH0EYMHbTfybwcpWVJdIkwuYsT",
  network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(config);

const getHeldTokens = async (walletAddress) => {
    if(walletAddress === ""){
        return null
    } else{
        //Insert Address here after
        //Insert Condition for empty address, return empty array
        // const address = "0xAfB419DD07D62208c22257E65c807daEBa6C96Aa";
        const balances = await alchemy.core.getTokenBalances(walletAddress);
        // console.log(`The balances of ${address} address are:`, balances);
        return balances.tokenBalances
        
    }
  
};

const getContractMetadata = async (token) => {
    let data = await alchemy.core.getTokenMetadata(token)
    return data
}

const getBalances = async (walletAddress) => {
    if(walletAddress !== undefined){
        try {
            const response = await getHeldTokens(walletAddress);
            return response
        } catch (error) {
            console.log(error);
        }
    }
};

export { getBalances, getContractMetadata };