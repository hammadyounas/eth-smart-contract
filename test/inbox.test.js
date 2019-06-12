
const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const OPTIONS = {
  defaultBlock: "latest",
  transactionConfirmationBlocks: 1,
  transactionBlockTimeout: 5
};
const web3 = new Web3(ganache.provider(), null, OPTIONS);

// const web3 = new Web3(ganache.provider());
const { interface,bytecode} = require('../compile');

let accounts;
let inbox;
let initial_message = 'Hi there!';

beforeEach(async() => {

  accounts = await web3.eth.getAccounts();

  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data: bytecode, arguments:[initial_message] })
    .send({from: accounts[1], gas:'1000000'});
});

describe("inbox", () => {
  it('deploys a contract', () => {
    assert.ok(inbox.options.address);
    // console.log(inbox);
  });

  it('has a default message', async () =>{
    const message = await inbox.methods.message().call();
    assert.equal(message , initial_message);
  })

  it('can change the message', async () => {
    await inbox.methods.setMessage('bye').send({from : accounts[0]});
    const message = await inbox.methods.message().call();

    assert.equal(message,'bye');
  })
})


// const assert = require('assert');
// const ganache = require('ganache-cli');
// const Web3 = require('web3');
// const web3 = new Web3(ganache.provider());
// const { interface , bytecode } = require('../compile');

// class Car {
//   park () {
//     return 'stopped'
//   }

//   driver () {
//     return 'vroom'
//   }
// }

// // let car;
// let accounts;
// let inbox;

// beforeEach(async () => {
//   // get a list of all accounts
//   accounts = await web3.eth.getAccounts();

//   inbox = await new web3.eth.Contract(JSON.parse(interface))
//   .deploy({data: bytecode, arguments: ['Hi there!']})
//   .send({ from: accounts[0], gas: '1000000'});
// })

// describe('inbox', () => {
//     // this.enableTimeouts(false)

//   it('deploys a contract', () => {
//     // this.timeout(20000);
//     // console.log(accounts)
//     console.log(inbox);
//     // done();
//   })
// })
// // describe('Car', () => {
// //     it('can park', () => {
// //         assert.equal(car.park(), 'stopped');
// //     });

// //     it('can drive', () => {
// //         assert.equal(car.driver(), 'vroom');
// //     })
// // });
