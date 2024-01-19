import './tokenItem.css'

function TokenItem(props) {
  let tokenName = props.tokenName
  let contractAddress = props.contractAddress

    return (
      <div className='token-container'>
        <div className='token-card'>
          <div className='token-text'>
            <h4>{tokenName}</h4>
          </div>
          <div className='token-text'>
            Token Contract Address: {contractAddress}
          </div>
          
          
        </div>
      </div>
    );
  }
  
  export default TokenItem;