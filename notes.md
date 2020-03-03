## What is a Blockchain?

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

## How does a Blockchain work?

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

## Why do we need Blockchain?

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

## How to become a blockchain developer?

Up until now, we have been discussing about how to send money using Blockchain. But it is also possible to build
applications using Blockchain. Unfortunately, Bitcoin is pretty limited in this, so we use a different blockchain
called **Ethereum** for development purposes. In addition to sending cryptocurrency, Ethereum allows developers to build
**Decentralised applications** or **DApps** which run on the blockchain. Ethereum achieves this using **Smart Contracts**
which are programs that run on the blockchain.

## How a Web Application works?

Normally, when we use a web application, we use a Web browser to load a web page which talks to a central web server over
a network. All the code for this app lives inside the central server and all of the data is housed inside a central
database. Anytime we transact with this application, we must transact directly with this central server. This can lead
to several problems. The application creators can change the code on the server or the data on the server anytime because
they have full control. We can eliminate this using the blockchain.

## How a Blockchain App works?

We can use a browser to load a webpage and that talks directly to the blockchain instead of a backend server and database. We
can store all of our application code and data on the blockchain instead of the central server. This is a transparent and
trust-worthy way of knowing that the application code and data won't change. All of the backend code for the application would
be made up of Smart Contracts. These are the building blocks of a blockchain application. All of code of the Smart Contract is
unchangeable. Once the code is sent on the blockchain, no one can update or tamper with it and we know that it'll work the
same way every single time.
Smart Contracts are written in a programming language called **Solidity**, which looks a lot like *JavaScript*. They are incharge
of reading and writing the data to and from the blockchain and executing an business logic that we write. Smart Contracts work
a lot like micro-services on the web. They are called so because they represent an unchangeable digital agreement.
All of the data on the application will be stored as transaction records inside the blocks on the blockchain.

### Dependencies for dAPP development:
1. **nodeJS**
2. **Ganache**: It offers a personal blockchain, which is like a real blockchain network but it runs on a computer, and hence is a
closed network. We can use this to develop Smart Contracts, run tests against the network, develop applications that talk
to the blockchain.
3. **Truffle Framework**: Used to develop Ethereum Smart Contracts with Solidity.
4. **Metamask**: A Chromium based extension; used to connect to the blockchain network. Metamask allows us to connect to
the blockchain with our personal account, and interact with smart contracts.
