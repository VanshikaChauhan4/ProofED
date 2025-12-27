import { generateHash } from "./hash.service.js";

let blockchain = [];

export function addBlock(data) {
  const previousHash =
    blockchain.length === 0
      ? "GENESIS"
      : blockchain[blockchain.length - 1].hash;

  const block = {
    index: blockchain.length + 1,
    timestamp: Date.now(),
    data,
    previousHash,
    hash: generateHash({ data, previousHash })
  };

  blockchain.push(block);
  return block;
}

export function getChain() {
  return blockchain;
}
// backend/services/blockchain.service.js
export function writeToBlockchain(data) {
  // demo blockchain hash simulation
  return {
    txHash: "0x" + Math.random().toString(16).slice(2),
    timestamp: Date.now()
  }
}
