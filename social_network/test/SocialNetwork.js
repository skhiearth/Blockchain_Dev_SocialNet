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

    it('creates posts', async () => {
      result = await socialNetwork.createPost('Example Post', { from: author })
      postCount = await socialNetwork.postCount()
      assert.equal(postCount, 1)
      const event = result.logs[0].args
      assert.equal(event.id.toNumber(), postCount.toNumber(), 'id is correct')
      assert.equal(event.content, 'Example Post', 'Content is correct')
      assert.equal(event.tipAmount, '0', 'Tip amount is correct')
      assert.equal(event.author, author, 'Author is correct')

      await socialNetwork.createPost('', { from: author }).should.be.rejected;
    })

    it('lists posts', async () => {
      
    })

    it('allows users to tip posts', async () => {
      
    })
  })
})