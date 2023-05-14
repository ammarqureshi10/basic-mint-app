import React, { useState } from "react";
// import AccountBalanceWalletTwoToneIcon from '@mui/icons-material/AccountBalanceWalletTwoTone';

const MintForm = () => {
  const [account, setAccount] = useState("0x");
  const [contract, setContract] = useState("");

  // NFT data
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  async function handleSubmit(e) {
    if (!!account && !!name && !!description && !!image) {
      e.preventDefault();
      const obj = {
        name: name,
        description: description,
        image: image
      };
      console.log("selected contract: ", contract);
      console.log("NFT obj: ", obj);
    } else {
      e.preventDefault();
      alert("handleSubmit: Account not connected");
    }
  }

  return (
    <>
      <h1>NFT Mint App</h1>
      <button>Connect Wallet </button>
      <br />
      <hr />
      <br />
      {/* <label>Hello: <button>hello</button></label> */}
      <center>
        <form
          onSubmit={handleSubmit}
          // style={{ borderStyle: "groove" /* height: "100px", width: "30%" */ }}
        >
          <label>
            <b>{`Select Contract: `}</b>
          </label>
          <select onChange={(e) => setContract(e.target.value)}>
            <option value="none">none</option>
            <option value="art">ART</option>
            <option value="soccer">SOCCER</option>
            <option value="fashion">FASHION</option>
          </select>
          <br />
          <br />
          <label>
            {`NFT Name:`}
            <input
              type="text"
              placeholder=""
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <br />
          <br />
          <label>
            {`NFT Description:`}
            <input
              type="text"
              placeholder=""
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <br />
          <br />
          <label>
            {`NFT Image:`}
            <input
              type="file"
              required
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </label>
          <br />
          <br />

          <input type="submit" />
        </form>
      </center>
    </>
  );
};
export default MintForm;
