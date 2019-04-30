const options = {
  web3: {
    block: false,
    fallback: {
      type: "ws",
      url: "wss://rinkeby.infura.io/ws",
    },
  },
  polls: {
    accounts: 1500,
  },
};

export default options;
