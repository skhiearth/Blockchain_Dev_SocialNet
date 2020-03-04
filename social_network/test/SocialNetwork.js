const SocialNetwork = artifacts.require('./SocialNetwork.sol')

require('chai')
  .use(require('chai-as-promised'))
  .should()

contract('SocialNetwork', ([deployer, author, tipper]) => { // Array of three accounts used for testing
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

  describe('posts', async() => {
    let result, postCount

    before(async () => {
      result = await socialNetwork.createPost('Example Post', { from: author })
      postCount = await socialNetwork.postCount()
    })

    it('creates posts', async () => {
      assert.equal(postCount, 1)
      const event = result.logs[0].args
      assert.equal(event.id.toNumber(), postCount.toNumber(), 'id is correct')
      assert.equal(event.content, 'Example Post', 'Content is correct')
      assert.equal(event.tipAmount, '0', 'Tip amount is correct')
      assert.equal(event.author, author, 'Author is correct')

      await socialNetwork.createPost('', { from: author }).should.be.rejected;
    })

    it('lists posts', async () => {
      const post = await socialNetwork.posts(postCount)
      assert.equal(post.id.toNumber(), postCount.toNumber(), 'id is correct')
      assert.equal(post.content, 'Example Post', 'Content is correct')
      assert.equal(post.tipAmount, '0', 'Tip amount is correct')
      assert.equal(post.author, author, 'Author is correct')
    })

    it('allows users to tip posts', async () => {
      let oldBal
      oldBal = await web3.eth.getBalance(author)
      oldBal = new web3.utils.BN(oldBal)

      result = await socialNetwork.tipPost(postCount, { from: tipper, value: web3.utils.toWei('1', 'Ether') })

      const event = result.logs[0].args
      assert.equal(event.id.toNumber(), postCount.toNumber(), 'id is correct')
      assert.equal(event.content, 'Example Post', 'Content is correct')
      assert.equal(event.tipAmount, '1000000000000000000', 'Tip amount is correct')
      assert.equal(event.author, author, 'Author is correct')

      // Check that author's balance increases
      let newBal
      newBal = await web3.eth.getBalance(author)
      newBal = new web3.utils.BN(newBal)

      let tipAmt
      tipAmt = web3.utils.toWei('1', 'Ether')
      tipAmt = new web3.utils.BN(tipAmt)

      const expectedBalance = oldBal.add(tipAmt)
      assert.equal(newBal.toString(), expectedBalance.toString())

      await socialNetwork.tipPost(99, { from: tipper, value: web3.utils.toWei('1', 'Ether') }).should.be.rejected;
    })
  })
})