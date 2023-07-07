const { MerkleTree } = require("merkletreejs");
const keccak256 = require("keccak256");

// List of 7 public Ethereum addresses
let addresses = [
  '0x813c6726e40cbcdff33d27324b9ae77a4e4d43fd',
  '0xb13dAc27BEbF08778ac5aEC9387E56413773B875',
];

const leaves = addresses.map((addr) => keccak256(addr));
const merkleTree = new MerkleTree(leaves, keccak256, { sortPairs: true });
const allowlistRootHash = merkleTree.getHexRoot();

console.log("allowlistRootHash:", allowlistRootHash);