import { useState, useEffect } from 'react'
import './App.css'

function App() {
  
  const[state,setState]=useState({
    provider:null,
    signer:null,
    contract:null
  })

  const[account,setAccount]=useState('Not Connected');

  useEffect(()=>{
    const template=async()=>{
      const contractAddress="";
      const contractABI="";
      //Metamask part
      //1.Inorder to do transactions on goreli testnet
      //2.Metamsk consists of Infura api which actually help in connecting to the blockchain

      try{
        const {ethereum}=window;

        const account=await ethereum.request({
          method:"eth_requestAccounts"
          //used to  pop-up metamask
        })
          const provider=new ethers.providers.Web3Provider(ethereum);//provider reads from blockchain
          const signer=provider.getSigner();//write to blockchain

          const contract = new ethers.Contract(
          contractAddress, //contract address identifies where your contract has been deployed
          contractABI, //used to talk to smart contract
          signer //used to do transactions in smart contract
        ) //creating an instance

      setState(provider,signer,contract);
      }catch(error){
        alert(error)
      }
     


      
    }
    template();
  },[])

  return (
  <div className="App"></div>
  )
}

export default App
