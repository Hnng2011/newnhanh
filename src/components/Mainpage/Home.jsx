import React from "react";
import base from "../../assets/base.jpg";
import imgageship2 from "../../assets/ship2.png";
import { Link } from "react-router-dom";
import {
  useAccount,
  useConnect,
  useContractWrite,
  usePrepareContractWrite,
  parseEther,
} from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

const Home = () => {
  const { address } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { config, error } = usePrepareContractWrite({
    address: "0x5b0ee1d2dff7b382929dc563a4b62a38d1a3649c",
    abi: [
      {
        inputs: [],
        name: "mintNFT",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
    ],
    functionName: "mintNFT",
  });
  const { write, isLoading } = useContractWrite(config);

  return (
    <div className="glitch-wrapper">
      <img className="ship" src={imgageship2} alt="spaceship" />
      <div className="glitch" data-glitch="BaseX">
        BaseX
      </div>
      <div className="mainpage">
        <h1>Build On Base</h1>
        <img src={base} />
      </div>
      <button
        className="launch-app-button"
        onClick={address ? () => write?.() : () => connect()}
      >
        {isLoading ? <div class="loader"></div> : "Mint"}
      </button>
    </div>
  );
};

export default Home;
