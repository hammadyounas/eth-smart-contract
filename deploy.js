const HDWalletProvider  = require('truffle-hdwallet-provider');
const Web3  = require('web3');
const { interface , bytecode } =  require('./compile');

const provider = new HDWalletProvider(
    'call glow acoustic vintage front ring trade assist shuffle mimic volume reject',
    'https://rinkeby.infura.io/v3/9a69013bcd9e4324af2caaf34aa924d8'
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attemping to deploy from account',accounts[0]);

    const result = await web3.eth.Contract(JSON.parse(interface))
    .deploy({data: bytecode, arguments : ['Hi there!']})
    .send({gas: 1000000 , from: accounts[0] });
    console.log('contract deployed to',result.options.address);
};

deploy();