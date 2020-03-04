# Notes

## What is a Blockchain

We can use an analogy to understand how a blockchain works. Let's consider a bank.
Suppose that Alice wants to send money to Bob via a wire transfer. All of Alice's
money is stored inside a bank account, which has two primary purposes. It keeps
track of how much money she has and it provides an online portal that allows her to
perform the transfer to Bob. Behind the scenes, the bank has two primary technical
features that make this possible:

1. Database: The bank maintains a database ledger of all of Alice's transaction to
determine her account balance and transaction history.
2. Network: The bank uses a network to process wire transfers so that funds can be
transferred from her account's to Bob's account.

**Blockchain** presents an alternative to this model by eliminating the need for a bank
altogether. Instead of sending money to Bob via wire transfer, Alice can send him
cryptocurrency directly with a blockchain. Much like a bank, the Blockchain gives Alice
a place to safely store her funds and send money to Bob. It replaces the two primary
technical features of a bank; a *database*, as the blockchain also keeps track of how
much money Alice has and a *Network* as Alice can connect to a blockchain in order to
send money. Once she does so, the blockchain processes her transaction and moves the funds
from her account to Bob's. Because a blockchain serves both of these vital roles, we can think
of a blockchain as both a network and a database at the same time.

A Blockchain is a Peer-to-peer network, meaning it is a system of nodes or computers that all
talk to each another. It is responsible for processing transactions, so that Alice can send money
to Bob. Alice simply needs to connect to a node on the network in order to initiate the
transaction and the blockchain handles the rest behind-the-scenes.
Since a blockchain also functions as a database, each node on the network maintains a copy of
all the data on the blockchain. For e.g., every node knows how much money Alice has on her account.
Instead of a bank storing all that data in a central database, the blockchain stores it
redundantly on each node on the network. This makes it virtually impossible to tamper with the
data. For e.g., Alice can't manipulate her account balance because all of the other nodes knows
exactly how much money she really has.

It is important to note that *Blockchain* and *Cryptocurrency* are not the same thing. *Bitcoin* is
a cryptocurrency, but Blockchain is the underlying technology behind Bitcoin. Apart from Cryptos,
Blockchains can be used in various other scenarios.

## How does a Blockchain work

Suppose Alice wants to send some Bitcoin to Bob. In order to do this, both of them need an
account on the Bitcoin blockchain. Their accounts are much like their usernames. Alice must
know Bob's username or account address in order to send the crypto to him. Next, Alice needs
a Bitcoin wallet in order to send the transaction. The transaction is a three step process;
First, Alice enters Bob's account address as the recipient, then she specifies the amount of
Bitcoin she wants to send. Finally, Alice *signs* the transaction in order to make it official.
In the last step, Alice signs the transaction with her *private key*. If the account address is like
a username, then the private key is like the password to the account. Private key is sensitive data
stored inside a Wallet that Alice shouldn't share with anybody. Alice's private key allows her to
create digital signatures that authorise her transactions on the Blockchain, like sending BTC to Bob.
That's all that Alice needs to do in order to send the crypto. The rest is processed behind the scenes on
the blockchain.

After Alice's transaction has been signed, it is sent to the bitcoin network. A select group of nodes
called **miners** process her transaction and record it to the blockchain. These bitcoin miners must solve
the mathematical puzzle called a **Proof of Work** problem in order to record Alice's transaction.
Each miner compete with one another to solve the cryptographic puzzle where the must correctly guess a
random encrypted number called a *nonce*. The miner then guesses this number first, submits their answer,
which is their *Proof of Work* and authorises them to record the transaction to the blockchain and they
get a reward for winning the mining competition. Whenever a transaction is recorded, the miner creates a
new transaction record on the blockchain. Grouping of these transactions is called a **Block**. Blocks get
chained together to form the Blockchain. During the mining process, the network reaches **Consensus** meaning
that each node verifies that they have the same valid data as everyone else. This is called the **Consensus Algorithm**
Effectively, each node says that 'Yes' I have a valid copy of the transaction. If all nodes respond 'Yes', then the
transaction is complete finally the crypto gets transferred from Alice's wallet to Bob's.

## Why do we need Blockchain

Continuing with the banking example, some reasons that Alice might choose Blockchain over a conventional Banking
solution are;

1. One reason is **Transaction speed**. While international wire transfer can take days, Alice can send Bitcoin
almost instantly.
2. Another reason is **Transaction fees**. In case of huge payments to merchants, wire transfer incurs a large
fees while blockchain only incurs a small transaction fee.
3. **Lack of third parties**: both parties don't need to sign any contract in order to send money.
4. **Transparency**: Instead of a bank storing all the data, Alice can verify the account balance and
transaction history on a secure network.
5. Another reason is **Security** as Traditional databases and IT Systems are very vulnerable to attacks while
in Blockchain it is virtually impossible to hack the public ledger in order to change Alice's wallet balance or
transaction history.
6. **Anti Fraud**: Blockchain transactions are publicly verifiable and it is very hard to fake transactions or
embezzle funds.

## How to become a blockchain developer

Up until now, we have been discussing about how to send money using Blockchain. But it is also possible to build
applications using Blockchain. Unfortunately, Bitcoin is pretty limited in this, so we use a different blockchain
called **Ethereum** for development purposes. In addition to sending cryptocurrency, Ethereum allows developers to build
**Decentralised applications** or **DApps** which run on the blockchain. Ethereum achieves this using **Smart Contracts**
which are programs that run on the blockchain.

## How a Web Application works

Normally, when we use a web application, we use a Web browser to load a web page which talks to a central web server over
a network. All the code for this app lives inside the central server and all of the data is housed inside a central
database. Anytime we transact with this application, we must transact directly with this central server. This can lead
to several problems. The application creators can change the code on the server or the data on the server anytime because
they have full control. We can eliminate this using the blockchain.

## How a Blockchain App works

We can use a browser to load a webpage and that talks directly to the blockchain instead of a backend server and database. We
can store all of our application code and data on the blockchain instead of the central server. This is a transparent and
trust-worthy way of knowing that the application code and data won't change. All of the backend code for the application would
be made up of Smart Contracts. These are the building blocks of a blockchain application. All of code of the Smart Contract is
unchangeable. Once the code is sent on the blockchain, no one can update or tamper with it and we know that it'll work the
same way every single time.

Smart Contracts are written in a programming language called **Solidity**, which looks a lot like *JavaScript*. They are in-charge
of reading and writing the data to and from the blockchain and executing an business logic that we write. Smart Contracts work
a lot like micro-services on the web. They are called so because they represent an unchangeable digital agreement.
All of the data on the application will be stored as transaction records inside the blocks on the blockchain.

### Dependencies for dAPP development

1. **nodeJS**
2. **Ganache**: It offers a personal blockchain, which is like a real blockchain network but it runs on a computer, and hence is a
closed network. We can use this to develop Smart Contracts, run tests against the network, develop applications that talk
to the blockchain.
3. **Truffle Framework**: Used to develop Ethereum Smart Contracts with Solidity.
4. **Metamask**: A Chromium based extension; used to connect to the blockchain network. Metamask allows us to connect to
the blockchain with our personal account, and interact with smart contracts.

### Project Setup

Use `trufle init` in the command line or run `git clone https://github.com/dappuniversity/starter_kit project-name`
to use a pre-made template.

In the project directory, the `truffle-config.js` file is used to configure the truffle project like tell it the blockchain we
want to connect to. Unlike the `trufle init` command, the template expects the contracts and their ABIs in a folder called
`social-network/src/contracts`. These contracts placed in the folder can be exposed to the client-side application made in
the same directory easily.

We can download all dependencies using `npm` with the command `npm install` while in the project directory.

### Development server

We can run the development server with: `npm run start` in the terminal. This also opens a web browser tab with the
React frontend template.

### Smart Contract Development Basics

Create a new file titled `SocialNetwork.sol` in the `social_network/src/contracts` directory.

```solidity
pragma solidity ^0.5.0; // Version of Solidity - 0.5.0 or greater

contract SocialNetwork {
  string public name;

  constructor() public {
    name = "skhiearth";
  }
}
```

We can compile all Smart Contracts using `truffle compile` in the Terminal.
Compiling also produces the `ABI` for all the contracts in the `social_network/src/abis`
directory, which are essentially JSON representations of the contracts.

Then in the `social_network/migrations` directory, we create a new file titled
`2_deploy_contracts.js` which helps in migrating the contracts to the development blockchain.
The contents of the file are:

```javascript
const SocialNetwork = artifacts.require("SocialNetwork");

module.exports = function(deployer) {
  deployer.deploy(SocialNetwork);
};
```

We run this migration file using `truffle migrate` in the shell.

We can try to interact with the contracts in the console (for development and debugging purposes):
Firstly, run `truffle console` in the Terminal. In this console, we have access to a
JavaScript runtime environment where we can interact with smart contracts deployed to our network.
Essentially, we can write jS inside the console.

We fetch the Smart Contract we deployed; type the Contract Name followed by `.deployed()` in the console:
`SocialNetwork.deployed()` and press Return.

Because these requests are asynchronous, we can't assign the result to a variable, so we use the following:

```shell
contract = await SocialNetwork.deployed()
contract.address // To fetch the unique address of the contract - where it is located on the chain
name = await contract.name() // Another async call
name // Print the name
```

#### Smart Contract Tests

To run **tests** on Smart Contracts to automate debugging, we create another file in a new directory
`social_network/test` and create the test suite file called `social_network/test/SocialNetwork.js`. We can
use the **Mocha** test framework to write testing frameworks and the **Chai Assertion Library** to write
test assertions. Both of these libraries are part of the **Truffle Suite**.

Inside the file;

```javascript
const SocialNetwork = artifacts.require('./SocialNetwork.sol')

require('chai')
  .use(require('chai-as-promised'))
  .should()

contract('SocialNetwork', (accounts) => {
  let socialNetwork // Variable to represent deployed Smart Contract

  before(async () => {
    socialNetwork = await SocialNetwork.deployed()
  })

  describe('deployement', async () => {
    it('deploys successfully', async () => {
      const address = await socialNetwork.address
      assert.notEqual(address, 0x0)
      assert.notEqual(address, '')
      assert.notEqual(address, null)
      assert.notEqual(address, undefined)
    })

    it('has a name', async () => {
      const name = await socialNetwork.name()
      assert.equal(name, 'skhiearth')
    })
  })
})
```

To run tests, `truffle tests` in the terminal.

### Gas

Anytime we write new information to the blockchain itself, we have to pay a **gas fee**.
Like anytime we send a cryptocurrency from one account to another, we have to pay a
transaction fee to do this. Likewise, calling a function that updates the chain or
creating a Smart Contract, we also pay the gas.
In Solidity, there are two types of functions: *read* and *write*. Read functions are
free but write functions cost gas because they actually change the blockchain.
**Gas** is basically a transaction fee paid in Ether, Ethereum's native cryptocurrency, and
one must have Ether in order to create transactions on the Ethereum network.

### Deploying Smart Contract

`truffle migrate --reset`

The `reset` flag puts a new copy of the contract on the blockchain.

### Front-end for dAPP using React

With smart contracts migrated, we can start building the front-end for the decentralized application.
The main JavaScript file for the front-end application is present in the `social_network/src/components`
directory and is called `App.js`.
React is a component-based library that allows us to write JavaScript in form of reusable components. It
mixed JavaScript with HTML. Concisely, everything inside the `return` block in React is the HTML that is
rendered on to the page from the `render()` method.

To connect the web application to the blockchain, we use the `web3.js` library and `Metamask` helps in converting
the web browser to a Blockchain browser.
We import the library as;

```JavaScript
import Web3 from 'web3';
```

Once imported, we can just load our connection to the blockchain inside of a special function;

```JavaScript
class App extends Component {

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
    } else {
        window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
  }

}
```

After defining the function, we want to call it whenever the React `Component` is loaded. React has some
special functions for this;

```JavaScript
class App extends Component {

  async componentWillMount() {
    await this.loadWeb3()
  }

}
```

To load data from the blockchain, like account;

```JavaScript
class App extends Component {

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadBlockchainData() {
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts()
    this.setState({account: accounts[0]})
  }

  constructor(props) {
    super(props)
    this.state = {
      account: ''
    }
  }

}
```

To add smart contracts to the app;

```JavaScript
import SocialNetwork from 'social_network/src/abis/SocialNetwork.json'

class App extends Component {

  async loadBlockchainData() {
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts()
    this.setState({account: accounts[0]})

    const networkId = await web3.eth.net.getId()
    const networkData = SocialNetwork.networks[networkId]
    if(networkData) {
      const socialNetwork = web3.eth.Contract(SocialNetwork.abi, networkData.address)
    } else {
      window.alert('SocialNetwork contract not deployed to detected network.')
    }
  }

}
```

We can use this to interact with the Smart Contracts, and do stuff like calling Solidity functions, etc.
