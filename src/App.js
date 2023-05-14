import "./styles.css";
import Web3 from "web3";
import MintForm from "./MintForm";

export default function App() {
  // const web3 = new Web3(Web3.givenProvider);
  // console.log(web3);
  return (
    <div className="App">
      <MintForm />
    </div>
  );
}
