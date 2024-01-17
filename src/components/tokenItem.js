import './tokenItem.css'

function TokenItem(props) {
  let tokenName = props.tokenName
  let contractAddress = props.contractAddress

    return (
      <div className='token-container'>
        <div className='token-card'>
          <div>
            <h4>{tokenName}</h4>
          </div>
          
          Token Contract Address: {contractAddress}
        </div>
      </div>
    );
  }
  
  export default TokenItem;