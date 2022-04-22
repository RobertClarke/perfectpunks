import { ethers } from "ethers";
import Artifact from './Contract.json';

// For example here, interact with Alchemy JSON-RPC
const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545");

const contractAddress = "0x9fE4...";

const contract = new ethers.Contract(
    contractAddress,
    Artifact.abi,
    provider
);

// Call a getter method
const contractName = await contract.name();
console.log(`Contract name is ${contractName}`);