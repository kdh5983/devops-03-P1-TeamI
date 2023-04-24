'use strict'

module.exports = async function (fastify, opts) {
  fastify.delete('/:id', async function (request, reply) {
    const body = request.body
   
    console.log(body)
    
    const articles = this.mongo.db.collection('article')
    
    const result = await articles.deleteOne({user_id:2})
    
    console.log(result)
   
    reply
      .code(200)
      .header('content-type', 'application/json')
      .send(result)

  })
}