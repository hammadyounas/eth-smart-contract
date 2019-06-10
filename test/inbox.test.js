const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const { interface , bytecode } = require('../compile');

class Car {
  park () {
    return 'stopped'
  }

  driver () {
    return 'vroom'
  }
}

// let car;
let accounts;
let inbox;

beforeEach(async () => {
  // get a list of all accounts
  accounts = await web3.eth.getAccounts();

  inbox = await new web3.eth.Contract(JSON.parse(interface))
  .deploy({data: bytecode, arguments: ['Hi there!']})
  .send({from: accounts[0], gas: '1000000'});
  // car = new Car();
})

describe('inbox', () => {
    // this.enableTimeouts(false)

  it('deploys a contract', () => {
    // this.timeout(20000);
    // console.log(accounts)
    // console.log(inbox);
    // done();
  })
})
// describe('Car', () => {
//     it('can park', () => {
//         assert.equal(car.park(), 'stopped');
//     });

//     it('can drive', () => {
//         assert.equal(car.driver(), 'vroom');
//     })
// });
