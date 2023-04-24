'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    const users = this.mongo.db.collection('users')
    
    const result = await users.find({}).toArray()
    
    console.log(result)
    
    reply
      .code(200)
      .header('content-type', 'application/json')
      .send(result)
  })
}