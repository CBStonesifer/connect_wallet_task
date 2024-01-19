# Connect Wallet Task

## Chains and Third Party Services

For this project, I chose to focus on the **Ethereum Mainnet** capabilities.

I used **Alchemy**'s Indexer as my service of choice for the retrieval of a wallet's tokens.
 - This is primarily because Alchemy is compatible with a great number of other blockchains should this project be extended
 - The API is well-maintained and easy to use for development
 - Thorough API calls for retrieving tokens held, token balances, and those tokens' metadata. I chose to display the tokens' tickers

I also chose to use **ThirdWeb**'s API as an external service for connecting Web3 Wallets.
  - ThirdWeb's API is also highly compatible with several different blockchains and different wallet
  - The API feels out-of-the-box and includes configuration features online
  - I also attempted to use WalletConnect, but the installation broke every time, even with other package managers

## Use and Testing of the dApp

The dApp is fairly straightforward. Upon opening, a button lies in the top right corner that will prompt ThirdWeb's wallet connection. For this project, I chose only to configure PhantomWallet and MetaMask.

Center-screen, there is a large textbox followed by two buttons. The first button will retrieve and render the tokens of the address input into the textbox. The second button will get the tokens of the connected wallet.
Failure to connect a wallet or input an address will result in the webpage prompting you to either connect your wallet or input a valid address depending on whichever information is not present.

The project is hosted on Vercel online, no specific installation is needed if run locally other than `npm install`.

#

### Known bugs

I was not able to configure a `.env` file because even after requiring dotenv and configuring it in the application files, the error that `process` is undefined persisted.
